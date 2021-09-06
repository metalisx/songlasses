import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
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

  sidebar!: SgSidebar;

  constructor(private appService: SgAppService) { }

  ngOnInit(): void {
    this.appService.getSidebarObservable().subscribe(sidebar => {
      this.sidebar = sidebar;
    });
    this.appService.refreshSidebar();
  }

  hideSidebar() {
    this.appService.hideSidebar();
  }

  toggleSidebar() {
    if (this.sidebar.show) {
      this.appService.hideSidebar();
    } else {
      this.appService.showSidebar();
    }
  }

  toggleIntegratedSidebar() {
    if (this.sidebar.showIntegratedSidebar) {
      this.appService.hideIntegratedSidebar();
    } else {
      this.appService.showIntegratedSidebar();
    }
  }

}
