import { Component, OnInit } from '@angular/core';
import { SgMenuItem } from '../../models/sg-sidebar/sg-menu-item.model';
import { SgSidebarMenu } from '../../models/sg-sidebar/sg-sidebar-menu.model';
import { SgSidebarMenuService } from '../../services/sg-sidebar-menu/sg-sidebar-menu.service';
import { SgAppService } from '../../services/sg-app/sg-app.service';

@Component({
  selector: 'sg-sidebar-menu',
  templateUrl: './sg-sidebar-menu.component.html',
  styleUrls: ['./sg-sidebar-menu.component.scss']
})
export class SgSidebarMenuComponent implements OnInit {

  sidebarMenu!: SgSidebarMenu;

  contextMenuItems: {parentMenuItem:SgMenuItem|null, menuItems:SgMenuItem[]}[] = [];

  constructor(private appService: SgAppService, private sidebarMenuService: SgSidebarMenuService) {
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
    this.appService.hideSidebar();
  }

  openSubmenu(event: any, menuItem: SgMenuItem): void {
    this.contextMenuItems[this.contextMenuItems.length] = {parentMenuItem: menuItem, menuItems: menuItem.menuItems ? menuItem.menuItems : []};
  }

  closeSubmenu(event: any): void {
    this.contextMenuItems.pop();
  }

}
