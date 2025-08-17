/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for interacting with NPCs (Non-Player Characters) in the game
     * Provides methods to find and interact with NPCs
     */
    interface npcs {
        /**
         * Gets the current animation ID of an NPC
         * @param npc The NPC to get the animation ID for
         * @returns The animation ID of the NPC
         */
        getAnimationID: (npc: net.runelite.api.NPC) => number;

        /**
         * Gets the attack speed of an NPC type
         * @param npcId The ID of the NPC type
         * @returns The attack speed in game ticks
         */
        getAttackSpeed: (npcId: number) => number;

        /**
         * Gets the head icon of an NPC (such as prayer icons)
         * @param npc The NPC to get the head icon for
         * @returns The head icon of the NPC
         */
        getHeadIcon: (npc: net.runelite.api.NPC) => net.runelite.api.HeadIcon;

        /**
         * Gets all NPCs with the specified IDs
         * @param ids Array of NPC IDs to search for
         * @returns Array of matching NPC instances
         */
        getWithIds: (ids: number[]) => net.runelite.api.NPC[];

        /**
         * Gets all NPCs with the specified names
         * @param names Array of NPC names to search for
         * @returns Array of matching NPC instances
         */
        getWithNames: (names: string[]) => net.runelite.api.NPC[];

        /**
         * Interacts with an NPC by name and action
         * @param npcName The name of the NPC to interact with
         * @param action The interaction action to perform
         */
        interact: (npcName: string, action: string) => void;

        /**
         * Interacts with a supplied NPC instance
         * @param target The NPC instance to interact with
         * @param action The interaction action to perform
         */
        interactSupplied: (target: net.runelite.api.NPC, action: string) => void;
    }
}
