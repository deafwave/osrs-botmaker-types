/// <reference path="./bank.d.ts" />
/// <reference path="./bmCache.d.ts" />
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
/// <reference path="./tileItems.d.ts" />
/// <reference path="./types.d.ts" />
/// <reference path="./variables.d.ts" />
/// <reference path="./walking.d.ts" />
/// <reference path="./widgets.d.ts" />

declare namespace bot {
    // Core methods are accessed directly on the bot object
    interface SoxBotApi extends bot {

        // Namespaces
        bank: bot.bank;
        bmCache: bot.bmCache;
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
        tileItems: bot.tileItems;
        variables: bot.variables;
        walking: bot.walking;
        widgets: bot.widgets;

        // Direct methods
        menuAction: {
            (
                p0: number,
                p1: number,
                action: net.runelite.api.MenuAction,
                identifier: number,
                itemId: number,
                option: string,
                target: string
            ): void;
            (
                p0: number,
                p1: number,
                action: net.runelite.api.MenuAction,
                identifier: number,
                itemId: number,
                option: string,
                target: string,
                bounds: java.awt.Rectangle
            ): void;
        };
        clearGameChat: () => void;
        localPlayerIdle: () => boolean;
        localPlayerMoving: () => boolean;
        printGameMessage: (message: string) => void;
        runClientScript: (ints: number[]) => void;
        terminate: () => void;
    }
}
