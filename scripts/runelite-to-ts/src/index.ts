import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL =
	'https://raw.githubusercontent.com/runelite/runelite/refs/heads/master/runelite-api/src/main/java/net/runelite/api';
const OUTPUT_DIR = path.join(__dirname, '../../../src/types/runelite/net/runelite/api');

const FILES_TO_PROCESS = [
	{ name: 'ItemID', url: `${BASE_URL}/ItemID.java` },
	{ name: 'NpcID', url: `${BASE_URL}/NpcID.java` },
	{ name: 'NullItemID', url: `${BASE_URL}/NullItemID.java` },
	{ name: 'NullNpcID', url: `${BASE_URL}/NullNpcID.java` },
	{ name: 'NullObjectID', url: `${BASE_URL}/NullObjectID.java` },
	{ name: 'ObjectID', url: `${BASE_URL}/ObjectID.java` },
	{ name: 'ParamID', url: `${BASE_URL}/ParamID.java` },
	{ name: 'SpriteID', url: `${BASE_URL}/SpriteID.java` },
];

interface ItemConstant {
	name: string;
	value: number;
}

async function fetchJavaFile(url: string, name: string): Promise<string> {
	console.log(`Fetching ${name} from RuneLite repository...`);
	const response = await axios.get(url);
	return response.data;
}

function parseItemConstants(javaContent: string): ItemConstant[] {
	const constants: ItemConstant[] = [];

	// Match static final int constants
	const constantRegex = /static\s+final\s+int\s+(\w+)\s*=\s*(\d+);/g;
	let match;

	while ((match = constantRegex.exec(javaContent)) !== null) {
		constants.push({
			name: match[1],
			value: parseInt(match[2], 10),
		});
	}

	return constants;
}

function generateTypeScriptDeclaration(constants: ItemConstant[], className: string): string {
	const header = `/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
declare namespace net.runelite.api {
\texport class ${className} {`;

	const constantDeclarations = constants
		.map((constant) => `\t\tstatic readonly ${constant.name} = ${constant.value};`)
		.join('\n');

	const footer = `\t}
}`;

	return `${header}\n${constantDeclarations}\n${footer}\n`;
}

async function processFile(url: string, outputPath: string, className: string, name: string) {
	try {
		// Fetch the Java file
		const javaContent = await fetchJavaFile(url, name);
		console.log(`${name} fetched successfully`);

		// Parse constants
		const constants = parseItemConstants(javaContent);
		console.log(`Parsed ${constants.length} constants from ${name}`);

		// Generate TypeScript declaration
		const tsDeclaration = generateTypeScriptDeclaration(constants, className);

		// Write to output file
		fs.writeFileSync(outputPath, tsDeclaration);
		console.log(`TypeScript declaration written to: ${outputPath}`);
		console.log(`${className}.d.ts has been successfully updated!`);
	} catch (error) {
		console.error(`Error processing ${name}:`, error);
		throw error;
	}
}

async function main() {
	try {
		console.log(`Processing ${FILES_TO_PROCESS.length} RuneLite API files...\n`);

		for (const file of FILES_TO_PROCESS) {
			const outputPath = path.join(OUTPUT_DIR, `${file.name}.d.ts`);
			await processFile(file.url, outputPath, file.name, `${file.name}.java`);
			console.log(''); // Add spacing between files
		}

		console.log('All files processed successfully!');
	} catch (error) {
		console.error('Error:', error);
		process.exit(1);
	}
}

if (require.main === module) {
	main();
}
