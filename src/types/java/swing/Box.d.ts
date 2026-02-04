declare namespace javax.swing {
	export class Box extends JComponent {
		constructor(axis: number);

		static createHorizontalBox(): javax.swing.Box;
		static createVerticalBox(): javax.swing.Box;
		static createRigidArea(dimension: java.awt.Dimension): java.awt.Component;
		static createHorizontalStrut(width: number): java.awt.Component;
		static createVerticalStrut(height: number): java.awt.Component;
		static createGlue(): java.awt.Component;
		static createHorizontalGlue(): java.awt.Component;
		static createVerticalGlue(): java.awt.Component;
	}
}

type Box = javax.swing.Box;
