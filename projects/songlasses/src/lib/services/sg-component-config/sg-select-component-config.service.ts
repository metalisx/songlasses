import { Injectable } from '@angular/core';
import { SgSelectComponentConfig } from '../../models/sg-component/sg-select-component-config.model';

@Injectable({
    providedIn: 'root'
})
export class SgSelectComponentConfigService {

    private componentConfigDefault: SgSelectComponentConfig = {
        name: 'select',
        show: true,
        required: true,
        itemMatchStrategy: 'startsWith',
        itemValueField: 'value',
        itemDescriptionField: 'description',
        items: [],
        listPageNumber: 1,
        listItemCount: 10,
        className: ''
    };

    getDefaults(): SgSelectComponentConfig {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgSelectComponentConfig): void {
        this.componentConfigDefault = componentConfigDefault;
    }

}
