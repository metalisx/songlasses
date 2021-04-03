import { NgModule } from '@angular/core';
import { SidebarRoutingModule } from './sidebar.routing.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [
        SidebarRoutingModule
    ],
    declarations: [
        SidebarComponent
    ]
})
export class SidebarModule { }
