export interface SgComponentHasValueService<T extends any | null> {

    hasValue: boolean;

    clearValue(): void;
    setValue(value: T | null): void;
    getValue(): T | null;

}
