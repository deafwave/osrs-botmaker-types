declare namespace javax.swing {
	export class JMenu extends javax.swing.JMenuItem {
		constructor(label: string);
		add(item: JMenuItem): void;
		remove(item: JMenuItem): void;
		getItem(index: number): JMenuItem;
		getItemCount(): number;
		addSeparator(): void;
		setMnemonic(key: number): void;
	}
}

type JMenu = javax.swing.JMenu;
