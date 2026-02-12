import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const CLIENT_URL = 'https://raw.githubusercontent.com/runelite/runelite/refs/heads/master/runelite-api/src/main/java/net/runelite/api/Client.java';
const OUTPUT_PATH = path.join(__dirname, '../../../src/types/runelite/net/runelite/api/Client.d.ts');

// ── Phase 1: Fetch ──────────────────────────────────────────────────────────

async function fetchClientJava(): Promise<string> {
	console.log('Fetching Client.java from RuneLite repository...');
	const response = await axios.get(CLIENT_URL);
	return response.data;
}

// ── Phase 2: Preprocess ─────────────────────────────────────────────────────

interface PreprocessResult {
	copyright: string;
	imports: Map<string, string>; // shortName -> full.package
	extendsClause: string[];
	body: string;
}

function preprocess(source: string): PreprocessResult {
	const lines = source.split('\n');

	// Extract copyright header
	const copyrightStart = source.indexOf('/*');
	const copyrightEnd = source.indexOf('*/');
	const copyright = source.substring(copyrightStart, copyrightEnd + 2);

	// Parse imports: build Map<shortName, fullPackage>
	const imports = new Map<string, string>();
	for (const line of lines) {
		const m = line.match(/^import\s+([\w.]+)\.(\w+);/);
		if (m) {
			imports.set(m[2], m[1]);
		}
	}

	// Extract extends clause
	const interfaceLine = lines.find(l => /^public\s+interface\s+Client\s+extends\s+/.test(l));
	let extendsClause: string[] = [];
	if (interfaceLine) {
		const m = interfaceLine.match(/extends\s+(.+)/);
		if (m) {
			extendsClause = m[1].replace(/\s*\{?\s*$/, '').split(',').map(s => s.trim());
		}
	}

	// Isolate interface body
	const bodyStart = source.indexOf('{', source.indexOf('public interface Client'));
	const bodyEnd = source.lastIndexOf('}');
	const body = source.substring(bodyStart + 1, bodyEnd);

	return { copyright, imports, extendsClause, body };
}

// ── Phase 3: Parse ──────────────────────────────────────────────────────────

interface ParsedMember {
	kind: 'method' | 'constant';
	javadoc: string | null;
	isNullable: boolean;
	isDeprecated: boolean;
	signature: string;
}

type State = 'IDLE' | 'IN_JAVADOC' | 'IN_ANNOTATIONS' | 'IN_DEFAULT_BODY';

function parseBody(body: string): ParsedMember[] {
	const lines = body.split('\n');
	const members: ParsedMember[] = [];

	let state: State = 'IDLE';
	let javadocLines: string[] = [];
	let annotations: string[] = [];
	let signatureAccum = '';
	let braceDepth = 0;
	let currentIsNullable = false;
	let currentIsDeprecated = false;

	function flushMember(rawSig: string) {
		const sig = rawSig.replace(/\s+/g, ' ').trim();
		if (!sig) return;

		const isConstant = /^\s*(int|long|double|float|String|boolean)\s+\w+\s*=/.test(sig);

		members.push({
			kind: isConstant ? 'constant' : 'method',
			javadoc: javadocLines.length > 0 ? javadocLines.join('\n') : null,
			isNullable: currentIsNullable,
			isDeprecated: currentIsDeprecated,
			signature: sig,
		});

		javadocLines = [];
		annotations = [];
		currentIsNullable = false;
		currentIsDeprecated = false;
		signatureAccum = '';
	}

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();

		if (state === 'IN_DEFAULT_BODY') {
			for (const ch of line) {
				if (ch === '{') braceDepth++;
				if (ch === '}') braceDepth--;
			}
			if (braceDepth <= 0) {
				state = 'IDLE';
			}
			continue;
		}

		if (state === 'IDLE' || state === 'IN_ANNOTATIONS') {
			if (trimmed === '' || trimmed === '//') {
				continue;
			}

			if (trimmed.startsWith('/**')) {
				state = 'IN_JAVADOC';
				javadocLines = [trimmed];
				if (trimmed.endsWith('*/')) {
					state = 'IN_ANNOTATIONS';
				}
				continue;
			}

			if (trimmed.startsWith('*') || trimmed.startsWith('*/')) {
				// continuation of javadoc outside state — shouldn't happen, but safe
				continue;
			}

			if (trimmed.startsWith('@')) {
				state = 'IN_ANNOTATIONS';
				if (trimmed.startsWith('@Nullable')) {
					currentIsNullable = true;
				}
				if (trimmed.startsWith('@Deprecated')) {
					currentIsDeprecated = true;
				}
				annotations.push(trimmed);
				continue;
			}

			// Must be a signature line
			state = 'IDLE';
			signatureAccum += ' ' + trimmed;

			// Check if signature is complete (ends with ; or {)
			if (trimmed.endsWith(';')) {
				const sig = signatureAccum.replace(/;$/, '').trim();
				flushMember(sig);
			} else if (trimmed.endsWith('{')) {
				// default method - capture signature, skip body
				const sig = signatureAccum.replace(/\{$/, '').trim();
				flushMember(sig);
				state = 'IN_DEFAULT_BODY';
				braceDepth = 1;
			} else {
				// Multi-line signature, keep accumulating
				// stay in IDLE to accumulate next lines
			}
			continue;
		}

		if (state === 'IN_JAVADOC') {
			javadocLines.push(trimmed);
			if (trimmed.endsWith('*/')) {
				state = 'IN_ANNOTATIONS';
			}
			continue;
		}
	}

	return members;
}

// ── Phase 4: Transform ──────────────────────────────────────────────────────

// Packages that need fully-qualified names in the output
const QUALIFY_PACKAGES = new Set([
	'net.runelite.api.widgets',
	'net.runelite.api.coords',
	'net.runelite.api.clan',
	'net.runelite.api.hooks',
	'net.runelite.api.vars',
	'net.runelite.api.worldmap',
	'net.runelite.api.dbtable',
	'net.runelite.api.annotations',
	'com.jagex.oldscape.pub',
	'java.awt',
	'java.io',
]);

const PRIMITIVE_TYPE_MAP: Record<string, string> = {
	'int': 'number',
	'long': 'number',
	'double': 'number',
	'float': 'number',
	'byte': 'number',
	'short': 'number',
	'boolean': 'boolean',
	'void': 'void',
	'String': 'string',
	'Object': 'any',
	'Integer': 'number',
	'Long': 'number',
	'Double': 'number',
	'Float': 'number',
	'Boolean': 'boolean',
};

function resolveType(javaType: string, imports: Map<string, string>): string {
	javaType = javaType.trim();

	// Handle arrays
	if (javaType.endsWith('[]')) {
		const base = javaType.replace(/\[\]$/, '');
		return resolveType(base, imports) + '[]';
	}

	// Handle varargs (shouldn't appear here but just in case)
	if (javaType.endsWith('...')) {
		const base = javaType.replace(/\.\.\.$/, '').trim();
		return resolveType(base, imports) + '[]';
	}

	// Handle generics
	const genericMatch = javaType.match(/^(\w+)<(.+)>$/);
	if (genericMatch) {
		const outer = genericMatch[1];
		const inner = genericMatch[2];

		// Map<K, V>
		if (outer === 'Map') {
			const parts = splitGenericArgs(inner);
			if (parts.length === 2) {
				const keyType = resolveType(parts[0].trim(), imports);
				const valueType = resolveType(parts[1].trim(), imports);
				return `Record<${keyType}, ${valueType}>`;
			}
		}

		// List<X>
		if (outer === 'List' || outer === 'ArrayList') {
			const elementType = resolveType(inner.trim(), imports);
			return `${elementType}[]`;
		}

		// EnumSet<X> / Set<X>
		if (outer === 'EnumSet' || outer === 'Set') {
			const elementType = resolveType(inner.trim(), imports);
			return `Set<${elementType}>`;
		}

		// Deque<X>
		if (outer === 'Deque') {
			const elementType = resolveType(inner.trim(), imports);
			return `java.util.Deque<${elementType}>`;
		}

		// HashTable<X>
		if (outer === 'HashTable') {
			const elementType = resolveType(inner.trim(), imports);
			return `HashTable<${elementType}>`;
		}

		// IterableHashTable<X>
		if (outer === 'IterableHashTable') {
			const elementType = resolveType(inner.trim(), imports);
			return `IterableHashTable<${elementType}>`;
		}

		// NameableContainer<X>
		if (outer === 'NameableContainer') {
			const elementType = resolveType(inner.trim(), imports);
			return `NameableContainer<${elementType}>`;
		}

		// NodeCache etc - keep generic
		const resolvedOuter = resolveType(outer, imports);
		const resolvedInner = resolveType(inner, imports);
		return `${resolvedOuter}<${resolvedInner}>`;
	}

	// Primitive types
	if (PRIMITIVE_TYPE_MAP[javaType] !== undefined) {
		return PRIMITIVE_TYPE_MAP[javaType];
	}

	// IntPredicate
	if (javaType === 'IntPredicate') {
		return '(id: number) => boolean';
	}

	// FileDescriptor
	if (javaType === 'FileDescriptor') {
		const pkg = imports.get('FileDescriptor');
		if (pkg) {
			return `${pkg}.FileDescriptor`;
		}
		return 'java.io.FileDescriptor';
	}

	// Check if type needs qualification via imports
	const pkg = imports.get(javaType);
	if (pkg && QUALIFY_PACKAGES.has(pkg)) {
		return `${pkg}.${javaType}`;
	}

	// Same package (net.runelite.api) or unresolved - use unqualified
	return javaType;
}

function splitGenericArgs(s: string): string[] {
	const result: string[] = [];
	let depth = 0;
	let current = '';
	for (const ch of s) {
		if (ch === '<') depth++;
		if (ch === '>') depth--;
		if (ch === ',' && depth === 0) {
			result.push(current);
			current = '';
		} else {
			current += ch;
		}
	}
	if (current) result.push(current);
	return result;
}

// Reserved words in TypeScript
const RESERVED_WORDS = new Set(['var', 'const', 'class', 'function', 'return', 'in', 'default', 'switch', 'case', 'break', 'continue', 'new', 'delete', 'typeof', 'instanceof', 'void', 'this', 'super', 'with', 'yield', 'enum', 'export', 'import', 'extends', 'implements', 'package', 'private', 'protected', 'public', 'static']);

function safeParamName(name: string): string {
	if (RESERVED_WORDS.has(name)) {
		return 'variable';
	}
	return name;
}

interface TransformedMember {
	javadoc: string | null;
	declaration: string;
}

function transformConstant(member: ParsedMember, imports: Map<string, string>): TransformedMember {
	// e.g. "int DRAW_2D_ALL = ~0"
	const m = member.signature.match(/^(\w+)\s+(\w+)\s*=\s*(.+)$/);
	if (!m) {
		return { javadoc: member.javadoc, declaration: `// unparsed: ${member.signature}` };
	}

	const name = m[2];
	const tsType = resolveType(m[1], imports);
	return {
		javadoc: member.javadoc,
		declaration: `static readonly ${name}: ${tsType};`,
	};
}

function transformMethod(member: ParsedMember, imports: Map<string, string>): TransformedMember {
	let sig = member.signature;

	// Remove access modifiers
	sig = sig.replace(/^(public|protected|private|static|abstract|final|default|synchronized|native)\s+/g, '');
	// May have multiple modifiers
	sig = sig.replace(/^(public|protected|private|static|abstract|final|default|synchronized|native)\s+/g, '');

	// Parse return type and method name + params
	// Format: ReturnType methodName(params)
	const methodMatch = sig.match(/^(.+?)\s+(\w+)\s*\(([^)]*(?:\([^)]*\))*[^)]*)\)\s*$/);
	if (!methodMatch) {
		// Try no-param method: ReturnType methodName()
		const noParamMatch = sig.match(/^(.+?)\s+(\w+)\s*\(\s*\)\s*$/);
		if (noParamMatch) {
			const returnType = resolveType(noParamMatch[1].trim(), imports);
			const methodName = noParamMatch[2];
			const nullableSuffix = member.isNullable ? ' | null' : '';
			const deprecatedDoc = getDeprecatedDoc(member);
			return {
				javadoc: member.javadoc,
				declaration: `${deprecatedDoc}${methodName}(): ${returnType}${nullableSuffix};`,
			};
		}

		return { javadoc: member.javadoc, declaration: `// unparsed: ${sig}` };
	}

	const rawReturnType = methodMatch[1].trim();
	const methodName = methodMatch[2];
	const rawParams = methodMatch[3].trim();

	const returnType = resolveType(rawReturnType, imports);
	const nullableSuffix = member.isNullable ? ' | null' : '';

	const tsParams = transformParams(rawParams, imports);
	const deprecatedDoc = getDeprecatedDoc(member);

	return {
		javadoc: member.javadoc,
		declaration: `${deprecatedDoc}${methodName}(${tsParams}): ${returnType}${nullableSuffix};`,
	};
}

