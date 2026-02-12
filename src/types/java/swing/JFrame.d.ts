declare namespace javax.swing {
	export enum JFrameCloseOperation {
		DO_NOTHING_ON_CLOSE = 0,
		HIDE_ON_CLOSE = 1,
		DISPOSE_ON_CLOSE = 2,
		EXIT_ON_CLOSE = 3,
	}
	export class JFrame extends java.awt.Container {
		constructor(title?: string);
		setTitle(title: string): void;
		getTitle(): string;
		setSize(width: number, height: number): void;
		setDefaultCloseOperation(operation: JFrameCloseOperation | Number): void;
		addWindowListener(listener: java.awt.event.WindowListener): void;
		setJMenuBar(menuBar: JMenuBar): void;
		getJMenuBar(): JMenuBar;
		pack(): void;
		setLocation(x: number, y: number): void;
		setLocationRelativeTo(component: any): void;
		setContentPane(contentPane: JPanel): void;
		getContentPane(): JPanel;
		setResizable(resizable: boolean): void;
		dispose(): void;
	}

	namespace WindowConstants {
		const DO_NOTHING_ON_CLOSE: number = 0;
		const HIDE_ON_CLOSE: number = 1;
		const DISPOSE_ON_CLOSE: number = 2;
		const EXIT_ON_CLOSE: number = 3;
	}
}

type JFrame = javax.swing.JFrame;
