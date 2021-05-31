import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { RootComponentServiceComponent } from './root-component-service.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: RootComponentServiceComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RootComponentServiceRoutingModule { }
