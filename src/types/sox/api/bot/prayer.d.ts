/// <reference path="../../../runelite/index.d.ts" />

declare namespace bot {
    /**
     * Interface for interacting with the prayer system
     * Provides methods to toggle prayers on and off
     */
    interface prayer {
        /**
         * Enables the specified prayer. Use bypassMouseClicks to send the action without a click.
         * @param prayer The Prayer enum value to enable
         * @param bypassMouseClicks True to toggle without mouse clicks, false to use mouse clicks
         */
        togglePrayer: (prayer: net.runelite.api.Prayer, bypassMouseClicks: boolean) => void;
    }
}
