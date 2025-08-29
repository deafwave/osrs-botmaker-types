/* eslint-disable @typescript-eslint/no-unused-vars */
import collisionDataFlagMap from '../rollup/CollisionDataFlag.js';
import componentIdMap from '../rollup/ComponentID.js';
import enumIdMap from '../rollup/EnumID.js';
import interfaceIdMap from '../rollup/InterfaceID.js';
import itemIdMap from '../rollup/ItemID.js';
import npcIdMap from '../rollup/NpcID.js';
import objectIdMap from '../rollup/ObjectID.js';
import parameterIdMap from '../rollup/ParamID.js';
import spriteIdMap from '../rollup/SpriteID.js';

export function _zRhinoRuneliteRollupBugFixes() {
	return {
		name: 'rhino-runelite-bug-fixes', // name of the plugin
		renderChunk(code: string, _chunk: any, _options: any) {
			const replacements = [
				{
					regex: /net\.runelite\.api\.NpcID\.(.*?)([\n ),;\]])/g,
					map: npcIdMap,
				},
				{
					regex: /net\.runelite\.api\.EnumID\.(.*?)([\n ),;\]])/g,
					map: enumIdMap,
				},
				{
					regex: /net\.runelite\.api\.ItemID\.(.*?)([\n ),;\]])/g,
					map: itemIdMap,
				},
				{
					regex: /net\.runelite\.api\.SpriteID\.(.*?)([\n ),;\]])/g,
					map: spriteIdMap,
				},
				{
					regex: /net\.runelite\.api\.CollisionDataFlag\.(.*?)([\n ),;\]])/g,
					map: collisionDataFlagMap,
				},
				{
					regex: /net\.runelite\.api\.ParamID\.(.*?)([\n ),;\]])/g,
					map: parameterIdMap,
				},
				{
					regex: /net\.runelite\.api\.widgets\.ComponentID\.(.*?)([\n ),;\]])/g,
					map: componentIdMap,
				},
				{
					regex: /net\.runelite\.api\.widgets\.InterfaceID\.(.*?)([\n ),;\]])/g,
					map: interfaceIdMap,
				},
				{
					regex: /net\.runelite\.api\.ObjectID\.(.*?)([\n ),;\]])/g,
					map: objectIdMap,
				},
			];

			let modifiedCode = code;
			for (const { regex, map } of replacements) {
				// @ts-expect-error can ignore the type failure on map[p1] because it's near-non-critical
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				modifiedCode = modifiedCode.replaceAll(regex, (_, p1, p2) => `${map[p1]}${p2}`);
			}
			return {
				code: modifiedCode,
				map: null,
			};
		},
	};
}
