/// <reference path="./accountMaker.d.ts" />
/// <reference path="./attackStyle.d.ts" />
/// <reference path="./bank.d.ts" />
/// <reference path="./bmCache.d.ts" />
/// <reference path="./bmGlobalCache.d.ts" />
/// <reference path="./breakHandler.d.ts" />
/// <reference path="./counters.d.ts" />
/// <reference path="./equipment.d.ts" />
/// <reference path="./events.d.ts" />
/// <reference path="./grandExchange.d.ts" />
/// <reference path="./graphicsObjects.d.ts" />
/// <reference path="./inventory.d.ts" />
/// <reference path="./magic.d.ts" />
/// <reference path="./menuActions.d.ts" />
/// <reference path="./net.d.ts" />
/// <reference path="./notifier.d.ts" />
/// <reference path="./npcs.d.ts" />
/// <reference path="./objects.d.ts" />
/// <reference path="./players.d.ts" />
/// <reference path="./plugins.d.ts" />
/// <reference path="./prayer.d.ts" />
/// <reference path="./projectiles.d.ts" />
/// <reference path="./sailing.d.ts" />
/// <reference path="./shop.d.ts" />
/// <reference path="./task.d.ts" />
/// <reference path="./tileItems.d.ts" />
/// <reference path="./types.d.ts" />
/// <reference path="./variables.d.ts" />
/// <reference path="./walking.d.ts" />
/// <reference path="./web.d.ts" />
/// <reference path="./widgets.d.ts" />
/// <reference path="../../../runelite/index.d.ts" />
/// <reference path="../../java/awt/Rectangle.d.ts" />

declare namespace bot {
	// Core methods are accessed directly on the bot object
	interface SoxBotApi {
		// Namespaces
		accountMaker: bot.accountMaker;
		attackStyle: bot.attackStyle;
		bank: bot.bank;
		bmCache: bot.bmCache;
		bmGlobalCache: bot.bmGlobalCache;
		breakHandler: bot.breakHandler;
		counters: bot.counters;
		equipment: bot.equipment;
		events: bot.events;
		grandExchange: bot.grandExchange;
		graphicsObjects: bot.graphicsObjects;
		inventory: bot.inventory;
		magic: bot.magic;
		net: bot.net;
		notifier: bot.notifier;
		npcs: bot.npcs;
		objects: bot.objects;
		players: bot.players;
		plugins: bot.plugins;
		prayer: bot.prayer;
		projectiles: bot.projectiles;
		sailing: bot.sailing;
		shop: bot.shop;
		task: bot.task;
		tileItems: bot.tileItems;
		types: bot.types;
		variables: bot.variables;
		walking: bot.walking;
		web: bot.web;
		widgets: bot.widgets;

		// Direct methods
		/**
		 * Terminates the execution of the current script
		 */
		terminate: () => void;

		/**
		 * Returns true if the local player has an animation of -1 and is not moving
		 * @returns True if the local player is idle, false otherwise
		 */
		localPlayerIdle: () => boolean;

		/**
		 * Returns true if the local player is moving
		 * @returns True if the local player is moving, false otherwise
		 */
		localPlayerMoving: () => boolean;

		/**
		 * Performs a MenuAction
		 * @param p0 The first parameter
		 * @param p1 The second parameter
		 * @param action The menu action to perform
		 * @param identifier The identifier
		 * @param itemId The item ID
		 * @param option The option text
		 * @param target The target text
		 */
		menuAction(
			p0: number,
			p1: number,
			action: net.runelite.api.MenuAction,
			identifier: number,
			itemId: number,
			option: string,
			target: string
		): void;

		/**
		 * Performs a MenuAction with world view
		 * @param p0 The first parameter
		 * @param p1 The second parameter
		 * @param action The menu action to perform
		 * @param identifier The identifier
		 * @param itemId The item ID
		 * @param worldView The world view
		 * @param option The option text
		 * @param target The target text
		 */
		menuAction(
			p0: number,
			p1: number,
			action: net.runelite.api.MenuAction,
			identifier: number,
			itemId: number,
			worldView: number,
			option: string,
			target: string
		): void;

		/**
		 * Performs a MenuAction with the bounds of the given rectangle
		 * @param p0 The first parameter
		 * @param p1 The second parameter
		 * @param action The menu action to perform
		 * @param identifier The identifier
		 * @param itemId The item ID
		 * @param option The option text
		 * @param target The target text
		 * @param bounds The bounds rectangle
		 */
		menuAction(
			p0: number,
			p1: number,
			action: net.runelite.api.MenuAction,
			identifier: number,
			itemId: number,
			option: string,
			target: string,
			bounds: java.awt.Rectangle
		): void;

		/**
		 * Performs a MenuAction with world view and the bounds of the given rectangle
		 * @param p0 The first parameter
		 * @param p1 The second parameter
		 * @param action The menu action to perform
		 * @param identifier The identifier
		 * @param itemId The item ID
		 * @param worldView The world view
		 * @param option The option text
		 * @param target The target text
		 * @param bounds The bounds rectangle
		 */
		menuAction(
			p0: number,
			p1: number,
			action: net.runelite.api.MenuAction,
			identifier: number,
			itemId: number,
			worldView: number,
			option: string,
			target: string,
			bounds: java.awt.Rectangle
		): void;

		/**
		 * Returns true if the local player has an animation of -1 and is not moving for a given number of ticks
		 * @param ticks The number of ticks to check
		 * @returns True if the local player has been idle for the specified ticks, false otherwise
		 */
		localPlayerIdleFor: (ticks: number) => boolean;

		/**
		 * Runs a client script
		 * @param ints The integer parameters for the script
		 */
		runClientScript: (ints: number[]) => void;

		/**
		 @deprecated use log.clearGameChat()
		 */
		clearGameChat: () => void;

		/**
		@deprecated use log.print()
		 */
		printLogMessage: (message: string) => void;

		/**
		 @deprecated use log.printGameMessage()
		 */
		printGameMessage: (message: string) => void;
	}
}
