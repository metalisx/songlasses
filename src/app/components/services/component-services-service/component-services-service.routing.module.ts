import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ComponentServicesServiceComponent } from './component-services-service.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComponentServicesServiceComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ComponentServicesServiceRoutingModule { }
