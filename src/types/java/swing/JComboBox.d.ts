declare namespace javax.swing {
	export class JComboBox {
		constructor(items: string[]);
		setSelectedItem(item: string): void;
		getSelectedItem(): string;
		setSelectedIndex(index: number): void;
		getSelectedIndex(): number;
		setEnabled(enabled: boolean): void;
		isEnabled(): boolean;
		addActionListener(listener: (event: java.awt.event.ActionListener) => void): void;
		removeActionListener(listener: (event: java.awt.event.ActionListener) => void): void;
		addFocusListener(listener: (event: java.awt.event.FocusListener) => void): void;
		removeFocusListener(listener: (event: java.awt.event.FocusListener) => void): void;
		addItem(item: string): void;
		removeItem(item: string): void;
		removeAllItems(): void;
		getItemCount(): number;
		getItemAt(index: number): string;
		setPreferredSize(size: java.awt.Dimension): void;
		setMinimumSize(dimension: java.awt.Dimension): void;
		setMaximumSize(dimension: java.awt.Dimension): void;
	}
}

type JComboBox = javax.swing.JComboBox;
