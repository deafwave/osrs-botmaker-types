declare namespace javax.swing.text {
	export interface StyledDocument extends javax.swing.text.Document {
		setCharacterAttributes(offset: number, length: number, s: javax.swing.text.AttributeSet | null, replace: boolean): void;
		setParagraphAttributes(offset: number, length: number, s: javax.swing.text.AttributeSet | null, replace: boolean): void;
		getStyle(nm: string): any;
		addStyle(nm: string, parent: any): any;
		removeStyle(nm: string): void;
		getLogicalStyle(p: number): any;
		setLogicalStyle(p: number, s: any): void;
	}
}

type StyledDocument = javax.swing.text.StyledDocument;
