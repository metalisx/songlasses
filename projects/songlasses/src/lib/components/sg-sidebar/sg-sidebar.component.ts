import { Component, Input, OnInit } from '@angular/core';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

@Component({
  selector: 'sg-sidebar',
  templateUrl: './sg-sidebar.component.html',
  styleUrls: ['./sg-sidebar.component.scss']
})
export class SgSidebarComponent implements OnInit {

  sidebar!: SgSidebar;

  contextMenuItems: {parentMenuItem:SgMenuItem|null, menuItems:SgMenuItem[]}[] = [];

  constructor(private sidebarService: SgSidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.getSidebarObservable().subscribe(sidebar => {
      this.sidebar = sidebar;
      if (sidebar.menuItems) {
        this.contextMenuItems = [];
        this.contextMenuItems[0] = {
          parentMenuItem: null,
          menuItems: sidebar.menuItems
        };
      }
    });
    this.sidebarService.refresh();
  }

  closeSidebar() {
    this.sidebarService.hide();
  }
  
  openSubmenu(event: any, menuItem: SgMenuItem): void {
    this.contextMenuItems[this.contextMenuItems.length] = {parentMenuItem: menuItem, menuItems: menuItem.menuItems ? menuItem.menuItems : []};
  }

  closeSubmenu(event: any): void {
    this.contextMenuItems.pop();
  }

}
