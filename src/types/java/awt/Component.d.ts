/// <reference path="./event/MouseListener.d.ts" />
/// <reference path="./event/KeyListener.d.ts" />

declare namespace java.awt {
	export abstract class Component {
		paint(g: Graphics2D): void;
		revalidate(): void;
		repaint(): void;

		// Visibility and state
		setVisible(visible: boolean): void;
		isVisible(): boolean;
		setEnabled(enabled: boolean): void;
		isEnabled(): boolean;

		// Listener methods
		addMouseListener(listener: java.awt.event.MouseListener): void;
		removeMouseListener(listener: java.awt.event.MouseListener): void;
		addKeyListener(listener: java.awt.event.KeyListener): void;
		removeKeyListener(listener: java.awt.event.KeyListener): void;
	}
}
