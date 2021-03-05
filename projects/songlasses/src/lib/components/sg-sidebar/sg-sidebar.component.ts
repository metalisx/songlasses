import { Component, Input, OnInit } from '@angular/core';
import { Sidebar } from '../../models/sg-sidebar/sidebar.model';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

@Component({
  selector: 'sg-sidebar',
  templateUrl: './sg-sidebar.component.html',
  styleUrls: ['./sg-sidebar.component.scss']
})
export class SgSidebarComponent implements OnInit {

  sidebar!: Sidebar;

  constructor(private sidebarService: SgSidebarService) { 
  }

  ngOnInit(): void {
    this.sidebarService.getSidebarObservable().subscribe(sidebar => {
      this.sidebar = sidebar;
    });
    this.sidebarService.refresh();
  }

  closeSidebar() {
    this.sidebarService.hide();
  }

}
