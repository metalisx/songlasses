import { Observable } from 'rxjs';
import { MenuItem } from '../../models/sg-sidebar/menu-item..model';
import { Sidebar } from '../../models/sg-sidebar/sidebar.model';
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
            menuItems: []
        });
    });

    it('#setSidebar should set sidebar and return sidebar from observable', (done: DoneFn) => {
        let sidebar: Sidebar = {
            show: false,
            integrated: false,
            integratedShow: true,
            integratedHamburgerButtonShow: true,
            menuItems: []
        };
        service.getSidebarObservable().subscribe(value => {
            expect(value).toEqual(sidebar);
            done();
        });
        service.setSidebar(sidebar);
        expect(service.getSidebar()).toEqual(sidebar);
    });

    it('#refreshSidebar should return sidebar from observable', (done: DoneFn) => {
        let sidebar: Sidebar = service.getSidebar();
        service.getSidebarObservable().subscribe(value => {
            expect(value).toEqual(sidebar);
            done();
        });
        service.refresh();
    });

    it('#show should set sidebar.show to true and return sidebar from observable', (done: DoneFn) => {
        let sidebar: Sidebar = {
            show: false,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItems: []
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
        let sidebar: Sidebar = {
            show: true,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItems: []
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
        let sidebar: Sidebar = {
            show: false,
            integrated: false,
            integratedShow: false,
            integratedHamburgerButtonShow: false,
            menuItems: []
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
        let sidebar: Sidebar = {
            show: false,
            integrated: false,
            integratedShow: true,
            integratedHamburgerButtonShow: false,
            menuItems: []
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

    it('#setMenuItems should set sidebar.menuItems and return sidebar from observable', (done: DoneFn) => {
        let menuItems: MenuItem[] = [{
            label: 'some label'
        }];
        service.getSidebarObservable().subscribe(value => {
            expect(value.menuItems).toEqual(menuItems);
            done();
        });
        service.setMenuItems(menuItems);
    });

});
