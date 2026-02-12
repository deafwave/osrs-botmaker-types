/// <reference path="./JComponent.d.ts" />

declare namespace javax.swing {
	export class JPanel extends JComponent {
		constructor(layout?: any);
	}
}

type JPanel = javax.swing.JPanel;
