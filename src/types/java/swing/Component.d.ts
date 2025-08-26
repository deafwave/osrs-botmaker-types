/// <reference path="../awt/Graphics2D.d.ts" />
/// <reference path="../awt/Dimension.d.ts" />
declare namespace javax.swing {
	export abstract class Component {
		static LEFT_ALIGNMENT: number;
		static CENTER_ALIGNMENT: number;
		static RIGHT_ALIGNMENT: number;

		abstract setAlignmentX(alignment: number): void;
		abstract getAlignmentX(): number;
		abstract setAlignmentY(alignment: number): void;
		abstract getAlignmentY(): number;

		abstract paint(g: java.awt.Graphics2D): void;
		abstract paintComponent(g: java.awt.Graphics2D): void;
		abstract paintBorder(g: java.awt.Graphics2D): void;
		abstract paintChildren(g: java.awt.Graphics2D): void;

		abstract setPreferredSize(dimension: java.awt.Dimension): void;
	}
}
