/// <reference path="../awt/Frame.d.ts" />

declare namespace javax.swing {
	export enum JFrameCloseOperation {
		DO_NOTHING_ON_CLOSE = 0,
		HIDE_ON_CLOSE = 1,
		DISPOSE_ON_CLOSE = 2,
		EXIT_ON_CLOSE = 3,
	}
	export class JFrame extends java.awt.Frame {
		constructor(title?: string);
		setDefaultCloseOperation(operation: JFrameCloseOperation | Number): void;
		setJMenuBar(menuBar: JMenuBar): void;
		getJMenuBar(): JMenuBar;
		setContentPane(contentPane: JPanel): void;
		getContentPane(): JPanel;
	}

	namespace WindowConstants {
		const DO_NOTHING_ON_CLOSE: number = 0;
		const HIDE_ON_CLOSE: number = 1;
		const DISPOSE_ON_CLOSE: number = 2;
		const EXIT_ON_CLOSE: number = 3;
	}
}

type JFrame = javax.swing.JFrame;
