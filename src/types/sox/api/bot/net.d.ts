

declare namespace bot {
    /**
     * Interface for network communication between bots
     * Allows sending messages to other bots or players
     */
    interface net {
        /**
         * Sends a BotMaker message to the specified Discord IDs via the socket server
         * @param targetIds Array of Discord IDs to send the message to
         * @param message The message content to send
         * @param includeSelf Whether to include the sender in the recipients
         */
        sendMessage: (targetIds: string[], message: string, includeSelf: boolean) => void;

        /**
         * Sends a BotMaker message to the specified RuneScape names via the socket server
         * @param rsNames Array of RuneScape display names to send the message to
         * @param message The message content to send
         * @param includeSelf Whether to include the sender in the recipients
         */
        sendMessageToRsns: (rsNames: string[], message: string, includeSelf: boolean) => void;

        /**
         * Sends a BotMaker message to all nearby local players via the socket server
         * @param message The message content to send
         * @param includeSelf Whether to include the sender in the recipients
         */
        sendMessageToLocalPlayers: (message: string, includeSelf: boolean) => void;
    }
}
