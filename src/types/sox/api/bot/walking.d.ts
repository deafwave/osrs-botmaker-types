/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for player movement and navigation
     * Provides methods to control walking, running, and pathing in the game
     */
    interface walking {
        /**
         * Gets the calculated path for the current web walking operation
         * @returns Array of WorldPoint objects representing the calculated path
         */
        getWebWalkCalculatedPath: () => net.runelite.api.coords.WorldPoint[];

        /**
         * Checks if the player is currently using the RLPL web walking system
         * @returns True if the player is using RLPL web walking, false otherwise
         */
        isRlplWebWalking: () => boolean;

        /**
         * Checks if the player is currently running
         * @returns True if the player is running, false otherwise
         */
        isRunning: () => boolean;

        /**
         * Checks if the player is currently web walking
         * @returns True if the player is web walking, false otherwise
         */
        isWebWalking: () => boolean;

        /**
         * Toggles run mode on or off
         */
        toggleRun: () => void;

        /**
         * Walks to a true world point using coordinates
         * @param x The x-coordinate of the destination
         * @param y The y-coordinate of the destination
         * @description Use if you're using a World point provided by the Bot Makers World Point true tile debug
         */
        walkToTrueWorldPoint: (x: number, y: number) => void;

        /**
         * Walks to a world point using coordinates
         * @param x The x-coordinate of the destination
         * @param y The y-coordinate of the destination
         * @description Use if you're walking to a world point that's already provided by the RL API such as localPlayer.getWorldLocation
         */
        walkToWorldPoint: (x: number, y: number) => void;

        /**
         * Cancels the current web walking operation
         */
        webWalkCancel: () => void;

        /**
         * Starts web walking to a specific world point
         * @param worldPoint The WorldPoint destination to walk to
         */
        webWalkStart: (worldPoint: net.runelite.api.coords.WorldPoint) => void;

        /**
         * Web walks to the nearest bank
         */
        webWalkToNearestBank: () => void;

        /**
         * Starts web walking with full configuration options for food, stamina, teleports, and more
         * @param worldPoint The WorldPoint destination to walk to
         * @param eatFood Whether to eat food during the walk
         * @param useStamina Whether to use stamina potions
         * @param runEnergyMin Minimum run energy before stopping to rest
         * @param useTransports Whether to use transport methods
         * @param useTeleports Whether to use teleports
         * @param useEquipmentJewellery Whether to use equipment jewellery for teleports
         * @param useMinigameTeleports Whether to use minigame teleports
         * @param avoidWilderness Whether to avoid the wilderness
         * @param usePoh Whether to use Player Owned House
         * @param useCharterShips Whether to use charter ships
         */
        webWalkStartWithConfig: (
            worldPoint: net.runelite.api.coords.WorldPoint,
            eatFood: boolean,
            useStamina: boolean,
            runEnergyMin: number,
            useTransports: boolean,
            useTeleports: boolean,
            useEquipmentJewellery: boolean,
            useMinigameTeleports: boolean,
            avoidWilderness: boolean,
            usePoh: boolean,
            useCharterShips: boolean
        ) => void;

        /**
         * Refreshes the available transports for web walking
         */
        refreshTransports: () => void;
    }
}
