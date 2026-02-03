declare namespace javax.swing {
	export class JTextPane extends javax.swing.JComponent {
		constructor();
		constructor(document?: javax.swing.text.StyledDocument);
		setText(text: string): void;
		getText(): string;
		setEditable(editable: boolean): void;
		isEditable(): boolean;
		getStyledDocument(): javax.swing.text.StyledDocument;
		setDocument(document: javax.swing.text.Document): void;
		getDocument(): javax.swing.text.Document;
		setFont(font: java.awt.Font): void;
		getFont(): java.awt.Font;
		setBackground(color: java.awt.Color): void;
		getBackground(): java.awt.Color;
		setForeground(color: java.awt.Color): void;
		getForeground(): java.awt.Color;
		setCaretPosition(position: number): void;
		getCaretPosition(): number;
		select(selectionStart: number, selectionEnd: number): void;
		selectAll(): void;
		replaceSelection(content: string): void;
		setMinimumSize(dimension: java.awt.Dimension): void;
		setMaximumSize(dimension: java.awt.Dimension): void;
		setPreferredSize(size: java.awt.Dimension): void;
		addFocusListener(listener: java.awt.event.FocusListener): void;
		addKeyListener(listener: java.awt.event.KeyListener): void;
		removeKeyListener(listener: java.awt.event.KeyListener): void;
	}
}

type JTextPane = javax.swing.JTextPane;
