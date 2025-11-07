import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from "cheerio";


const BASE_URL = 'https://raw.githubusercontent.com/runelite/runelite/refs/heads/master/runelite-api/src/main/java/net/runelite/api';
const COMPONENT_BASE_URL = 'https://static.runelite.net/runelite-api/apidocs/constant-values.html';
const BASE_OUTPUT_DIR = path.join(__dirname, '../../../src/types/runelite/net/runelite/api');
const ROLLUP_OUTPUT_DIR = path.join(__dirname, '../../../src/rollup');

const GAMEVAL_OUTPUT_DIR = path.join(BASE_OUTPUT_DIR, 'gameval');
const GAMEVAL_ROLLUP_OUTPUT_DIR = path.join(ROLLUP_OUTPUT_DIR, 'gameval');

const FILES_TO_PROCESS = [
	{ name: 'EnumID', url: `${BASE_URL}/EnumID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'ItemID', url: `${BASE_URL}/ItemID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'NpcID', url: `${BASE_URL}/NpcID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'NullItemID', url: `${BASE_URL}/NullItemID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'NullNpcID', url: `${BASE_URL}/NullNpcID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'NullObjectID', url: `${BASE_URL}/NullObjectID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'ObjectID', url: `${BASE_URL}/ObjectID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'ParamID', url: `${BASE_URL}/ParamID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'SpriteID', url: `${BASE_URL}/SpriteID.java`, outputDir: BASE_OUTPUT_DIR },
	{ name: 'AnimationID', url: `${BASE_URL}/gameval/AnimationID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'DBTableID', url: `${BASE_URL}/gameval/DBTableID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'InterfaceID', url: `${BASE_URL}/gameval/InterfaceID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'InventoryID', url: `${BASE_URL}/gameval/InventoryID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'ItemID', url: `${BASE_URL}/gameval/ItemID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'NpcID', url: `${BASE_URL}/gameval/NpcID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'ObjectID', url: `${BASE_URL}/gameval/ObjectID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'ObjectID1', url: `${BASE_URL}/gameval/ObjectID1.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'SpotanimID', url: `${BASE_URL}/gameval/SpotanimID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'SpriteID', url: `${BASE_URL}/gameval/SpriteID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'VarClientID', url: `${BASE_URL}/gameval/VarClientID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'VarPlayerID', url: `${BASE_URL}/gameval/VarPlayerID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
	{ name: 'VarbitID', url: `${BASE_URL}/gameval/VarbitID.java`, outputDir: GAMEVAL_OUTPUT_DIR },
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

function parseComponentConstants(tableData: string): ItemConstant[] {
    const constants: ItemConstant[] = [];
    const constantRegex = /public\s+static\s+final\s+int\s+(\w+)\s*=?\s*([\d]+);?/g;
    let match;
    while ((match = constantRegex.exec(tableData)) !== null) {
      constants.push({
        name: match[1],
        value: parseInt(match[2], 10),
      });
    }
    console.log(`Found ${constants.length} constants in the table data`);
    return constants;
}

function generateTypeScriptDeclaration(constants: ItemConstant[], className: string,isGameval: boolean = false, namespace?: string): string {
    const javaRefPath = isGameval ? '../../../../../../../src/types/java/index.d.ts' : '../../../../../../src/types/java/index.d.ts';
    const runeliteRefPath = isGameval ? '../../../../../../../src/types/runelite/index.d.ts' : '../../../../../../src/types/runelite/index.d.ts';
    const ns = namespace || (isGameval ? 'net.runelite.api.gameval' : 'net.runelite.api');
  
    const header = `/// <reference path="${javaRefPath}" />
/// <reference path="${runeliteRefPath}" />
declare namespace ${ns} {
\texport class ${className} {`;
  
    const constantDeclarations = constants
      .map((constant) => `\t\tstatic readonly ${constant.name} = ${constant.value};`)
      .join('\n');
  
    const footer = `\t}
  }`;
  
    return `${header}\n${constantDeclarations}\n${footer}\n`;
}

function generateRollupExport(constants: ItemConstant[], className: string): string {
	const header = `// This file is auto-generated. Do not edit manually.\n`;

	// Deduplicate constants by name, keeping only the first occurrence
	const seen = new Set<string>();
	const deduplicatedConstants = constants.filter((constant) => {
		if (seen.has(constant.name)) {
			return false;
		}
		seen.add(constant.name);
		return true;
	});

	const constantExports = deduplicatedConstants
		.map((constant) => `\t${constant.name}: ${constant.value},`)
		.join('\n');

	return `${header}export default {\n${constantExports}\n};\n`;
}

async function processFile(url: string, outputPath: string, className: string, name: string, isGameval: boolean = false) {
	try {
		// Ensure output directory exists
		const outputDir = path.dirname(outputPath);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		// Fetch the Java file
		const javaContent = await fetchJavaFile(url, name);
		console.log(`${name} fetched successfully`);

		// Parse constants
		const constants = parseItemConstants(javaContent);
		console.log(`Parsed ${constants.length} constants from ${name}`);

		// Generate TypeScript declaration
		const tsDeclaration = generateTypeScriptDeclaration(constants, className, isGameval);

		// Write to output file
		fs.writeFileSync(outputPath, tsDeclaration);
		console.log(`TypeScript declaration written to: ${outputPath}`);

		if (!isGameval) {
			if (!fs.existsSync(ROLLUP_OUTPUT_DIR)) {
				fs.mkdirSync(ROLLUP_OUTPUT_DIR, { recursive: true });
			}

			const rollupExport = generateRollupExport(constants, className);
			const rollupPath = path.join(ROLLUP_OUTPUT_DIR, `${className}.ts`);
			fs.writeFileSync(rollupPath, rollupExport);
			console.log(`Rollup export written to: ${rollupPath}`);
		} else {
			if (!fs.existsSync(GAMEVAL_ROLLUP_OUTPUT_DIR)) {
				fs.mkdirSync(GAMEVAL_ROLLUP_OUTPUT_DIR, { recursive: true });
			}

			const rollupExport = generateRollupExport(constants, className);
			const rollupPath = path.join(GAMEVAL_ROLLUP_OUTPUT_DIR, `${className}.ts`);
			fs.writeFileSync(rollupPath, rollupExport);
			console.log(`Rollup export written to: ${rollupPath}`);
		}

		console.log(`${className}.d.ts has been successfully updated!`);
	} catch (error) {
		console.error(`Error processing ${name}:`, error);
		throw error;
	}
}

async function processComponentFile() {
	const { data: html } = await axios.get(COMPONENT_BASE_URL);
	const $htmlContent = cheerio.load(html);
	const componentIdTables: string[][] = [];
	$htmlContent("table.constantsSummary").each((i: number, tableElem: any) => {
		// Optionally check the caption for "net.runelite.api.widgets.ComponentID"
		const caption = $htmlContent(tableElem).find("caption").text().trim();
		if (caption === "net.runelite.api.widgets.ComponentID") {
		  console.log(`Table Caption Found: ${caption}`);
		  const rows = $htmlContent(tableElem).find("tr");
		  console.log(`  [MATCH] ComponentID table rows (constantsSummary table #${i}):`);
		  rows.each((k, rowElem) => {
			const cells = $htmlContent(rowElem)
			  .find("th,td")
			  .map((_: any, cell: any) => $htmlContent(cell).text().trim())
			  .get();
			componentIdTables.push(cells);
		  });
		}
	  });
	const componentIdTablesString = componentIdTables.map(table => table.join(" ")).join("\n");
	const constants = parseComponentConstants(componentIdTablesString);
	console.log(`Found ${constants.length} constants in the component ID table`);
	const tsDeclaration = generateTypeScriptDeclaration(constants, "ComponentID", false, "net.runelite.api.widgets");
	console.log(`Writing ComponentID.d.ts to ${path.join(BASE_OUTPUT_DIR, 'widgets', 'ComponentID.d.ts')}`);
	fs.writeFileSync(path.join(BASE_OUTPUT_DIR, 'widgets', 'ComponentID.d.ts'), tsDeclaration);
	console.log(`ComponentID.d.ts has been successfully updated!`);
	const rollupExport = generateRollupExport(constants, "ComponentID");
	const rollupPath = path.join(ROLLUP_OUTPUT_DIR, 'ComponentID.ts');
	fs.writeFileSync(rollupPath, rollupExport);
	console.log(`Rollup export written to: ${rollupPath}`);
}

async function main() {
	try {
		console.log(`Processing ${FILES_TO_PROCESS.length} RuneLite API files...\n`);

		for (const file of FILES_TO_PROCESS) {
			const outputPath = path.join(file.outputDir, `${file.name}.d.ts`);
			const isGameval = file.outputDir.includes('gameval');
			await processFile(file.url, outputPath, file.name, `${file.name}.java`, isGameval);
			console.log(''); // Add spacing between files
		}
		await processComponentFile();
		console.log('All files processed successfully!');
	} catch (error) {
		console.error('Error:', error);
		process.exit(1);
	}
}

if (require.main === module) {
	main();
}
