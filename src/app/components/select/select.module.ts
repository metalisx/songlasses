import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectRoutingModule } from './select.routing.module';
import { SelectComponent } from './select.component';
import { SgSelectModule } from 'songlasses';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SelectRoutingModule,
        SgSelectModule
    ],
    declarations: [
        SelectComponent
    ]
})
export class SelectModule { }
