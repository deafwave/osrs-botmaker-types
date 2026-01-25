declare namespace bot {
    /**
     * Interface for interacting with shops
     * Provides methods to check shop status, buy items, and check stock
     */
    interface shop {
        /**
         * Checks if the shop interface is currently open
         * @returns True if the shop is open, false otherwise
         */
        isOpen: () => boolean;

        /**
         * Gets the index of an item in the shop by its item ID
         * @param itemId The item ID to find
         * @returns The index of the item, or null if not found
         */
        getIndex: (itemId: number) => number | null;

        /**
         * Buys a specified quantity of an item from the shop by its item ID
         * @param itemId The item ID to buy
         * @param quantity The quantity to buy
         * @returns True if the operation was successful, false otherwise
         */
        buy: (itemId: number, quantity: number) => boolean;

        /**
         * Checks if the shop has at least the specified quantity of an item by its item ID
         * @param itemId The item ID to check
         * @param quantity The minimum quantity to check for
         * @returns True if the shop has at least the specified quantity, false otherwise
         */
        has: (itemId: number, quantity: number) => boolean;

        /**
         * Gets the current stock of a specific item in the shop by its item ID
         * @param itemId The item ID to check
         * @returns The current stock of the item
         */
        getStock: (itemId: number) => number;
    }
}
