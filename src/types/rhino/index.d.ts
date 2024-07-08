type JavaAdapterType = <T>(
	Function,
	implementation: Partial<Record<keyof T, (typeof T)[keyof T]>>,
) => T & U;
declare const JavaAdapter: JavaAdapterType;
