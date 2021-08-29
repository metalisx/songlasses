import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebarMenu } from '../../models/sg-sidebar/sg-sidebar-menu.model';
import { InjectUtils } from '../../utils/inject-utils';

@Injectable({
    providedIn: 'root'
})
export class SgSidebarMenuService {

    private sidebarMenu: SgSidebarMenu = {
        menuItemsStack: [[]]
    };

    private subject = new Subject<SgSidebarMenu>();

    constructor() {
        InjectUtils.throwErrorIfExists(SgSidebarMenuService);
    }

    getSidebarMenuObservable(): Observable<SgSidebarMenu> {
        return this.subject.asObservable();
    }

    getSidebarMenu(): SgSidebarMenu {
        return this.sidebarMenu;
    }

    setSidebarMenu(sidebarMenu: SgSidebarMenu): void {
        this.sidebarMenu = sidebarMenu;
        this.subject.next(this.sidebarMenu);
    }

    refresh(): void {
        this.sendSidebarMenu();
    }

    pushMenuItems(menuItems: SgMenuItem[]): void {
        this.sidebarMenu.menuItemsStack.push(menuItems);
        this.sendSidebarMenu();
    }

    popMenuItems(): void {
        this.sidebarMenu.menuItemsStack.pop();
        this.sendSidebarMenu();
    }

    setMenuItems(menuItems: SgMenuItem[]): void {
        this.sidebarMenu.menuItemsStack[this.sidebarMenu.menuItemsStack.length-1] = menuItems;
        this.sendSidebarMenu();
    }

    private sendSidebarMenu(): void {
        this.subject.next(this.sidebarMenu);
    }

}
