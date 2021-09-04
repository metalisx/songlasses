import { Observable } from 'rxjs';
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
            integrated: true
        });
    });

    it('#setSidebar should set sidebar and return sidebar from observable', (done: DoneFn) => {
        let sidebar: SgSidebar = {
            show: false,
            integrated: false
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
            integrated: false
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
            integrated: false
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

});
