/// <reference path="./AttributeSet.d.ts" />

declare namespace javax.swing.text {
	export interface Document {
		getText(offset: number, length: number): string;
		insertString(offset: number, str: string, a: javax.swing.text.AttributeSet | null): void;
		remove(offset: number, length: number): void;
		getLength(): number;
		addDocumentListener(listener: any): void;
		removeDocumentListener(listener: any): void;
		getProperty(key: string): any;
		putProperty(key: string, value: any): void;
	}
}

type Document = javax.swing.text.Document;
