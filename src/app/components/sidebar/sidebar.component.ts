import { Component, OnInit } from '@angular/core';
import { SgMenuItem } from 'songlasses';
import { SgSidebarService } from 'songlasses';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

  constructor(private sgSidebarService: SgSidebarService) { 
  }

  ngOnInit(): void {
  }

  pushSidebar(): void {
    this.sgSidebarService.pushMenuItems(this.sidebarMenuItems);
  }
  
  popSidebar(): void {
    this.sgSidebarService.popMenuItems();
  }

}
