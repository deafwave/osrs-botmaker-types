/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for executing menu actions in the game
     * This is a low-level API for interacting with the game menu system
     */
    interface menuActions {
        /**
         * Executes a menu action with the specified parameters
         * @param p0 Parameter 0 - usually x coordinate
         * @param p1 Parameter 1 - usually y coordinate
         * @param action The menu action type
         * @param identifier The target identifier
         * @param itemId The item ID
         * @param option The menu option text
         * @param target The menu target text
         */
        (
            p0: number,
            p1: number,
            action: net.runelite.api.MenuAction,
            identifier: number,
            itemId: number,
            option: string,
            target: string
        ): void;

        /**
         * Executes a menu action with the specified parameters and bounds
         * @param p0 Parameter 0 - usually x coordinate
         * @param p1 Parameter 1 - usually y coordinate
         * @param action The menu action type
         * @param identifier The target identifier
         * @param itemId The item ID
         * @param option The menu option text
         * @param target The menu target text
         * @param bounds The rectangle bounds of the target
         */
        (
            p0: number,
            p1: number,
            action: net.runelite.api.MenuAction,
            identifier: number,
            itemId: number,
            option: string,
            target: string,
            bounds: java.awt.Rectangle
        ): void;
    }
}
