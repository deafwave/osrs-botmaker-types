#!/usr/bin/env tsx

/**
 * Generate RuneLite Barrel File Script
 *
 * This script automatically generates the barrel file (index.d.ts) for the RuneLite types.
 * It scans all .d.ts files in src/types/runelite and creates reference path directives
 * for each file, sorted alphabetically for consistency.
 *
 * Usage:
 *   npm run generate:runelite-barrel
 *
 * The script will:
 * - Recursively find all .d.ts files (excluding index.d.ts)
 * - Generate /// <reference path="..." /> directives
 * - Sort paths alphabetically
 * - Write to src/types/runelite/index.d.ts
 */

import { readdir, writeFile } from "fs/promises";
import { join, relative } from "path";

/**
 * Recursively find all .d.ts files in a directory
 */
async function findTypeScriptDeclarations(
	dir: string,
	baseDir: string = dir,
): Promise<string[]> {
	const files: string[] = [];
	const entries = await readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = join(dir, entry.name);

		if (entry.isDirectory()) {
			// Recursively search subdirectories
			const subFiles = await findTypeScriptDeclarations(fullPath, baseDir);
			files.push(...subFiles);
		} else if (entry.isFile() && entry.name.endsWith(".d.ts")) {
			// Skip index.d.ts files
			if (entry.name === "index.d.ts") continue;

			// Get relative path from base directory
			const relativePath = relative(baseDir, fullPath);
			files.push(relativePath);
		}
	}

	return files;
}

/**
 * Generate the barrel file content with reference paths
 */
function generateBarrelContent(files: string[]): string {
	// Sort files alphabetically for consistent output
	const sortedFiles = [...files].sort();

	// Generate reference directives
	const references = sortedFiles.map((file) => {
		// Use forward slashes for consistency
		const normalizedPath = file.replace(/\\/g, "/");
		return `/// <reference path="./${normalizedPath}" />`;
	});

	return references.join("\n") + "\n";
}

/**
 * Main function to generate the RuneLite barrel file
 */
async function main() {
	const runeliteTypesDir = join(process.cwd(), "src/types/runelite");
	const indexPath = join(runeliteTypesDir, "index.d.ts");

	console.log("🔍 Scanning for TypeScript declaration files...");
	const files = await findTypeScriptDeclarations(runeliteTypesDir);

	console.log(`✅ Found ${files.length} declaration files`);

	console.log("📝 Generating barrel file...");
	const content = generateBarrelContent(files);

	await writeFile(indexPath, content, "utf-8");

	console.log(`✨ Successfully generated ${indexPath}`);
	console.log(`   Contains ${files.length} reference paths`);
}

// Run the script
main().catch((error) => {
	console.error("❌ Error generating barrel file:", error);
	process.exit(1);
});
