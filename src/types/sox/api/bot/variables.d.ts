

declare namespace bot {
    /**
     * Interface for managing script variables
     * Provides methods to get and set various types of variables for script state management
     */
    interface variables {
        /**
         * Gets a boolean variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The boolean value
         */
        getBooleanVariable: (variableName: string) => boolean;

        /**
         * Gets an array of integers variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The integer array
         */
        getIntArrayVariable: (variableName: string) => number[];

        /**
         * Gets an integer variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The integer value
         */
        getIntVariable: (variableName: string) => number;

        /**
         * Gets an array of strings variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The string array
         */
        getStringArrayVariable: (variableName: string) => string[];

        /**
         * Gets a string variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The string value
         */
        getStringVariable: (variableName: string) => string;

        /**
         * Sets a variable of any type by name
         * @param variableName The name of the variable to set
         * @param value The value to set
         */
        setVariable: (variableName: string, value: number | number[] | string | string[] | boolean) => void;
    }
}
