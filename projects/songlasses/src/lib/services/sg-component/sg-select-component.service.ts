import { Injectable } from '@angular/core';
import { SgSelectComponentConfigModel } from '../../models/sg-component/sg-select-component-config.model';
import { SgComponentValueService } from './sg-component-value.service';

@Injectable()
export class SgSelectComponentService extends SgComponentValueService<SgSelectComponentConfigModel, string> {

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

    getDefaults(): SgSelectComponentConfigModel {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgSelectComponentConfigModel): void {
        this.componentConfigDefault = componentConfigDefault;
    }

}
