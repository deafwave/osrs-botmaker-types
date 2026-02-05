/// <reference path="../awt/Color.d.ts" />
/// <reference path="./Border.d.ts" />

declare namespace javax.swing {
	export class BorderFactory {
		static createEmptyBorder(
			top?: number,
			left?: number,
			bottom?: number,
			right?: number,
		): javax.swing.border.Border;
		static createLineBorder(
			color: java.awt.Color,
			thickness?: number,
			rounded?: boolean,
		): javax.swing.border.Border;
		static createCompoundBorder(
			border?: javax.swing.border.Border,
			outerBorder?: javax.swing.border.Border,
		): javax.swing.border.Border;

		static createRaisedBevelBorder(): javax.swing.border.Border;
		static createLoweredBevelBorder(): javax.swing.border.Border;
		static createEtchedBorder(
			etchType?: number,
			highlight?: java.awt.Color,
			shadow?: java.awt.Color,
		): javax.swing.border.Border;
		static createTitledBorder(title: string): javax.swing.border.TitledBorder;
		static createTitledBorder(
			border: javax.swing.border.Border,
			title: string,
		): javax.swing.border.TitledBorder;
	}
}

type BorderFactory = javax.swing.BorderFactory;
