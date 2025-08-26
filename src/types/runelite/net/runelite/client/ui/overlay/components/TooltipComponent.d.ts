/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../api/IndexedSprite.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class TooltipComponent {
		getBounds(): Rectangle;
		render(graphics: Graphics2D): java.awt.Dimension;
		setBackgroundColor(backgroundColor: java.awt.Color): void;
		setModIcons(modIcons: net.runelite.api.IndexedSprite[]): void;
		setPosition(position: net.runelite.api.Point): void;
		setPreferredLocation(position: net.runelite.api.Point): void;
		setPreferredSize(dimension: java.awt.Dimension): void;
		setText(text: string): void;
	}
}
