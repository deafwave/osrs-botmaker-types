declare namespace javax.swing {
	export class JMenuBar extends javax.swing.JComponent {
		constructor();
		add(menu: JMenu): void;
		remove(menu: JMenu): void;
		getMenu(index: number): JMenu;
		getMenuCount(): number;
	}
}

type JMenuBar = javax.swing.JMenuBar;
