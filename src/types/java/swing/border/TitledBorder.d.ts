/// <reference path="../../Graphics.d.ts" />
/// <reference path="../../awt/Color.d.ts" />
/// <reference path="../../awt/Component.d.ts" />
/// <reference path="../../awt/Font.d.ts" />
/// <reference path="../../awt/Insets.d.ts" />
/// <reference path="../Border.d.ts" />

declare namespace javax.swing.border {
	export class TitledBorder implements Border {
		static DEFAULT_JUSTIFICATION: number;
		static DEFAULT_POSITION: number;
		static ABOVE_TOP: number;
		static TOP: number;
		static BELOW_TOP: number;
		static ABOVE_BOTTOM: number;
		static BOTTOM: number;
		static BELOW_BOTTOM: number;
		static LEADING: number;
		static TRAILING: number;

		constructor(title: string);
		constructor(border: Border);
		constructor(border: Border, title: string);
		constructor(border: Border, title: string, titleJustification: number, titlePosition: number);
		constructor(
			border: Border,
			title: string,
			titleJustification: number,
			titlePosition: number,
			titleFont: java.awt.Font,
		);
		constructor(
			border: Border,
			title: string,
			titleJustification: number,
			titlePosition: number,
			titleFont: java.awt.Font,
			titleColor: java.awt.Color,
		);

		getBorder(): Border;
		getTitle(): string;
		getTitleJustification(): number;
		getTitlePosition(): number;
		getTitleFont(): java.awt.Font;
		getTitleColor(): java.awt.Color;

		setBorder(border: Border): void;
		setTitle(title: string): void;
		setTitleJustification(justification: number): void;
		setTitlePosition(position: number): void;
		setTitleFont(font: java.awt.Font): void;
		setTitleColor(color: java.awt.Color): void;

		getBorderInsets(c: java.awt.Component): java.awt.Insets;
		isBorderOpaque(): boolean;
		paintBorder(
			c: java.awt.Component,
			g: java.awt.Graphics,
			x: number,
			y: number,
			width: number,
			height: number,
		): void;
	}
}

type TitledBorder = javax.swing.border.TitledBorder;
