import { Component } from '@angular/core';
import { SgMenuItem } from 'songlasses';
import { SgSidebarService } from 'songlasses';

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
      label: 'Sidebar',
      routerLink: ['sidebar']
    }
  ];

  constructor(private sgSidebarService: SgSidebarService) {
  }

  ngOnInit() {
    this.sgSidebarService.setMenuItems(this.menuItems);
  }

}
