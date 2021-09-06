import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { InjectUtils } from '../../utils/inject-utils';

@Injectable({
    providedIn: 'root'
})
export class SgAppService {

    private sidebar: SgSidebar = {
        show: false,
        integrated: true,
        showIntegratedSidebar: true
    };

    private subject = new Subject<SgSidebar>();

    constructor() {
        InjectUtils.throwErrorIfExists(SgAppService);
    }

    getSidebarObservable(): Observable<SgSidebar> {
        return this.subject.asObservable();
    }

    getSidebar(): SgSidebar {
        return this.sidebar;
    }

    setSidebar(sidebar: SgSidebar): void {
        this.sidebar = sidebar;
        this.subject.next(this.sidebar);
    }

    refreshSidebar(): void {
        this.sendSidebar();
    }
    
    showSidebar(): void {
        this.sidebar.show = true;
        this.sendSidebar();
    }

    hideSidebar(): void {
        this.sidebar.show = false;
        this.sendSidebar();
    }

    showIntegratedSidebar(): void {
        this.sidebar.showIntegratedSidebar = true;
        this.sendSidebar();
    }

    hideIntegratedSidebar(): void {
        this.sidebar.showIntegratedSidebar = false;
        this.sendSidebar();
    }

    private sendSidebar(): void {
        this.subject.next(this.sidebar);
    }

}
