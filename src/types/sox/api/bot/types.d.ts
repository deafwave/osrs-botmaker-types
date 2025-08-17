/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    interface TileItemInfo {
        id: number;
        name: string;
        quantity: number;
        location: net.runelite.api.coords.WorldPoint;
    }

}
