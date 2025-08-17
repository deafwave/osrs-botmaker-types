/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Represents a Grand Exchange buy/sell request
     */
    interface ExchangeRequest {
        /** The ID of the item being bought or sold */
        itemId: number;
        /** The quantity of the item being bought or sold */
        quantity: number;
        /** Whether the request has been aborted */
        aborted: boolean;
        /** Whether the request has been completed */
        complete: boolean;
        /** Whether the request is in the process of being aborted */
        aborting: boolean;
        /** The Grand Exchange slot used for this request, or null if not assigned */
        slot: number | null;
    }

    /**
     * Interface for interacting with the Grand Exchange
     * Provides methods to buy/sell items and check GE status
     * @warning QUEUE DOES NOT CLEAR ON GE ADDTOBUY
     */
    interface grandExchange {
        /**
         * Adds a buy order to the Grand Exchange queue
         * @param itemId The ID of the item to buy
         * @param quantity The quantity of the item to buy
         * @param walkToAndOpenGE Whether to automatically walk to and open the GE
         * @returns An ExchangeRequest object representing the buy order
         */
        addBuyToQueue: (itemId: number, quantity: number, walkToAndOpenGE: boolean) => ExchangeRequest;

        /**
         * Gets the current size of the Grand Exchange queue
         * @returns The number of requests in the queue
         */
        getExchangeQueueSize: () => number;

        /**
         * Gets the number of free slots in the Grand Exchange
         * @returns The number of available GE slots
         */
        getFreeSlots: () => number;

        /**
         * Checks if the Grand Exchange is currently processing exchanges
         * @returns True if exchanges are in progress, false otherwise
         */
        isExchanging: () => boolean;

        /**
         * Checks if the Grand Exchange interface is open
         * @returns True if the GE is open, false otherwise
         */
        isOpen: () => boolean;
    }
}
