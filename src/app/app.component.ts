import { Component } from '@angular/core';
import { SgMenuItem } from 'projects/songlasses/src/lib/models/sg-sidebar/sg-menu-item.model';
import { SgSidebarService } from 'songlasses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
      label: 'Routerlink',
      routerLink: ['/']
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

  constructor(private sgSidebarService: SgSidebarService) {
  }

  ngOnInit() {
    this.sgSidebarService.setMenuItems([{
      label: 'Home',
      routerLink: ['/']
    },
    {
      divider: true
    },
    {
      label: 'Sidebar',
      menuItems: this.sidebarMenuItems
    }]);
  }

}
