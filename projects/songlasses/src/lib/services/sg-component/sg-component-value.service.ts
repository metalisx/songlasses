import { SgComponentConfig } from "../../models/sg-component/sg-component-config.model";
import { SgComponentService } from "./sg-component.service";
import { Observable, Subject } from "rxjs";
import { SgComponentValueEvent } from "../../models/sg-component/sg-component-value-event.model";
import { SgComponentHasValueService } from "./sg-component-has-value.service";

/**
 * Class for a component service with a value.
 */
export class SgComponentValueService<T extends SgComponentConfig, V> extends SgComponentService<T>
    implements SgComponentHasValueService<V> {
    
    private value: V | null = null;

    private valueSubject = new Subject<SgComponentValueEvent<V | null>>();

    hasValue: boolean = false;

    constructor() {
        super();
    }

    getValueObservable(): Observable<SgComponentValueEvent<V | null>> {
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
        this.sendComponentValue(event);
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
        this.sendComponentValue(event);
    }

    protected setHasValue(value: V | null | undefined): void {
        this.hasValue = value !== undefined && value !== null;
    }

    protected sendComponentValue(event: string = "service"): void {
        let componentServiceEvent: SgComponentValueEvent<V | null> = {
            event: event,
            value: this.value
        }
        this.valueSubject.next(componentServiceEvent);
    }

}
