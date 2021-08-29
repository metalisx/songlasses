import { Component, OnInit } from '@angular/core';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebarMenu } from '../../models/sg-sidebar/sg-sidebar-menu.model';
import { SgSidebarMenuService } from '../../services/sg-sidebar-menu/sg-sidebar-menu.service';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

@Component({
  selector: 'sg-sidebar-menu',
  templateUrl: './sg-sidebar-menu.component.html',
  styleUrls: ['./sg-sidebar-menu.component.scss']
})
export class SgSidebarMenuComponent implements OnInit {

  sidebarMenu!: SgSidebarMenu;

  contextMenuItems: {parentMenuItem:SgMenuItem|null, menuItems:SgMenuItem[]}[] = [];

  constructor(private sidebarService: SgSidebarService, private sidebarMenuService: SgSidebarMenuService) {
  }

  ngOnInit(): void {
    this.sidebarMenuService.getSidebarMenuObservable().subscribe(sidebarMenu => {
      this.sidebarMenu = sidebarMenu;
      if (sidebarMenu.menuItemsStack && sidebarMenu.menuItemsStack.length > 0) {
        this.contextMenuItems = [];
        this.contextMenuItems[0] = {
          parentMenuItem: null,
          menuItems: sidebarMenu.menuItemsStack[sidebarMenu.menuItemsStack.length - 1]
        };
      }
    });
    this.sidebarMenuService.refresh();
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
