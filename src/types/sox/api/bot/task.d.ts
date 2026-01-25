
/// <reference path="./types.d.ts" />

declare namespace bot {
    /**
     * Interface for creating playable tasks
     * Provides methods to create tasks that can chain functions with optional delays
     */
    interface task {
        /**
         * Creates a new task object that can chain functions with optional delays in between
         * @returns A new PlayableTask instance
         */
        create: () => PlayableTask;
    }
}