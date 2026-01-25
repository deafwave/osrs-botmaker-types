/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Information about a tile item (ground item)
     */
    interface TileItemInfo {
        /** The tile where the item is located */
        tile: net.runelite.api.Tile;
        /** The tile item itself */
        item: net.runelite.api.TileItem;

        //** The name of the item */
        getName: () => string;
        /** Loots the item on the ground*/
        loot: () => void;
    }

    /**
     * A playable task that can chain functions with optional delays
     */
    interface PlayableTask {
        /**
         * Executes a callback action as part of the task.
         * @param callback A function to execute in this task step
         */
        act: (callback: () => void) => void;

        /**
         * Loops the current task, repeating its actions.
         */
        /**
         * Loops the current task a specific number of times, executing the provided callback function each iteration
         * with a fixed delay between iterations.
         * @param callback The function to execute on each iteration
         * @param iterations The number of times to repeat the callback
         * @param delayBetweenIterations The fixed delay (in milliseconds) between each iteration
         */
        loop: (callback: () => void, iterations: number, delayBetweenIterations: number) => void;
        /**
         * Loops the current task a specific number of times, executing the provided callback function each iteration,
         * with a randomized delay between iterations ranging from delayBetweenIterations to maxDelayBetweenIterations.
         * @param callback The function to execute on each iteration
         * @param iterations The number of times to repeat the callback
         * @param delayBetweenIterations The minimum delay (in milliseconds) between each iteration
         * @param maxDelayBetweenIterations The maximum delay (in milliseconds) between each iteration
         */
        loop: (callback: () => void, iterations: number, delayBetweenIterations: number, maxDelayBetweenIterations: number) => void;

        /**
         * Pauses the current task for a specific number of milliseconds before continuing.
         * @param milliseconds The exact number of milliseconds to sleep
         */
        sleep: (milliseconds : number) => void;

        /**
         * Pauses the current task for a random number of milliseconds between the provided minimum and maximum values before continuing.
         * @param minMilliseconds The minimum number of milliseconds to sleep
         * @param maxMilliseconds The maximum number of milliseconds to sleep
         */
        sleep: (minMilliseconds : number, maxMilliseconds : number) => void;

        /**
         * Stops the current task, preventing any further scheduled actions from executing.
         */
        stop: () => void;
    }
}