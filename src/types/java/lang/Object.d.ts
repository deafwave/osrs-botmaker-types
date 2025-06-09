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
			getName(): string;
		}
	}
}
