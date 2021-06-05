import { Injectable } from "@angular/core";
import { SgGroupComponentConfigModel } from "../../models/sg-component/sg-group-component-config.model";
import { SgGroupComponentModel } from "../../models/sg-component/sg-group-component.model";
import { SgComponentServiceWithChildren } from "./sg-component-service-with-children.service";

/**
 * Interface for a component service group containing a group of component services.
 * 
 * This makes it possible to retrieve a group of component services from anywhere in the application
 * to manipulate only the components in the group.
 */
@Injectable()
export class SgGroupComponentService extends SgComponentServiceWithChildren<SgGroupComponentModel> {

    private componentConfigDefault: SgGroupComponentConfigModel = {
        name: 'group',
        show: true,
        className: ''
    };

    constructor() {
        super();
    }
    
    getDefaults(): SgGroupComponentConfigModel {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgGroupComponentConfigModel): void {
        this.componentConfigDefault = componentConfigDefault;
    }

}
