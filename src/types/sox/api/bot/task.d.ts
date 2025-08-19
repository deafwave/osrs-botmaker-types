
/**
 * Represents a task that can be performed by a bot.
 */
declare namespace bot {
    /**
     * Represents an instance of a bot task with actions and control methods.
     */
    interface botTask {
        /**
         * Executes the provided function as an action of the bot task.
         * @param fn - The function to execute as part of the task's action.
         */
        act: (fn: () => void) => void;

        /**
         * Stops the execution of the bot task.
         */
        stop: () => void;
    }

    /**
     * Represents a factory for creating bot tasks.
     */
    interface task {
        /**
         * Creates a new instance of a bot task.
         * @returns A new botTask instance.
         */
        create: () => botTask;
    }
}
