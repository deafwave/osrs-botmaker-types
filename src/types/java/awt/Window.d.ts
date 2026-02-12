/// <reference path="./Container.d.ts" />
/// <reference path="./event/WindowListener.d.ts" />

declare namespace java.awt {
	export class Window extends java.awt.Container {
		pack(): void;
		dispose(): void;
		setSize(width: number, height: number): void;
		setLocation(x: number, y: number): void;
		setLocationRelativeTo(component: java.awt.Component | null): void;
		addWindowListener(listener: java.awt.event.WindowListener): void;
		removeWindowListener(listener: java.awt.event.WindowListener): void;
	}
}
