/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="./LayoutableRenderableEntity.d.ts" />
/// <reference path="./ComponentOrientation.d.ts" />

declare namespace net.runelite.client.ui.overlay.components {
	export class SplitComponentBuilder {
		bounds(bounds: Rectangle): SplitComponentBuilder;
		build(): SplitComponent;
		first(first: LayoutableRenderableEntity): SplitComponentBuilder;
		gap(gap: net.runelite.api.Point): SplitComponentBuilder;
		orientation(orientation: ComponentOrientation): SplitComponentBuilder;
		preferredLocation(preferredLocation: net.runelite.api.Point): SplitComponentBuilder;
		preferredSize(preferredSize: java.awt.Dimension): SplitComponentBuilder;
		second(second: LayoutableRenderableEntity): SplitComponentBuilder;
		toString(): string;
	}

	export class SplitComponent {
		builder(): SplitComponentBuilder;
		setFirst(first: LayoutableRenderableEntity): void;
		setGap(gap: net.runelite.api.Point): void;
		setOrientation(orientation: ComponentOrientation): void;
		setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
		setPreferredSize(preferredSize: java.awt.Dimension): void;
		setSecond(second: LayoutableRenderableEntity): void;
	}
}
