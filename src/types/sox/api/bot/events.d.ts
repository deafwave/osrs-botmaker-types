/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for handling game events
     * Extends RuneLite's EventBus to provide event subscription capabilities
     */
    interface events extends net.runelite.client.eventbus.EventBus {
        /**
         * Unregisters all event handlers that have been registered
         * Useful for cleaning up event listeners when terminating a bot
         */
        unregisterAll: () => void;
    }
}
