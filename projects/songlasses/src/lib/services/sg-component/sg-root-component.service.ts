import { Injectable } from '@angular/core';
import { SgGroupComponentService } from './sg-group-component.service';
import { SgComponentService } from './sg-component.service';
import { SgComponentConfigModel } from '../../models/sg-component/sg-component-config.model';
import { SgComponentModel } from '../../models/sg-component/sg-component.model';
import { SgRootComponentModel } from '../../models/sg-component/sg-root-component.model';
import { SgComponentServiceWithChildren } from "./sg-component-service-with-children.service";
import { SgRootComponentConfigModel } from '../../models/sg-component/sg-root-component-config.model';
import { InjectUtils } from '../../utils/inject-utils';
import { Observable } from 'rxjs';

/**
 * The singleton root component service where components register there component service.
 * 
 * This makes it possible to retrieve a component service and maniplute it's component from 
 * anywhere in the application.
 * 
 * If in the register method the component group is provided the component services is added
 * to the list of component services of the component group creating a hierachical tree structure
 * of component services.
 */
@Injectable({
    providedIn: 'root'
})
export class SgRootComponentService extends SgComponentServiceWithChildren<SgRootComponentConfigModel> {

    private componentConfigModelDefault: SgRootComponentConfigModel = {
        name: "root",
        show: true,
        className: "root"
    }

    constructor() {
        super();
        InjectUtils.throwErrorIfExists(SgRootComponentService);
        this.setComponentConfigModel(this.componentConfigModelDefault);
    }

}
