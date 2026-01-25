
declare namespace bot {
    /**
     * Interface for managing attack styles
     * Provides methods to set the player's attack style
     */
    interface attackStyle {
        /**
         * Sets the attack style for the player. Accepts one or more styles as arguments.
         * Valid styles are: 'Accurate', 'Aggressive', 'Controlled', 'Defensive', 'Longrange', 'Rapid'.
         * Example: setStyle('Accurate', 'Aggressive')
         * @param attackStyles Array of attack style names to set
         */
        setStyle: (...attackStyles: ('Accurate' | 'Aggressive' | 'Controlled' | 'Defensive' | 'Longrange' | 'Rapid')[]) => void;
    }
}
