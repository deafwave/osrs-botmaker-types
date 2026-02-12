import type { RollupOptions } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'node:path';
import { _zRhinoRuneliteRollupBugFixes } from './index.js';

function removeExports() {
	return {
		name: 'remove-exports',
		renderChunk(code: string, _chunk: any, _options: any) {
			const exportRegex = /export\s+\{[^}]*\};?/g;
			const modifiedCode = code.replace(exportRegex, '');
			return {
				code: modifiedCode,
				map: null,
			};
		},
	};
}

function removeHalfTreeshaken() {
	return {
		name: 'remove-half-treeshaken',
		renderChunk(code: string, _chunk: any, _options: any) {
			const linesToRemove = code.split('\n').filter((line) => !line.startsWith('[') && !line.startsWith('net.runelite.'));
			const modifiedCode = linesToRemove.join('\n');
			return {
				code: modifiedCode,
				map: null,
			};
		},
	};
}

export interface CreateRhinoRollupConfigOptions {
	entries?: string[];
	outputDir?: string;
}

export default createRhinoRollupConfig();

export function createRhinoRollupConfig(options?: CreateRhinoRollupConfigOptions): RollupOptions[] {
	const osPath = process.platform === 'win32' ? path.win32 : path.posix;
	const outputDir = options?.outputDir ?? 'dist';
	const entries = options?.entries
		?? (process.env.ROLLUP_ENTRY
			? [process.env.ROLLUP_ENTRY]
			: glob.sync(osPath.join('src', '*', 'index.ts')));

	return entries.map((file) => {
		return {
			input: file,
			output: {
				file: osPath.join(outputDir, `${path.basename(path.dirname(file))}.js`),
				plugins: [removeExports(), removeHalfTreeshaken()],
			},
			plugins: [
				nodeResolve(),
				cleanup({
					comments: 'none',
					sourcemap: false,
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					include: '**',
				}),
				/** @ts-expect-error */
				typescript(),
				_zRhinoRuneliteRollupBugFixes(),
				babel({
					babelHelpers: 'bundled',
					extensions: ['.js', '.ts'],
					presets: [['@babel/preset-env', { targets: { rhino: '1.7.14' }, modules: false }]],
				}),
			],
		};
	});
}
