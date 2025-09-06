declare namespace java {
	namespace lang {
		export class Object {
			constructor();
			equals(obj: any): boolean;
			hashCode(): number;
			toString(): string;
			getClass(): java.lang.Class;
			notify(): void;
			notifyAll(): void;
			wait(timeout?: number, nanos?: number): void;
		}

		export class Class extends Object {
			asSubclass<U>(clazz: Class<U>): Class<U>;
			cast<T>(obj: any): T;
			desiredAssertionStatus(): boolean;
			static forName(className: string): Class<any>;
			static forName(name: string, initialize: boolean, loader: any): Class<any>;
			getAnnotatedInterfaces(): any[];
			getAnnotatedSuperclass(): any;
			getAnnotation<A extends any>(annotationClass: Class<A>): A | null;
			getAnnotations(): any[];
			getAnnotationsByType<A extends any>(annotationClass: Class<A>): A[];
			getCanonicalName(): string;
			getClasses(): Class<any>[];
			getClassLoader(): any;
			getComponentType(): Class<any>;
			getConstructor<T>(...parameterTypes: Class<any>[]): any;
			getConstructors(): any[];
			getDeclaredAnnotation<A extends any>(annotationClass: Class<A>): A | null;
			getDeclaredAnnotations(): any[];
			getDeclaredAnnotationsByType<A extends any>(annotationClass: Class<A>): A[];
			getDeclaredClasses(): Class<any>[];
			getDeclaredConstructor<T>(...parameterTypes: Class<any>[]): any;
			getDeclaredConstructors(): any[];
			getDeclaredField(name: string): any;
			getDeclaredFields(): any[];
			getDeclaredMethod(name: string, ...parameterTypes: Class<any>[]): any;
			getDeclaredMethods(): any[];
			getDeclaringClass(): Class<any>;
			getEnclosingClass(): Class<any>;
			getEnclosingConstructor(): any;
			getEnclosingMethod(): any;
			getEnumConstants<T>(): T[] | null;
			getField(name: string): any;
			getFields(): any[];
			getGenericInterfaces(): any[];
			getGenericSuperclass(): any;
			getInterfaces(): Class<any>[];
			getMethod(name: string, ...parameterTypes: Class<any>[]): any;
			getMethods(): any[];
			getModifiers(): number;
			getName(): string;
			getPackage(): any;
			getProtectionDomain(): any;
			getResource(name: string): any;
			getResourceAsStream(name: string): any;
			getSigners(): any[];
			getSimpleName(): string;
			getSuperclass<T>(): Class<T>;
			getTypeName(): string;
			getTypeParameters(): any[];
			isAnnotation(): boolean;
			isAnnotationPresent(annotationClass: Class<any>): boolean;
			isAnonymousClass(): boolean;
			isArray(): boolean;
			isAssignableFrom(cls: Class<any>): boolean;
			isEnum(): boolean;
			isInstance(obj: any): boolean;
			isInterface(): boolean;
			isLocalClass(): boolean;
			isMemberClass(): boolean;
			isPrimitive(): boolean;
			isSynthetic(): boolean;
			newInstance<T>(): T;
			toGenericString(): string;
			toString(): string;
		}
	}
}
