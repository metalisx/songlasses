import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgSelectComponentConfig } from '../../models/sg-select/sg-select-component-config.model';
import { SgSelect } from '../../models/sg-select/sg-select.model';

@Injectable({
    providedIn: 'root'
})
export class SgSelectService {

    private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
    private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';
  
    private selectComponentConfigDefault: SgSelectComponentConfig = {
        name: 'name',
        show: true,
        required: true,
        itemMatchStrategy: 'startsWith',
        itemValueField: SgSelectService.DEFAULT_ITEMS_VALUE_FIELD,
        itemDescriptionField: SgSelectService.DEFAULT_ITEMS_DESCRIPTION_FIELD,
        items: [],
        className: ''
      };

    private selects: SgSelect[] = [];

    constructor() {
    }

    getDefaults(): SgSelectComponentConfig{
        return this.selectComponentConfigDefault;
    }
    
    setDefaults(selectComponentConfigDefault: SgSelectComponentConfig): void {
        this.selectComponentConfigDefault = selectComponentConfigDefault;
    }

    getSelectObservable(name: String): Observable<SgSelect> | undefined {
        return this.findSelect(name)?.subject;
    }

    getSelect(name: string): SgSelect | undefined {
        return this.selects.find((select) => select.selectComponentConfig.name === name);
    }

    addSelect(select: SgSelect): void {
        if (select.selectComponentConfig && select.selectComponentConfig.name && 
            !this.findSelect(select.selectComponentConfig.name)) {
            console.error("Select with name " + select.selectComponentConfig.name + " already added to the SgSelectService. Name should be unique.");
        } else {
            select.subject = new Subject<SgSelect>();
            this.selects.push(select);
        }
    }

    refresh(name: string): void {
        this.sendSelect(name);
    }
    
    show(name: string): void {
        let select: SgSelect | undefined = this.findSelect(name);
        if (select) {
            select.selectComponentConfig.show = true;
            this.sendSelect(name);
        }
    }

    hide(name: string): void {
        let select: SgSelect | undefined = this.findSelect(name);
        if (select) {
            select.selectComponentConfig.show = false;
            this.sendSelect(name);
        }
    }

    private findSelect(name: String): SgSelect | undefined {
        return this.selects.find(select => select.selectComponentConfig.name === name) ;
    }

    private sendSelect(name: String): void {
        this.findSelect(name)?.subject.next();
    }

}
