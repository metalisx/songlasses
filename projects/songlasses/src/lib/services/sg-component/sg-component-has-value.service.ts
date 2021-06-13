import { Observable } from "rxjs";
import { SgComponentValueModelEventModel } from "../../models/sg-component/sg-component-value-model-event.model";

export interface SgComponentHasValueService<T extends any | null> {

    hasValue: boolean;

    getValueObservable(): Observable<SgComponentValueModelEventModel<T | null>>;
    setValue(value: T | null): void;
    getValue(): T | null;
    clearValue(): void;

}
