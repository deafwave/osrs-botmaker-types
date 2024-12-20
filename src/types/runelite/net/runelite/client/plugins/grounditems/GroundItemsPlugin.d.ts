/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2017, Aria <aria@ar1as.space>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.grounditems {
	export class GroundItemsPlugin extends Plugin {
		/** TBD-1 */
		// export class PriceHighlight
		// ItemID for coins
		provideConfig(configManager: ConfigManager): GroundItemsConfig;
		private startUp(): void;
		private shutDown(): void;
		onConfigChanged(event: ConfigChanged): void;
		onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
		onItemSpawned(itemSpawned: net.runelite.api.events.ItemSpawned): void;
		// The spawn time remains set at the oldest spawn
		updateItemColor(item: GroundItem): void;
		onItemDespawned(itemDespawned: net.runelite.api.events.ItemDespawned): void;
		// When picking up an item when multiple stacks appear on the ground,
		// it is not known which item is picked up, so we invalidate the spawn
		// time
		onItemQuantityChanged(itemQuantityChanged: net.runelite.api.events.ItemQuantityChanged): void;
		onClientTick(event: net.runelite.api.events.ClientTick): void;
		private buildGroundItem(tile: Tile, item: TileItem): GroundItem;
		// Collect the data for the item
		// from ~script7240
		// non-gims see loot from other people as "group" loop since they are both group -1.
		// Update item price in case it is coins
		private reset(): void;
		// gets the hidden items from the text box in the config
		// gets the highlighted items from the text box in the config
		// Cache colors
		onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
		// <col=ff9040>Logs
		// <col=00ff00>Telekinetic Grab</col><col=ffffff> -> <col=ff9040>Logs
		// add some default colors
		updateList(item: string, hiddenList: boolean): void;
		private getHighlighted(groundItem: GroundItem): java.awt.Color;
		// Explicit hide takes priority over implicit highlight
		// item highlight colors takes priority over price thresholds
		private getHidden(groundItem: GroundItem): java.awt.Color;
		// Explicit highlight takes priority over implicit hide
		private getItemColor(highlighted: java.awt.Color, hidden: java.awt.Color): java.awt.Color;
		onFocusChanged(focusChanged: net.runelite.api.events.FocusChanged): void;
		private notifyHighlightedItem(item: GroundItem): void;
		private getValueByMode(gePrice: number, haPrice: number): number;
		private handleLootbeam(worldPoint: net.runelite.api.coords.WorldPoint): void;
		/*
		 * Return and remove the lootbeam from this location if lootbeam are disabled
		 * Lootbeam can be at this location if the config was just changed
		 */
		/*
		 * highlighted items have the highest priority so if an item is highlighted at this location
		 * we can early return
		 */
		// Explicit hide takes priority over implicit highlight
		// use color from the most expensive item
		private handleLootbeams(): void;
		private removeAllLootbeams(): void;
		private addLootbeam(worldPoint: net.runelite.api.coords.WorldPoint, color: java.awt.Color): void;
		private removeLootbeam(worldPoint: net.runelite.api.coords.WorldPoint): void;
		getItemColor(itemId: number): java.awt.Color;
		setItemColor(itemId: number, color: java.awt.Color): void;
		unsetItemColor(itemId: number): void;
	}
}
