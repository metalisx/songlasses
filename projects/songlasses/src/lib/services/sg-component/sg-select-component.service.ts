import { Injectable } from '@angular/core';
import { SgSelectComponentConfig } from '../../models/sg-component/sg-select-component-config.model';
import { SgComponentValueService } from './sg-component-value.service';

@Injectable()
export class SgSelectComponentService extends SgComponentValueService<SgSelectComponentConfig, string> {

    private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
    private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';
  
    private componentConfigDefault: SgSelectComponentConfig = {
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

    getDefaults(): SgSelectComponentConfig {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgSelectComponentConfig): void {
        this.componentConfigDefault = componentConfigDefault;
    }

}
