declare namespace javax.swing {
	export class JTabbedPane {
		constructor();
		addTab(title: string, component: any): void;
		removeTabAt(index: number): void;
		setSelectedIndex(index: number): void;
		getSelectedIndex(): number;
		getTabCount(): number;
		getTitleAt(index: number): string;
		setTitleAt(index: number, title: string): void;
		addChangeListener(listener: (event: any) => void): void; //TODO: Create Change Listener Event
		removeChangeListener(listener: (event: any) => void): void; //TODO: Create Change Listener Event
	}
}

type JTabbedPane = javax.swing.JTabbedPane;
