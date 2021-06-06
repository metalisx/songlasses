export interface SgComponentHasValueService<T> {

    hasValue: boolean;

    clear(): void;
    set(value: T | null): void;
    get(): T | null;

}
