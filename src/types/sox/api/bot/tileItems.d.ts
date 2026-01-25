/// <reference path="../../../runelite/index.d.ts" />
/// <reference path="./types.d.ts" />

declare namespace bot {
    /**
     * Interface for interacting with items on the ground (tile items)
     * Provides methods to find and loot items from the ground
     */
    interface tileItems {
        /**
         * Gets all items on the ground with a value equal to or greater than the specified value
         * @param value The minimum value of items to find
         * @returns Array of TileItemInfo objects for items meeting the value criteria
         */
        getItemsOfValue: (value: number) => TileItemInfo[];

        /**
         * Gets all items on the ground that match the specified IDs
         * @param ids Array of item IDs to match
         * @returns Array of TileItemInfo objects for matching items
         */
        getItemsWithIds: (ids: number[]) => TileItemInfo[];

        /**
         * Gets all items on the ground that match the specified names
         * @param names Array of item names to match
         * @returns Array of TileItemInfo objects for matching items
         */
        getItemsWithNames: (names: string[]) => TileItemInfo[];

        /**
         * Loots a specific item from the ground
         * @param tileItemInfo The TileItemInfo object representing the item to loot
         */
        lootItem: (tileItemInfo: TileItemInfo) => void;


        /**
         * Loots all items with the specified names within the maximum distance
         * @param lootNames Array of item names to loot
         * @param maxDistance The maximum distance to loot items from
         * @returns True if the operation was successful, false otherwise
         */
        lootItemsWithNames: (lootNames: string[], maxDistance: number) => boolean;

        /**
         * Loots the nearest ground item matching the given IDs within the max distance
         * @param lootIds Array of item IDs to loot
         * @param maxDistance The maximum distance to loot items from
         * @returns True if the operation was successful, false otherwise
         */
        lootItemsWithIds: (lootIds: number[], maxDistance: number) => boolean;

        /**
         * Loots the nearest ground item of the given value or higher within the max distance
         * @param value The minimum value of items to loot
         * @param maxDistance The maximum distance to loot items from
         * @returns True if the operation was successful, false otherwise
         */
        lootItemsOfValue: (value: number, maxDistance: number) => boolean;
    }
}
