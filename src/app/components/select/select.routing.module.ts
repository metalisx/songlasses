import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SelectComponent } from './select.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: SelectComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SelectRoutingModule { }
