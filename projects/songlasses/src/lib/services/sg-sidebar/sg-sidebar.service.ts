import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { InjectUtils } from '../../utils/inject-utils';

@Injectable({
    providedIn: 'root'
})
export class SgSidebarService {

    private sidebar: SgSidebar = {
        show: false,
        integrated: true,
        integratedShow: true,
        integratedHamburgerButtonShow: true
    };

    private subject = new Subject<SgSidebar>();

    constructor() {
        InjectUtils.throwErrorIfExists(SgSidebarService);
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

    refresh(): void {
        this.sendSidebar();
    }
    
    show(): void {
        this.sidebar.show = true;
        this.sendSidebar();
    }

    hide(): void {
        this.sidebar.show = false;
        this.sendSidebar();
    }

    integratedShow(): void {
        this.sidebar.integratedShow = true;
        this.sendSidebar();
    }

    integratedHide(): void {
        this.sidebar.integratedShow = false;
        this.sendSidebar();
    }

    private sendSidebar(): void {
        this.subject.next(this.sidebar);
    }

}
