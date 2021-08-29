import { Observable, Subscription } from 'rxjs';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebarMenu } from '../../models/sg-sidebar/sg-sidebar-menu.model';
import { SgSidebarMenuService } from './sg-sidebar-menu.service';

describe('SgSidebarMenuervice', () => {

    let service: SgSidebarMenuService;
 
    beforeEach(() => { 
        service = new SgSidebarMenuService(); 
    });
  
    it('#getSidebarMenuObservable should return observable', () => {
        expect(service.getSidebarMenuObservable()).toBeInstanceOf(Observable);
    });
      
    it('#getSidebarMenu should return sidebarMenu', () => {
        expect(service.getSidebarMenu()).toEqual({
            menuItemsStack: [[]]
        });
    });

    it('#setSidebarMenu should set sidebarMenu and return sidebarMenu from observable', (done: DoneFn) => {
        let sidebarMenu: SgSidebarMenu = {
            menuItemsStack: [[]]
        };
        service.getSidebarMenuObservable().subscribe(value => {
            expect(value).toEqual(sidebarMenu);
            done();
        });
        service.setSidebarMenu(sidebarMenu);
        expect(service.getSidebarMenu()).toEqual(sidebarMenu);
    });

    it('#refreshSidebarMenu should return sidebarMenu from observable', (done: DoneFn) => {
        let sidebarMenu: SgSidebarMenu = service.getSidebarMenu();
        service.getSidebarMenuObservable().subscribe(value => {
            expect(value).toEqual(sidebarMenu);
            done();
        });
        service.refresh();
    });

    it('#pushMenuItems should push menuItems as first item to sidebarMenu.menuItemsStack and return sidebarMenu from observable', (done: DoneFn) => {
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack[1]).toEqual(menuItems);
            done();
        });
        service.pushMenuItems(menuItems);
    });

    it('#pushMenuItems should push menuItems2 as second item to sidebarMenu.menuItemsStack and return sidebarMenu from observable', (done: DoneFn) => {
        let menuItems1: SgMenuItem[] = [{
            label: 'some label1'
        }];
        service.setMenuItems(menuItems1);
        let menuItems2: SgMenuItem[] = [{
            label: 'some label2'
        }];
        service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack[1]).toEqual(menuItems2);
            done();
        });
        service.pushMenuItems(menuItems2);
    });
    
    it('#popMenuItems should pop the first menuItems from sidebarMenu.menuItemsStack and return sidebarMenu from observable', (done: DoneFn) => {
        let subscription: Subscription;
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        subscription = service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.setMenuItems(menuItems);
        subscription.unsubscribe();
        subscription = service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(0);
            done();
        });
        service.popMenuItems();
    });

    it('#popMenuItems should pop the second item from sidebarMenu.menuItemsStack and return sidebarMenu from observable', (done: DoneFn) => {
        let subscription: Subscription;
        let menuItems1: SgMenuItem[] = [{
            label: 'some label1'
        }];
        subscription = service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.setMenuItems(menuItems1);
        subscription.unsubscribe();
        let menuItems2: SgMenuItem[] = [{
            label: 'some label2'
        }];
        subscription = service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(2);
            done();
        });
        service.pushMenuItems(menuItems2);
        subscription.unsubscribe();
        subscription = service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.popMenuItems();
    });

    it('#setMenuItems should set menuItems as the first item in sidebarMenu.menuItemsStack and return sidebarMenu from observable', (done: DoneFn) => {
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        service.getSidebarMenuObservable().subscribe(value => {
            expect(value.menuItemsStack[0]).toEqual(menuItems);
            done();
        });
        service.setMenuItems(menuItems);
    });

});
