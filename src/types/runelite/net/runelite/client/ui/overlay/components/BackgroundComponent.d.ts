/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class BackgroundComponent {
		constructor();
		constructor(backgroundColor: string, rectangle: Rectangle, fill: boolean);
		render(graphics: Graphics2D): java.awt.Dimension;
		setBackgroundColor(backgroundColor: string): void;
		setFill(fill: boolean): void;
		setRectangle(rectangle: Rectangle): void;
	}
}
