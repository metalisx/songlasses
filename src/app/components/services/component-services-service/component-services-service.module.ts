import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SgSelectModule, SgGroupComponentDirectiveModule } from 'songlasses';
import { ComponentServicesServiceComponent } from './component-services-service.component';
import { ComponentServicesServiceRoutingModule } from './component-services-service.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SgGroupComponentDirectiveModule,
        SgSelectModule,
        ComponentServicesServiceRoutingModule
    ],
    declarations: [
        ComponentServicesServiceComponent
    ]
})
export class ComponentServicesServiceModule { }
