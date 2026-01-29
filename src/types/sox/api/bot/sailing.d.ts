/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for managing boat sailing functionality
     * Provides methods to control boat movement, speed, direction, and coordinate conversion
     */
    interface sailing {
        /**
         * Reverses the boat direction
         * @returns True if the operation was successful, false otherwise
         */
        reverse: () => boolean;

        /**
         * Gets the current boat angle (0-1920)
         * @returns The current boat angle
         */
        getBoatAngle: () => number;

        /**
         * Sets the sails to full speed (move mode 2)
         * @returns True if the operation was successful, false otherwise
         */
        setSails: () => boolean;

        /**
         * Checks if the sails are currently set
         * @returns True if the sails are set, false otherwise
         */
        isSailsSet: () => boolean;

        /**
         * Checks if the player is currently on a boat (in a separate world view)
         * @returns True if the player is on a boat, false otherwise
         */
        isOnBoat: () => boolean;

        /**
         * Sets the sails using the GameObject on the boat (alternative method)
         * @returns True if the operation was successful, false otherwise
         */
        setSailsObject: () => boolean;

        /**
         * Gets the current boat heading direction (0-15, where 0 is South and increases clockwise)
         * @returns The current boat heading direction
         */
        getBoatHeading: () => number;

        /**
         * Lowers the boat speed (decreases move mode by 1)
         * @returns True if the operation was successful, false otherwise
         */
        lowerSpeed: () => boolean;

        /**
         * Checks if the boat is in reverse (move mode 3)
         * @returns True if the boat is in reverse, false otherwise
         */
        isReversing: () => boolean;

        /**
         * Raises the boat speed (increases move mode by 1)
         * @returns True if the operation was successful, false otherwise
         */
        raiseSpeed: () => boolean;

        /**
         * Gets the current boat movement mode (0 = no movement, 1 = lower speed, 2 = full speed)
         * @returns The current boat movement mode
         */
        getMovementSpeed: () => number;

        /**
         * Converts a WorldPoint from the boat's world view to main world coordinates
         * @param boatWorldPoint The WorldPoint in the boat's world view
         * @returns The converted WorldPoint in main world coordinates
         */
        convertToMainWorld: (boatWorldPoint: net.runelite.api.coords.WorldPoint) => net.runelite.api.coords.WorldPoint;

        /**
         * Checks if the boat is moving (move mode > 0)
         * @returns True if the boat is moving, false otherwise
         */
        isBoatMoving: () => boolean;

        /**
         * Stops the boat completely
         * @returns True if the operation was successful, false otherwise
         */
        stopBoat: () => boolean;

        /**
         * Unsets the sails to stop movement
         * @returns True if the operation was successful, false otherwise
         */
        unsetSails: () => boolean;

        /**
         * Sets the heading direction of the boat (0-15, where 0 is south, clockwise)
         * @param direction The heading direction to set (0-15)
         * @returns True if the operation was successful, false otherwise
         */
        setHeading: (direction: number) => boolean;

        /**
         * Checks if the sailing control interface is available and visible
         * @returns True if the sailing controls are available, false otherwise
         */
        isSailingControlsAvailable: () => boolean;

        /**
         * Gets the boat's center location in main world coordinates (center at scene 3,3)
         * @returns The boat's center location as a WorldPoint
         */
        getBoatMainWorldLocation: () => net.runelite.api.coords.WorldPoint;

        /**
         * Gets the player's location in main world coordinates (useful when on a boat)
         * @returns The player's location as a WorldPoint
         */
        getPlayerMainWorldLocation: () => net.runelite.api.coords.WorldPoint;

        /**
         * Gets the boat's center location with decimal precision [x, y]
         * @returns Array containing the boat's center location coordinates [x, y]
         */
        getBoatMainWorldLocationFloats: () => number[];
    }
}
