import { Component, OnInit } from '@angular/core';
import { SgMenuItem } from 'songlasses';
import { SgSidebarMenuService } from 'songlasses';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  private popSidebarMenuFn = this.popSidebarMenuAction.bind(this);
  private sidebarMenuItems: SgMenuItem[] = [
    {
      label: 'Label only'
    },
    {
      divider: true
    },
    {
      subHeader: 'Navigation'
    },
    {
      label: 'Open google.nl',
      href: 'https://www.google.nl',
    },
    {
      label: 'Open google.nl in a new tab',
      href: 'https://www.google.nl',
      hrefTarget: '_blank'
    },
    {
      label: 'Routerlink to Home',
      routerLink: ['home']
    },
    {
      divider: true
    },
    {
      subHeader: 'Action'
    },
    {
      label: 'Toggle body background color',
      action: function(event, menuItem) {
        if (menuItem) {
          if (document.body.style.backgroundColor === 'green') {
            document.body.style.backgroundColor = "";
          } else {
            document.body.style.backgroundColor = "green";
          }
        }
        return false;
      }
    },
    {
      label: 'Pop sidebar',
      action: this.popSidebarMenuFn
    },
    {
      divider: true
    },
    {
      subHeader: 'Submenu'
    },
    {
      label: 'Menu item 1 (submenu)',
      menuItems: [
        {
          label: 'Menu item 1.1'
        },
        {
          label: 'Menu item 1.2 (submenu)',
          menuItems: [
            {
              label: 'Menu item 1.2.1'
            }            
          ]
        }
      ]
    },
    {
      divider: true
    },
    {
      subHeader: 'Disabled'
    },
    {
      label: 'This menu item is disabled',
      disabled: true,
    }
  ];
  private savedSidebarMenuItems?: SgMenuItem[];

  constructor(private sgSidebarMenuService: SgSidebarMenuService) { 
  }

  ngOnInit(): void {
  }

  pushSidebarMenu(): void {
    if (this.sgSidebarMenuService.getSidebarMenu().menuItemsStack.length === 0 ||
        this.sgSidebarMenuService.getSidebarMenu().menuItemsStack[this.sgSidebarMenuService.getSidebarMenu().menuItemsStack.length - 1] !== this.sidebarMenuItems) {
      this.sgSidebarMenuService.pushMenuItems(this.sidebarMenuItems);
    }
  }
  
  popSidebarMenu(): void {
    if (this.sgSidebarMenuService.getSidebarMenu().menuItemsStack.length !== 0 &&
        this.sgSidebarMenuService.getSidebarMenu().menuItemsStack[this.sgSidebarMenuService.getSidebarMenu().menuItemsStack.length - 1] === this.sidebarMenuItems) {
      this.sgSidebarMenuService.popMenuItems();
    }
  }

  private popSidebarMenuAction(event: any, menuItem: any) {
    this.popSidebarMenu();
    return false;
  }

}
