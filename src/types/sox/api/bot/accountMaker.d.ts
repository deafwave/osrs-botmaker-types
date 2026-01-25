declare namespace bot {
    /**
     * Interface for Account Maker functionality
     * Provides access to current objective and task information
     */
    interface accountMaker {
        /**
         * Gets the current Account Maker objective
         * @returns The current objective. Uncaptured Sox type of com.theplug.plugins.accountmaker.config.impl.Objective 
         */
        getCurrentObjective: () => any;

        /**
         * Gets the current Account Maker task
         * @returns The current task. Uncaptured Sox type of com.theplug.plugins.accountmaker.tasks.AbstractTask
         */
        getCurrentTask: () => any;
    }
}
