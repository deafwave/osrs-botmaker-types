import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

const RUNELITE_ITEMID_URL = 'https://raw.githubusercontent.com/runelite/runelite/refs/heads/master/runelite-api/src/main/java/net/runelite/api/ItemID.java';
const OUTPUT_PATH = path.join(__dirname, '../../../src/types/runelite/net/runelite/api/ItemID.d.ts');

interface ItemConstant {
  name: string;
  value: number;
}

async function fetchItemIDJava(): Promise<string> {
  console.log('Fetching ItemID.java from RuneLite repository...');
  const response = await axios.get(RUNELITE_ITEMID_URL);
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
      value: parseInt(match[2], 10)
    });
  }
  
  return constants;
}

function generateTypeScriptDeclaration(constants: ItemConstant[]): string {
  const header = `/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
declare namespace net.runelite.api {
\texport class ItemID {`;

  const constantDeclarations = constants
    .map(constant => `\t\tstatic readonly ${constant.name} = ${constant.value};`)
    .join('\n');

  const footer = `\t}
}`;

  return `${header}\n${constantDeclarations}\n${footer}\n`;
}

async function main() {
  try {
    // Fetch the Java file
    const javaContent = await fetchItemIDJava();
    console.log('Java file fetched successfully');
    
    // Parse constants
    const constants = parseItemConstants(javaContent);
    console.log(`Parsed ${constants.length} item constants`);
    
    // Generate TypeScript declaration
    const tsDeclaration = generateTypeScriptDeclaration(constants);
    
    // Write to output file
    fs.writeFileSync(OUTPUT_PATH, tsDeclaration);
    console.log(`TypeScript declaration written to: ${OUTPUT_PATH}`);
    console.log('ItemID.d.ts has been successfully updated!');
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}