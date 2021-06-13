import { Observable } from "rxjs";
import { SgComponentValueEvent } from "../../models/sg-component/sg-component-value-event.model";

export interface SgComponentHasValueService<T> {

    hasValue: boolean;

    getValueObservable(): Observable<SgComponentValueEvent<T | null>>;
    setValue(value: T | null): void;
    getValue(): T | null;
    clearValue(): void;

}
