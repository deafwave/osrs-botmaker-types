declare namespace javax.swing {
	export class JList {
		constructor(items: string[]);
		getSelectedValue(): string;
		getSelectedValuesList(): string[];
		setSelectionMode(mode: number): void;
		getSelectionMode(): number;
		setPreferredSize(size: java.awt.Dimension): void;
		setMinimumSize(dimension: java.awt.Dimension): void;
		setMaximumSize(dimension: java.awt.Dimension): void;
		addListSelectionListener(listener: (event: any) => void): void; //TODO: Create ListSelectionEvent
		removeListSelectionListener(listener: (event: any) => void): void; //TODO: Create ListSelectionEvent
		setCellRenderer(renderer: (value: any, index: number, isSelected: boolean, cellHasFocus: boolean) => any): void;
		getCellRenderer(): any;
		setModel(model: any): void;
		getModel(): any;
		setEnabled(enabled: boolean): void;
		isEnabled(): boolean;
	}
}

type JList = javax.swing.JList;
