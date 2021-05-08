import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgSelect } from '../../models/sg-select/sg-select.model';

@Injectable({
    providedIn: 'root'
})
export class SgSelectService {

    private selects: SgSelect[] = [];

    constructor() {
    }

    private findSelect(name: String): SgSelect | undefined {
        return this.selects.find(select => select.selectComponentConfig.name === name) ;
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

    private sendSelect(name: String): void {
        this.findSelect(name)?.subject.next();
    }

}
