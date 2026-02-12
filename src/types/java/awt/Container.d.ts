/// <reference path="./Component.d.ts" />

declare namespace java.awt {
	export class Container extends java.awt.Component {
		add(comp: java.awt.Component): java.awt.Component;
		add(comp: java.awt.Component, constraints: any): void;
		add(name: string, comp: java.awt.Component): java.awt.Component;
		remove(comp: java.awt.Component): void;
		remove(index: number): void;
		removeAll(): void;
		setLayout(layout: java.awt.LayoutManager): void;
		getComponents(): java.awt.Component[];
		getComponentCount(): number;
		validate(): void;
	}
}

type Container = java.awt.Container;
