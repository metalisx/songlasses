import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

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

  constructor(private sidebarService: SgSidebarService) { }

  ngOnInit(): void {
    this.sidebarService.getSidebarObservable().subscribe(sidebar => {
      this.sidebar = sidebar;
    });
    this.sidebarService.refresh();
  }

  hideSidebar() {
    this.sidebarService.hide();
  }

  toggleSidebar() {
    if (this.sidebar.show) {
      this.sidebarService.hide();
    } else {
      this.sidebarService.show();
    }
  }

  toggleIntegratedSidebar() {
    if (this.sidebar.showIntegratedSidebar) {
      this.sidebarService.hideIntegratedSidebar();
    } else {
      this.sidebarService.showIntegratedSidebar();
    }
  }

}
