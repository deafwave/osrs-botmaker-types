declare namespace javax.swing.text {
	export interface AttributeSet {
		getAttributeCount(): number;
		isDefined(attrName: string): boolean;
		isEqual(attr: AttributeSet): boolean;
		copyAttributes(): AttributeSet;
		getAttribute(key: string): any;
		getAttributeNames(): any;
		containsAttribute(name: string, value: any): boolean;
		containsAttributes(attributes: AttributeSet): boolean;
		getResolveParent(): AttributeSet | null;
	}
}

type AttributeSet = javax.swing.text.AttributeSet;
