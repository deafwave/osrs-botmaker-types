declare namespace javax.swing {
	export class JScrollPane extends javax.swing.JComponent {
		constructor(component: javax.swing.JComponent);
		setViewportView(component: javax.swing.JComponent): void;
		getViewportView(): javax.swing.JComponent;
		setVerticalScrollBarPolicy(policy: number): void;
		getVerticalScrollBarPolicy(): number;
		setHorizontalScrollBarPolicy(policy: number): void;
		getHorizontalScrollBarPolicy(): number;
		getVerticalScrollBar(): javax.swing.JScrollBar;
		getHorizontalScrollBar(): javax.swing.JScrollBar;
		setPreferredSize(size: java.awt.Dimension): void;
		setMinimumSize(dimension: java.awt.Dimension): void;
		setMaximumSize(dimension: java.awt.Dimension): void;
	}

	export class ScrollPaneConstants {
		static readonly VERTICAL_SCROLLBAR_AS_NEEDED: number;
		static readonly VERTICAL_SCROLLBAR_ALWAYS: number;
		static readonly VERTICAL_SCROLLBAR_NEVER: number;
		static readonly HORIZONTAL_SCROLLBAR_AS_NEEDED: number;
		static readonly HORIZONTAL_SCROLLBAR_ALWAYS: number;
		static readonly HORIZONTAL_SCROLLBAR_NEVER: number;
	}
}

type JScrollPane = javax.swing.JScrollPane;
type ScrollPaneConstants = javax.swing.ScrollPaneConstants;
