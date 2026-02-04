declare namespace javax.swing.border {
	export interface Border {
		getBorderInsets(c: java.awt.Component): java.awt.Insets;
		isBorderOpaque(): boolean;
		paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number, y: number, width: number, height: number): void;
	}
}

type Border = javax.swing.border.Border;
