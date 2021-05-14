import { Observable, Subscription } from 'rxjs';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgSidebarService } from './sg-sidebar.service';

describe('SgSidebarervice', () => {

    let service: SgSidebarService;
 
    beforeEach(() => { 
        service = new SgSidebarService(); 
    });
  
    it('#getSidebarObservable should return observable', () => {
        expect(service.getSidebarObservable()).toBeInstanceOf(Observable);
    });
      
    it('#getSidebar should return sidebar', () => {
        expect(service.getSidebar()).toEqual({
            show: false,
            integrated: true,
            integratedShow: true,
            integratedHamburgerButtonShow: true,
            menuItemsStack: [[]]
        });
    });

    it('#setSidebar should set sidebar and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            integratedShow: true,
            integratedHamburgerButtonShow: true,
            menuItemsStack: [[]]
        };
        service.getSidebarObservable().subscribe(value => {
            expect(value).toEqual(sidebar);
            done();
        });
        service.setSidebar(sidebar);
        expect(service.getSidebar()).toEqual(sidebar);
    });

    it('#refreshSidebar should return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = service.getSidebar();
        service.getSidebarObservable().subscribe(value => {
            expect(value).toEqual(sidebar);
            done();
        });
        service.refresh();
    });

    it('#show should set sidebar.show to true and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItemsStack: [[]]
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.show).toBe(false);
            } else if (times == 2) {
                expect(value.show).toBe(true);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.show();
    });

    it('#hide should set sidebar.show to false and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: true,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItemsStack: [[]]
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.show).toBe(true);
            } else if (times == 2) {
                expect(value.show).toBe(false);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.hide();
    });

    it('#integratedShow should set sidebar.integratedShow to true and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItemsStack: [[]]
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.integratedShow).toBe(false);
            } else if (times == 2) {
                expect(value.integratedShow).toBe(true);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.integratedShow();
    });

    it('#integratedHide should set sidebar.integratedShow to false and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            integratedShow: true,
            integratedHamburgerButtonShow: false,
            menuItemsStack: [[]]
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.integratedShow).toBe(true);
            } else if (times == 2) {
                expect(value.integratedShow).toBe(false);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.integratedHide();
    });

    it('#pushMenuItems should push menuItems as first item to sidebar.menuItemsStack and return sidebar from observable', (done: DoneFn) => {
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack[1]).toEqual(menuItems);
            done();
        });
        service.pushMenuItems(menuItems);
    });

    it('#pushMenuItems should push menuItems2 as second item to sidebar.menuItemsStack and return sidebar from observable', (done: DoneFn) => {
        let menuItems1: SgMenuItem[] = [{
            label: 'some label1'
        }];
        service.setMenuItems(menuItems1);
        let menuItems2: SgMenuItem[] = [{
            label: 'some label2'
        }];
        service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack[1]).toEqual(menuItems2);
            done();
        });
        service.pushMenuItems(menuItems2);
    });
    
    it('#popMenuItems should pop the first menuItems from sidebar.menuItemsStack and return sidebar from observable', (done: DoneFn) => {
        let subscription: Subscription;
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        subscription = service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.setMenuItems(menuItems);
        subscription.unsubscribe();
        subscription = service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(0);
            done();
        });
        service.popMenuItems();
    });

    it('#popMenuItems should pop the second item from sidebar.menuItemsStack and return sidebar from observable', (done: DoneFn) => {
        let subscription: Subscription;
        let menuItems1: SgMenuItem[] = [{
            label: 'some label1'
        }];
        subscription = service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.setMenuItems(menuItems1);
        subscription.unsubscribe();
        let menuItems2: SgMenuItem[] = [{
            label: 'some label2'
        }];
        subscription = service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(2);
            done();
        });
        service.pushMenuItems(menuItems2);
        subscription.unsubscribe();
        subscription = service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack.length).toEqual(1);
            done();
        });
        service.popMenuItems();
    });

    it('#setMenuItems should set menuItems as the first item in sidebar.menuItemsStack and return sidebar from observable', (done: DoneFn) => {
        let menuItems: SgMenuItem[] = [{
            label: 'some label'
        }];
        service.getSidebarObservable().subscribe(value => {
            expect(value.menuItemsStack[0]).toEqual(menuItems);
            done();
        });
        service.setMenuItems(menuItems);
    });

});
