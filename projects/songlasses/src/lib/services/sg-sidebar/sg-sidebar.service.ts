import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuItem } from '../../models/sg-sidebar/menu-item..model';
import { Sidebar } from '../../models/sg-sidebar/sidebar.model';

@Injectable({
    providedIn: 'root'
})
export class SgSidebarService {

    private sidebar: Sidebar = {
        show: false,
        integrated: true,
        integratedShow: true,
        integratedHamburgerButtonShow: true,
        menuItems: []
    };

    private subject = new Subject<Sidebar>();

    constructor() {
    }

    getSidebarObservable(): Observable<Sidebar> {
        return this.subject.asObservable();
    }

    getSidebar(): Sidebar {
        return this.sidebar;
    }

    setSidebar(sidebar: Sidebar): void {
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

    setMenuItems(menuItems: MenuItem[]): void {
        this.sidebar.menuItems = menuItems;
        this.sendSidebar();
    }

    private sendSidebar(): void {
        this.subject.next(this.sidebar);
    }

}
