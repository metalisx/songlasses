import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { SgApp } from '../../models/sg-app/sg-app.model';
import { SgAppService } from '../../services/sg-app/sg-app.service';

@Component({
  selector: 'sg-app',
  templateUrl: './sg-app.component.html',
  styleUrls: ['./sg-app.component.scss']
})
export class SgAppComponent implements OnInit {
  
  @ContentChild('header')
  headerTemplate!: TemplateRef<any>;

  @ContentChild('content')
  contentTemplate!: TemplateRef<any>;

  @ContentChild('footer')
  footerTemplate!: TemplateRef<any>;

  @ContentChild('sidebar')
  sidebarTemplate!: TemplateRef<any>;

  @Input()
  app!: SgApp;

  constructor(private appService: SgAppService) { }

  ngOnInit(): void {
    this.appService.getSidebarObservable().subscribe(app => {
      this.app = app;
    });
  }

  ngAfterViewInit(): void {
    if (!this.app) {
      // If an app object is not provided as component argument then use the default from the SgAppService
      this.app = this.appService.getSidebar();
    } else {
      // If an app object is provided as component argument then set the app object in the SgAppService
      this.appService.setSidebar(this.app);
    }
  }

  hideSidebar() {
    this.appService.hideSidebar();
  }

  toggleSidebar() {
    if (this.app.showSidebar) {
      this.appService.hideSidebar();
    } else {
      this.appService.showSidebar();
    }
  }

  toggleIntegratedSidebar() {
    if (this.app.showIntegratedSidebar) {
      this.appService.hideIntegratedSidebar();
    } else {
      this.appService.showIntegratedSidebar();
    }
  }

}