function getDeprecatedDoc(member: ParsedMember): string {
	if (member.isDeprecated && !member.javadoc) {
		return '/** @deprecated */\n\t\t';
	}
	return '';
}

function transformParams(rawParams: string, imports: Map<string, string>): string {
	if (!rawParams.trim()) return '';

	const params = splitParams(rawParams);
	const tsParams: string[] = [];

	for (let i = 0; i < params.length; i++) {
		let param = params[i].trim();
		if (!param) continue;

		// Strip annotations from parameter
		let paramNullable = false;
		param = param.replace(/@\w+(?:\([^)]*\))?\s*/g, (match) => {
			if (match.trim().startsWith('@Nullable')) {
				paramNullable = true;
			}
			return '';
		}).trim();

		// Handle varargs
		const isVarargs = param.includes('...');
		if (isVarargs) {
			param = param.replace('...', '').trim();
		}

		// Split type and name
		const parts = param.split(/\s+/);
		if (parts.length < 2) continue;

		const paramName = safeParamName(parts[parts.length - 1]);
		const paramType = parts.slice(0, parts.length - 1).join(' ');

		let tsType = resolveType(paramType, imports);
		if (paramNullable) {
			tsType += ' | null';
		}

		if (isVarargs) {
			tsParams.push(`...${paramName}: ${tsType}[]`);
		} else {
			tsParams.push(`${paramName}: ${tsType}`);
		}
	}

	return tsParams.join(', ');
}

