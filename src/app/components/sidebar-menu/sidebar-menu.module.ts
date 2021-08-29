import { NgModule } from '@angular/core';
import { SidebarMenuRoutingModule } from './sidebar-menu.routing.module';
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
    imports: [
        SidebarMenuRoutingModule
    ],
    declarations: [
        SidebarMenuComponent
    ]
})
export class SidebarModule { }
