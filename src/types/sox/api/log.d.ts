interface SoxLogApi {
	/**
	 * Clears the in-game chat
	 */
	clearGameChat: () => void;

	/**
	 * Prints a message
	 * @param message The message to print
	 */
	print: (message: string) => void;

	/**
	 * Prints a message with a specified color
	 * @param message The message to print
	 * @param color The color to use
	 */
	printColor: (message: string, color: java.awt.Color) => void;

	/**
	 * Prints a message in the game chat
	 * @param message The message to print
	 */
	printGameMessage: (message: string) => void;

	/**
	 * Prints a message with RGB color values
	 * @param message The message to print
	 * @param r Red value (0-255)
	 * @param g Green value (0-255)
	 * @param b Blue value (0-255)
	 */
	printRGB: (message: string, r: number, g: number, b: number) => void;
}
declare const log: SoxLogApi;