function splitParams(s: string): string[] {
	const result: string[] = [];
	let depth = 0;
	let current = '';
	for (const ch of s) {
		if (ch === '<' || ch === '(') depth++;
		if (ch === '>' || ch === ')') depth--;
		if (ch === ',' && depth === 0) {
			result.push(current);
			current = '';
		} else {
			current += ch;
		}
	}
	if (current.trim()) result.push(current);
	return result;
}

function transformMember(member: ParsedMember, imports: Map<string, string>): TransformedMember {
	if (member.kind === 'constant') {
		return transformConstant(member, imports);
	}
	return transformMethod(member, imports);
}

// ── Phase 5: Emit ───────────────────────────────────────────────────────────

function formatJavadoc(javadoc: string, indent: string): string {
	const lines = javadoc.split('\n');
	return lines.map(line => {
		const trimmed = line.trim();
		// Add leading space before * on continuation lines (standard javadoc style)
		if (trimmed.startsWith('*') && !trimmed.startsWith('/**')) {
			return `${indent} ${trimmed}`;
		}
		return `${indent}${trimmed}`;
	}).join('\n');
}

function resolveExtendsClause(extendsTypes: string[], imports: Map<string, string>): string {
	return extendsTypes.map(t => {
		const pkg = imports.get(t);
		if (pkg && QUALIFY_PACKAGES.has(pkg)) {
			return `${pkg}.${t}`;
		}
		return t;
	}).join(', ');
}

