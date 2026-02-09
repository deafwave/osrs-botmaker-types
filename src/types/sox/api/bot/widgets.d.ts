

declare namespace bot {
    /**
     * Interface for interacting with UI widgets
     * Provides methods to interact with game interface elements
     */
    interface widgets {
        /**
         * Handles dialogue options by clicking continue or selecting from the provided dialogue options
         * @param dialogues Array of dialogue option texts to select (for continue-only use e.g. [] or ["Continue"])
         * @returns True if dialogue was handled, false otherwise
         */
        handleDialogue: (dialogues: string[]) => boolean;

        /**
         * Interacts with a widget using packed widget ID, identifier, opcode, param0, and param1
         */
        /**
         * Interacts with a widget using packed widget ID, identifier, opcode, param0, and optionally param1.
         * 
         * @param packedWidgetId The packed widget ID
         * @param identifier The identifier for the widget action
         * @param opcode The opcode specifying the action
         * @param param0 The first parameter for the action
         * @param param1 (Optional) The second parameter for the action
         */
        interactSpecifiedWidget(
            packedWidgetId: number,
            identifier: number,
            opcode: number,
            param0: number,
            param1?: number
        ): void;

        /**
         * Interacts with a widget by matching its text content. Sends a click within the coordinates of the first widget found to contain the specified text.
         * @param text The text to search for in widgets
         */
        interactWidgetText: (text: string) => void;

        /**
         * Enables special attack
         */
        enableSpecialAttack: () => void;
    }
}
