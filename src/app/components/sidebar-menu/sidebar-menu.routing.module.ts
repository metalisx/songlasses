import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: SidebarMenuComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SidebarMenuRoutingModule { }
