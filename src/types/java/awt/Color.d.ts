declare namespace java.awt {
	export class Color {
		/**
		 * Creates a color from a packed RGB int (`0xRRGGBB`) or a hex string.
		 * Use `constructor(rgba, true)` when alpha is packed in the top byte.
		 */
		constructor(hexString: string | number);
		/** Creates a color from a packed int (`0xAARRGGBB` when `hasAlpha` is `true`). */
		constructor(rgba: number, hasAlpha: boolean);
		constructor(
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			r: number,
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			g: number,
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			b: number,
		);
		constructor(
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			r: number,
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			g: number,
			/** 0 - 255 integer OR 0.00 - 1.00 normalized float */
			b: number,
			/** Must match channel scale: 0 - 255 with int RGB, or 0.00 - 1.00 with normalized RGB */
			a: number,
		);

		static BLACK: Color;
		static BLUE: Color;
		static CYAN: Color;
		static DARK_GRAY: Color;
		static GRAY: Color;
		static GREEN: Color;
		static LIGHT_GRAY: Color;
		static MAGENTA: Color;
		static ORANGE: Color;
		static PINK: Color;
		static RED: Color;
		static WHITE: Color;
		static YELLOW: Color;

		getRed(): number;
		getGreen(): number;
		getBlue(): number;
		getAlpha(): number;

		/** Returns a brighter version of this color */
		brighter(): Color;

		/** Returns a darker version of this color */
		darker(): Color;

		static decode(hexString: string): Color;
		static getColor(name: string): Color;
	}
}

type Color = java.awt.Color;