function emit(copyright: string, extendsClause: string[], members: TransformedMember[], imports: Map<string, string>): string {
	const lines: string[] = [];

	lines.push('/// <reference path="../../../../../../src/types/java/index.d.ts" />');
	lines.push('/// <reference path="../../../../../../src/types/runelite/index.d.ts" />');

	lines.push(copyright);

	const resolvedExtends = resolveExtendsClause(extendsClause, imports);
	lines.push(`declare namespace net.runelite.api {`);
	lines.push(`\t/**`);
	lines.push(`\t * Represents the RuneScape client.`);
	lines.push(`\t */`);
	lines.push(`\texport class Client extends ${resolvedExtends} {`);

	for (let i = 0; i < members.length; i++) {
		const member = members[i];
		const indent = '\t\t';

		if (member.javadoc) {
			lines.push(formatJavadoc(member.javadoc, indent));
		}

		// Handle multi-line declarations (long parameter lists)
		const declLines = member.declaration.split('\n');
		for (const dl of declLines) {
			lines.push(`${indent}${dl}`);
		}

		// Add blank line between members (but not after last)
		if (i < members.length - 1) {
			lines.push('');
		}
	}

	lines.push(`\t}`);
	lines.push(`}`);
	lines.push('');

	return lines.join('\n');
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
	try {
		// Phase 1: Fetch
		const source = await fetchClientJava();
		console.log('Client.java fetched successfully');

		// Phase 2: Preprocess
		const { copyright, imports, extendsClause, body } = preprocess(source);
		console.log(`Parsed ${imports.size} imports, extends: [${extendsClause.join(', ')}]`);

		// Phase 3: Parse
		const members = parseBody(body);
		console.log(`Parsed ${members.length} members (${members.filter(m => m.kind === 'method').length} methods, ${members.filter(m => m.kind === 'constant').length} constants)`);

		// Phase 4: Transform
		const transformed = members.map(m => transformMember(m, imports));

		// Phase 5: Emit
		const output = emit(copyright, extendsClause, transformed, imports);

		// Ensure output directory exists
		const outputDir = path.dirname(OUTPUT_PATH);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		fs.writeFileSync(OUTPUT_PATH, output);
		console.log(`Client.d.ts written to: ${OUTPUT_PATH}`);
		console.log('Client.d.ts has been successfully updated!');
	} catch (error) {
		console.error('Error generating Client.d.ts:', error);
		process.exit(1);
	}
}

if (require.main === module) {
	main();
}
