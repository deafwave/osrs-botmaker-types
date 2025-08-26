/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />

declare namespace net.runelite.client.ui.overlay.components {
	export class ImageComponent {
		constructor();
		constructor(image: BufferedImage);

		getBounds(): Rectangle;
		render(graphics: Graphics2D): java.awt.Dimension;
		setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
		setPreferredSize(dimension: java.awt.Dimension): void;
	}
}
