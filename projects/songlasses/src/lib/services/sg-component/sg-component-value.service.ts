import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { SgComponentService } from "./sg-component.service";
import { Observable, Subject } from "rxjs";
import { SgComponentValueModelEventModel } from "../../models/sg-component/sg-component-value-model-event.model";
import { SgComponentHasValueService } from "./sg-component-has-value.service";

/**
 * Class for a component service with a value.
 */
export abstract class SgComponentValueService<T extends SgComponentConfigModel, V extends any | null> extends SgComponentService<T>
    implements SgComponentHasValueService<V> {
    
    private value: V | null= null;

    private valueSubject = new Subject<any>(); // Should be SgComponentValueModelEventModel<V> but typescript does not allow it.

    hasValue: boolean = false;

    constructor() {
        super();
    }

    getValueObservable(): Observable<SgComponentValueModelEventModel<V>> {
        return this.valueSubject;
    }

    getValue(): V | null {
        return this.value;
    }

    /**
     * When calling set in the component then the event parameter should be set to 'component'
     * because the component should have handled the setting of the value and can with this event set
     * filter it own triggered event.
     * @param value
     * @param broadcast 
     */
    setValue(value: V | null, event: string = 'service'): void {
        this.value = value;
        this.setHasValue(this.value);
        this.sendComponentValueModel(event);
    }

    /**
     * When calling clear in the component then the event parameter should be set to 'component'
     * because the component should have handled the clearing of the value and can with this event set
     * filter it own triggered event.
     * @param value
     * @param broadcast 
     */
     clearValue(event: string = 'service'): void {
        this.value = null;
        this.setHasValue(this.value);
        this.sendComponentValueModel(event);
    }

    private setHasValue(value: V | null | undefined): void {
        this.hasValue = value !== undefined && value !== null && value !== "";
    }

    protected sendComponentValueModel(event: string = "service"): void {
        let componentServiceEventModel: SgComponentValueModelEventModel<V | null> = {
            event: event,
            value: this.value
        }
        this.valueSubject.next(componentServiceEventModel);
    }

}
