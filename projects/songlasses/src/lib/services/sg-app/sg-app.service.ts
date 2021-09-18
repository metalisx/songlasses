import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SgApp } from '../../models/sg-app/sg-app.model';
import { InjectUtils } from '../../utils/inject-utils';

@Injectable({
    providedIn: 'root'
})
export class SgAppService {

    private app: SgApp = {
        sidebarType: 'integrated-sidebar',
        showSidebar: false,
        showIntegratedSidebar: true
    };

    private subject = new Subject<SgApp>();

    constructor() {
        InjectUtils.throwErrorIfExists(SgAppService);
    }

    getSidebarObservable(): Observable<SgApp> {
        return this.subject.asObservable();
    }

    getSidebar(): SgApp {
        return this.app;
    }

    setSidebar(app: SgApp): void {
        this.app = app;
    }

    refreshSidebar(): void {
        this.sendSidebar();
    }
    
    showSidebar(): void {
        this.app.showSidebar = true;
        this.sendSidebar();
    }

    hideSidebar(): void {
        this.app.showSidebar = false;
        this.sendSidebar();
    }

    showIntegratedSidebar(): void {
        this.app.showIntegratedSidebar = true;
        this.sendSidebar();
    }

    hideIntegratedSidebar(): void {
        this.app.showIntegratedSidebar = false;
        this.sendSidebar();
    }

    private sendSidebar(): void {
        this.subject.next(this.app);
    }

}
