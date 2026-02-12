/// <reference path="./Window.d.ts" />

declare namespace java.awt {
	export class Frame extends java.awt.Window {
		setTitle(title: string): void;
		getTitle(): string;
		setResizable(resizable: boolean): void;
	}
}
