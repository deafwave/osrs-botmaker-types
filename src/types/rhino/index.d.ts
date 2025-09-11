type JavaAdapterType = <T>(
	Function,
	implementation: Partial<Record<keyof T, (typeof T)[keyof T]>>,
	...args: any[]
) => T & U;
declare const JavaAdapter: JavaAdapterType;
