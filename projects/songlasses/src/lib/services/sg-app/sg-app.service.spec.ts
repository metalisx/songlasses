import { Observable } from 'rxjs';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgAppService } from './sg-app.service';

describe('SgAppervice', () => {

    let service: SgAppService;
 
    beforeEach(() => { 
        service = new SgAppService(); 
    });
  
    it('#getSidebarObservable should return observable', () => {
        expect(service.getSidebarObservable()).toBeInstanceOf(Observable);
    });
      
    it('#getSidebar should return sidebar', () => {
        expect(service.getSidebar()).toEqual({
            show: false,
            integrated: true,
            showIntegratedSidebar: true
        });
    });

    it('#setSidebar should set sidebar and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            showIntegratedSidebar: true
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
        service.refreshSidebar();
    });

    it('#showSidebar should set sidebar.show to true and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            showIntegratedSidebar: false
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
        service.showSidebar();
    });

    it('#hideSidebar should set sidebar.show to false and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: true,
            integrated: false,
            showIntegratedSidebar: false
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
        service.hideSidebar();
    });

    it('#showIntegratedSidebar should set sidebar.showIntegratedSidebar to true and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false,
            showIntegratedSidebar: false
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.showIntegratedSidebar).toBe(false);
            } else if (times == 2) {
                expect(value.showIntegratedSidebar).toBe(true);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.showIntegratedSidebar();
    });

    it('#hideIntegratedSidebar should set sidebar.showIntegratedSidebar to false and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: true,
            integrated: false,
            showIntegratedSidebar: false
        };
        let times: number = 1;
        service.getSidebarObservable().subscribe(value => {
            if (times === 1) {
                expect(value.showIntegratedSidebar).toBe(true);
            } else if (times == 2) {
                expect(value.showIntegratedSidebar).toBe(false);
                done();
            }
            times++;
        });
        service.setSidebar(sidebar);
        service.hideIntegratedSidebar();
    });

});
