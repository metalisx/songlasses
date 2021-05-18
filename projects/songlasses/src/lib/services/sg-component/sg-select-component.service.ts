import { Observable, Subject } from 'rxjs';
import { SgSelectComponentConfig } from '../../models/sg-component/sg-select-component-config.model';
import { SgSelect } from '../../models/sg-component/sg-select.model';
import { SgComponentService } from './sg-component.service';

export class SgSelectComponentService implements SgComponentService {

    private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
    private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';
  
    private selectComponentConfigDefault: SgSelectComponentConfig = {
        name: 'name',
        show: true,
        required: true,
        itemMatchStrategy: 'startsWith',
        itemValueField: SgSelectComponentService.DEFAULT_ITEMS_VALUE_FIELD,
        itemDescriptionField: SgSelectComponentService.DEFAULT_ITEMS_DESCRIPTION_FIELD,
        items: [],
        className: ''
    };

    private select!: SgSelect;

    private subject = new Subject<SgSelect>();

    constructor() {
    }
 
    getName(): string | undefined {
        if (this.select && this.select.selectComponentConfig) {
            return this.select.selectComponentConfig.name;
        }
        return undefined;
    }

    getSelectObservable(): Observable<SgSelect> {
        return this.subject;
    }

    getDefaults(): SgSelectComponentConfig {
        return this.selectComponentConfigDefault;
    }
    
    setDefaults(selectComponentConfigDefault: SgSelectComponentConfig): void {
        this.selectComponentConfigDefault = selectComponentConfigDefault;
    }

    getSelect(): SgSelect {
        return this.select;
    }

    setSelect(select: SgSelect): void {
        this.select = select;
        this.sendSelect();
    }

    refresh(): void {
        this.sendSelect();
    }
    
    show(): void {
        if (this.select && this.select.selectComponentConfig) {
            this.select.selectComponentConfig.show = true;
            this.sendSelect();
        }
    }

    hide(): void {
        if (this.select && this.select.selectComponentConfig) {
            this.select.selectComponentConfig.show = false;
            this.sendSelect();
        }
    }

    private sendSelect(): void {
        this.subject.next(this.select);
    }

}
