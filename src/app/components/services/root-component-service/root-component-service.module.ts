import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SgSelectModule, SgGroupComponentDirectiveModule } from 'songlasses';
import { RootComponentServiceComponent } from './root-component-service.component';
import { RootComponentServiceRoutingModule } from './root-component-service.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SgGroupComponentDirectiveModule,
        SgSelectModule,
        RootComponentServiceRoutingModule
    ],
    declarations: [
        RootComponentServiceComponent
    ]
})
export class RootComponentServiceModule { }
