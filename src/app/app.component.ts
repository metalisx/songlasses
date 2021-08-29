import { Component } from '@angular/core';
import { SgMenuItem } from 'songlasses';
import { SgSidebarMenuService } from 'songlasses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private menuItems: SgMenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/']
    },
    {
      divider: true
    },
    {
      subHeader: 'Components'
    },
    {
      label: 'Select',
      routerLink: ['select']
    },
    {
      label: 'Sidebar menu',
      routerLink: ['sidebar-menu']
    },
    {
      divider: true
    },
    {
      subHeader: 'Services'
    },
    {
      label: 'SgRootComponentService',
      routerLink: ['services/root-component-service']
    },
    {
      subHeader: 'Github'
    },
    {
      label: 'songlasses',
      href: 'https://github.com/metalisx/songlasses',
      hrefTarget: '_blank'
    }    
  ];

  constructor(private sgSidebarMenuService: SgSidebarMenuService) {
  }

  ngOnInit() {
    this.sgSidebarMenuService.setMenuItems(this.menuItems);
  }

}
