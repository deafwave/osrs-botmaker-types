

declare namespace bot {
    /**
     * Interface for managing script variables
     * Provides methods to get and set various types of variables for script state management
     */
    interface variables {
        /**
         * Gets a boolean variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The boolean value, or false if not found
         */
        getBooleanVariable: (variableName: string) => boolean;

        /**
         * Gets an array of integers variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The integer array, or empty array if not found
         */
        getIntArrayVariable: (variableName: string) => number[];

        /**
         * Gets an integer variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The integer value, or -1 if not found
         */
        getIntVariable: (variableName: string) => number;

        /**
         * Gets an array of strings variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The string array, or empty array if not found
         */
        getStringArrayVariable: (variableName: string) => string[];

        /**
         * Gets a string variable by name
         * @param variableName The name of the variable to retrieve
         * @returns The string value, or empty string if not found
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
