import { Component, OnInit } from '@angular/core';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

@Component({
  selector: 'sg-sidebar-hamburger',
  templateUrl: './sg-sidebar-hamburger.component.html',
  styleUrls: ['./sg-sidebar-hamburger.component.scss']
})
export class SgSidebarHamburgerComponent implements OnInit {

  sidebar!: SgSidebar;

  constructor(private sidebarService: SgSidebarService) { 
  }

  ngOnInit(): void {
    this.sidebarService.getSidebarObservable().subscribe(sidebar => {
      this.sidebar = sidebar;
    });
    this.sidebarService.refresh();
  }

  toggleSidebar() {
    if (this.sidebar.show) {
      this.sidebarService.hide();
    } else {
      this.sidebarService.show();
    }
  }

}
