import type { RollupOptions } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'node:path';
import { createRequire } from 'node:module';
import { _zRhinoRuneliteRollupBugFixes } from './index.js';

const require = createRequire(import.meta.url);
const presetEnvironmentPath = require.resolve('@babel/preset-env');

function removeExports() {
	return {
		name: 'remove-exports',
		renderChunk(code: string) {
			const exportRegex = /export\s+{[^}]*};?/g;
			const modifiedCode = code.replaceAll(exportRegex, '');
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
		renderChunk(code: string) {
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
	outputDirectory?: string;
}

export default createRhinoRollupConfig();

export function createRhinoRollupConfig(options?: CreateRhinoRollupConfigOptions): RollupOptions[] {
	const osPath = process.platform === 'win32' ? path.win32 : path.posix;
	const outputDirectory = options?.outputDirectory ?? 'dist';
	const entries = options?.entries
		?? (process.env.ROLLUP_ENTRY
			? [process.env.ROLLUP_ENTRY]
			: glob.sync(osPath.join('src', '*', 'index.ts')));

	return entries.map((file) => {
		return {
			input: file,
			output: {
				file: osPath.join(outputDirectory, `${path.basename(path.dirname(file))}.js`),
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
				/** @ts-expect-error rollup plugin type mismatch */
				typescript(),
				_zRhinoRuneliteRollupBugFixes(),
				babel({
					babelHelpers: 'bundled',
					extensions: ['.js', '.ts'],
					presets: [[presetEnvironmentPath, { targets: { rhino: '1.7.14' }, modules: false }]],
				}),
			],
		};
	});
}
