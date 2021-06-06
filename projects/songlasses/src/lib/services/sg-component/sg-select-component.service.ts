import { Injectable } from '@angular/core';
import { SgSelectComponentConfigModel } from '../../models/sg-component/sg-select-component-config.model';
import { SgSelectComponentModel} from '../../models/sg-component/sg-select-component.model';
import { SgComponentService } from './sg-component.service';
import { SgComponentHasValueService } from './sg-component-has-value.service';
import { Observable } from 'rxjs';

@Injectable()
export class SgSelectComponentService extends SgComponentService<SgSelectComponentModel> implements SgComponentHasValueService<string> {

    private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
    private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';
  
    private componentConfigDefault: SgSelectComponentConfigModel = {
        name: 'select',
        show: true,
        required: true,
        itemMatchStrategy: 'startsWith',
        itemValueField: SgSelectComponentService.DEFAULT_ITEMS_VALUE_FIELD,
        itemDescriptionField: SgSelectComponentService.DEFAULT_ITEMS_DESCRIPTION_FIELD,
        items: [],
        className: ''
    };

    constructor() {
        super();
    }

    hasValue: boolean = false;

    getDefaults(): SgSelectComponentConfigModel {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgSelectComponentConfigModel): void {
        this.componentConfigDefault = componentConfigDefault;
    }

    /**
     * When calling clear in the component then the event parameter should be set to 'component'
     * because the component should have handled the clearing of the value and can with this event set
     * filter it own triggered event.
     * @param value
     * @param broadcast 
     */
     clear(event: string = 'service'): void {
        this.getComponentModel().value = "";
        this.setHasValue(this.getComponentModel().value);
        this.sendSelect(event);
    }

    /**
     * When calling set in the component then the event parameter should be set to 'component'
     * because the component should have handled the setting of the value and can with this event set
     * filter it own triggered event.
     * @param value
     * @param broadcast 
     */
    set(value: string | null, event: string = 'service'): void {
        this.getComponentModel().value = value;
        this.setHasValue(this.getComponentModel().value);
        this.sendSelect(event);
    }

    get(): string | null {
        return this.getComponentModel().value;
    }

    private setHasValue(value: string | null | undefined): void {
        this.hasValue = value !== undefined && value !== null && value !== "";
    }

}
