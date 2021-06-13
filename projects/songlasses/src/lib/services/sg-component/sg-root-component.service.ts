import { Injectable } from '@angular/core';
import { SgComponentServiceWithChildren } from "./sg-component-service-with-children.service";
import { SgRootComponentConfig } from '../../models/sg-component/sg-root-component-config.model';
import { InjectUtils } from '../../utils/inject-utils';

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
export class SgRootComponentService extends SgComponentServiceWithChildren<SgRootComponentConfig> {

    private componentConfigDefault: SgRootComponentConfig = {
        name: "root",
        show: true,
        className: "root"
    }

    constructor() {
        super();
        InjectUtils.throwErrorIfExists(SgRootComponentService);
        this.setComponentConfig(this.componentConfigDefault);
    }

}
