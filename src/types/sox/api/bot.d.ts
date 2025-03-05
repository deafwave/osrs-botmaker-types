/// <reference path="../runelite/index.d.ts" />

declare const bot: SoxBotApi;

interface ExchangeRequest {
	itemId: number;
	quantity: number;
	aborted: boolean;
	complete: boolean;
	aborting: boolean;
	slot: number | null;
}
interface SoxBotApi {
	events: {
		unregisterAll: () => void;
	} & net.runelite.client.eventbus.EventBus;
	bank: {
		close: () => void;
		consumeIds: (ids: number[]) => boolean;
    	consumeNames: (names: string[]) => boolean;
		depositAll: () => void;
		depositAllWithId: (id: number) => void;
		depositAllWithName: (name: string) => void;
		depositWithId: (id: number) => void;
		depositWithName: (name: string) => void;
		getNotedMode: () => boolean;
		getQuantityOfAllIds: (itemIds: number[]) => number[];
		getQuantityOfAllNames: (itemNames: string[]) => number[];
		getQuantityOfId: (itemId: number) => number;
		getQuantityOfName: (itemName: string) => number;
		isBanking: () => boolean;
		isOpen: () => boolean;
		open: () => void;
		setNotedMode: (value: boolean) => void;
		withdrawAllWithId: (id: number) => void;
		withdrawAllWithName: (name: string) => void;
		withdrawQuantityWithId: (id: number, quantity: number) => void;
		withdrawWithId: (id: number) => void;
		withdrawWithName: (name: string) => void;
	};
	bmCache: {
		getBoolean: (key: string, defaultValue : boolean) => boolean;
		getInt: (key: string, defaultValue : number) => number;
		getString: (key: string, defaultValue : string) => string;
		saveBoolean: (key: string, value: boolean) => void;
		saveInt: (key: string, value: number) => void;
		saveString: (key: string, value: string) => void;
	};
	breakHandler: {
		setBreakHandlerStatus(status: boolean): void;
	};
	counters: {
		getCounter: (name: string) => number;
		setCounter: (name: string, value: number) => void;
	};
	equipment: {
		containsAllIds: (ids: number[]) => boolean;
		containsAllNames: (names: string[]) => boolean;
		containsAnyIds: (ids: number[]) => boolean;
		containsAnyNames: (names: string[]) => boolean;
		containsId: (id: number) => boolean;
		containsName: (name: string) => boolean;
		getEquipment: () => any[];
	};
	/** WARNING: QUEUE DOES NOT CLEAR ON GE ADDTOBUY */
	grandExchange: {
		addBuyToQueue: (itemId: number, quantity: number, walkToAndOpenGE: boolean) => ExchangeRequest;
		getExchangeQueueSize: () => number;
		getFreeSlots: () => number;
		isExchanging: () => boolean;
		isOpen: () => boolean;
	};
	graphicsObjects: {
		getWithIds: (ids: number[]) => net.runelite.api.GraphicsObject[];
	};
	inventory: {
		containsAllIds: (ids: number[]) => boolean;
		containsAllNames: (names: string[]) => boolean;
		containsAnyIds: (ids: number[]) => boolean;
		containsAnyNames: (names: string[]) => boolean;
		containsId: (id: number) => boolean;
		containsName: (name: string) => boolean;
		getEmptySlots: () => number;
		getQuantityOfAllIds: (itemIds: number[]) => number[];
		getQuantityOfAllNames: (itemNames: string[]) => number[];
		getQuantityOfId: (itemId: number) => number;
		getQuantityOfName: (itemName: string) => number;
		interactWithIds: (itemIds: number[], options: string[]) => void;
		interactWithNames: (itemNames: string[], options: string[]) => void;
		itemOnItemWithIds: (itemId1: number, itemId2: number) => void;
		itemOnNpcWithIds: (itemId: number, npc: net.runelite.api.NPC) => void;
		itemOnObjectWithIds: (itemId: number, tileObject: net.runelite.api.TileObject) => void;
		itemOnPlayerWithIds: (itemId: number, player: net.runelite.api.Player) => void;
		itemOnPlayerWithNames: (itemNames: string[], playerNames: string[]) => void;
	};
	npcs: {
		getAnimationID: (npc: net.runelite.api.NPC) => number;
		getAttackSpeed: (npcId: number) => number;
		getHeadIcon: (npc: net.runelite.api.NPC) => net.runelite.api.HeadIcon;
		getWithIds: (ids: number[]) => net.runelite.api.NPC[];
		getWithNames: (names: string[]) => net.runelite.api.NPC[];
		interact: (npcName: string, action: string) => void;
		interactSupplied: (target: net.runelite.api.NPC, action: string) => void;
	};
	objects: {
		getClosest: (tileObjects: net.runelite.api.TileObject[]) => net.runelite.api.TileObject;
		getClosestWithin: (tileObjects: net.runelite.api.TileObject[], maxDistance: number) => net.runelite.api.TileObject;
		getTileObjectComposition: (objectId: number) => net.runelite.api.ObjectComposition;
		getTileObjectsWithIds: (ids: number[]) => net.runelite.api.TileObject[];
		getTileObjectsWithNames: (names: string[]) => net.runelite.api.TileObject[];
		getTileObjectsWithOptions: (options: string[]) => net.runelite.api.TileObject[];
		interactObject: (objectName: string, action: string) => void;
		interactObjects: (objectNames: string[], actions: string[]) => void;
		interactSuppliedObject: (target: net.runelite.api.TileObject, action: string) => void;
		isNearIds: (ids: number[], distance: number) => boolean;
		isNearNames: (names: string[], distance: number) => boolean;
	};	
	players: {
		attackPlayer: (names: string[]) => void;
		followPlayer: (names: string[]) => void;
		isNearPlayer: (radius: number, names: string[]) => boolean;
		tradePlayer: (names: string[]) => void;
	};
	plugins: {
		questHelper: {
			getCurrentQuestName: () => string;
			getNextItem: () => any[];
			/** TODO: ItemOnItem type */
			getNextItemOnItem: () => any;
			getNextNpc: () => net.runelite.api.NPC;
			getNextTileObject: () => net.runelite.api.TileObject;
			getNextWidget: () => net.runelite.api.widgets.Widget;
			getNextWorldPoint: () => net.runelite.api.coords.WorldPoint;
			getOverlayText: () => string;
			isQuestStarted: () => boolean;
			performNextStep: () => boolean;
		};
	};
	prayer: {
		togglePrayer: (prayer: net.runelite.api.Prayer, bypassMouseClicks: boolean) => void;
	};
	projectiles: {
		getProjectilesWithIds: (ids: number[]) => net.runelite.api.Projectile[];
	};
	tileItems: {
		getItemsOfValue: (value: number) => TileItemInfo[];
		getItemsWithIds: (ids: number[]) => TileItemInfo[];
		getItemsWithNames: (names: string[]) => TileItemInfo[];
		lootItem: (tileItemInfo: TileItemInfo) => void;
		lootItemsOfValue: (value: number, maxDistance: number) => void;
		lootItemsWithIds: (lootIds: number[], maxDistance: number) => void;
		lootItemsWithNames: (lootNames: string[], maxDistance: number) => void;
	};
	variables: {
		getBooleanVariable: (variableName: string) => boolean;
		getIntArrayVariable: (variableName: string) => number[];
		getIntVariable: (variableName: string) => number;
		getStringArrayVariable: (variableName: string) => string[];
		getStringVariable: (variableName: string) => string;
		setVariable: (variableName: string, value: any) => void;
	};
	walking: {
		isWebWalking: () => boolean;
		/** Use if you're using a World point provided by the Bot Makers World Point true tile debug */
		walkToTrueWorldPoint: (x: number, y: number) => void;
		/** Use if you're walking to a world point thats already provided by the RL API such as localPlayer.getWorldLocation */
		walkToWorldPoint: (x: number, y: number) => void;
		webWalkCancel: () => void;
		webWalkStart: (worldPoint: net.runelite.api.coords.WorldPoint) => void;
	};
	widgets: {
		interactSpecifiedWidget: (packedWidgetId: number, identifier: number, opcode: number, param0: number) => void;
		interactSpecifiedWidget: (
			packedWidgetId: number,
			identifier: number,
			opcode: number,
			param0: number,
			param1: number,
		) => void;
		interactWidgetText: (text: string) => void;
	};

	menuAction(
		p0: number,
		p1: number,
		action: MenuAction,
		identifier: number,
		itemId: number,
		option: string,
		target: string,
		bounds?: Rectangle,
	): void;

	clearGameChat: () => void;
	localPlayerIdle: () => boolean;
	localPlayerMoving: () => boolean;
	printGameMessage: (message: string) => void;
	runClientScript: (ints: number[]) => void;
	terminate: () => void;
}
