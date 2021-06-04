import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgSelectComponentConfigModel } from '../../models/sg-component/sg-select-component-config.model';
import { SgSelectComponentModel} from '../../models/sg-component/sg-select-component.model';
import { SgComponentService } from './sg-component.service';

@Injectable()
export class SgSelectComponentService implements SgComponentService<SgSelectComponentModel> {

    private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
    private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';
  
    private selectComponentConfigDefault: SgSelectComponentConfigModel = {
        name: 'select',
        show: true,
        required: true,
        itemMatchStrategy: 'startsWith',
        itemValueField: SgSelectComponentService.DEFAULT_ITEMS_VALUE_FIELD,
        itemDescriptionField: SgSelectComponentService.DEFAULT_ITEMS_DESCRIPTION_FIELD,
        items: [],
        className: ''
    };

    private select!: SgSelectComponentModel;

    private subject = new Subject<SgSelectComponentModel>();

    constructor() {
    }
 
    getName(): string | undefined {
        if (this.select && this.select.componentConfig) {
            return this.select.componentConfig.name;
        }
        return undefined;
    }

    getComponentModelObservable(): Observable<SgSelectComponentModel> {
        return this.subject;
    }

    getDefaults(): SgSelectComponentConfigModel {
        return this.selectComponentConfigDefault;
    }
    
    setDefaults(selectComponentConfigDefault: SgSelectComponentConfigModel): void {
        this.selectComponentConfigDefault = selectComponentConfigDefault;
    }

    getComponentModel(): SgSelectComponentModel {
        return this.select;
    }

    setComponentModel(select: SgSelectComponentModel): void {
        this.select = select;
        this.sendSelect();
    }

    refresh(): void {
        this.sendSelect();
    }
    
    toggle(): void {
        if (this.select && this.select.componentConfig) {
            this.select.componentConfig.show = !this.select.componentConfig.show;
            this.sendSelect();
        }
    }

    show(): void {
        if (this.select && this.select.componentConfig) {
            this.select.componentConfig.show = true;
            this.sendSelect();
        }
    }

    hide(): void {
        if (this.select && this.select.componentConfig) {
            this.select.componentConfig.show = false;
            this.sendSelect();
        }
    }

    private sendSelect(): void {
        this.subject.next(this.select);
    }

}
