import { NgModule } from '@angular/core';
import { SelectRoutingModule } from './select.routing.module';
import { SelectComponent } from './select.component';
import { SgSelectModule } from 'songlasses';

@NgModule({
    imports: [
        SelectRoutingModule,
        SgSelectModule
    ],
    declarations: [
        SelectComponent
    ]
})
export class SelectModule { }
