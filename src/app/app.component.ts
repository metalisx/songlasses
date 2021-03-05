import { Component } from '@angular/core';
import { SgSidebarService } from 'songlasses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sgSidebarService: SgSidebarService) {
  }

  ngOnInit() {
    this.sgSidebarService.setMenuItems([
      {
        label: 'Only label',
        divider: true
      },
      {
        label: 'Menu item with href',
        href: 'https://www.google.nl',
      },
      {
        label: 'Menu item with href and hrefTarget',
        href: 'https://www.google.nl',
        hrefTarget: '_blank',
        divider: true
      },
      {
        label: 'Menu item with routerlink',
        routerLink: ['/']
      },
      {
        label: 'Menu item with action',
        action: function(event, menuItem) {
          if (menuItem) {
            if (document.body.style.backgroundColor === 'green') {
              document.body.style.backgroundColor = "";
            } else {
              document.body.style.backgroundColor = "green";
            }
          }
        }
      },
      {
        label: 'Disabled menu item',
        disabled: true,
      }
    ]);
  }

}
