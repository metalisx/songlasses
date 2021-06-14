import { Injectable } from "@angular/core";
import { SgGroupComponentConfig } from "../../models/sg-component/sg-group-component-config.model";
import { SgComponentServiceWithChildren } from "./sg-component-service-with-children.service";

/**
 * Class for a component service group containing a group of component services.
 * 
 * This makes it possible to retrieve a group of component services from anywhere in the application
 * to manipulate only the components in the group.
 */
@Injectable()
export class SgGroupComponentService extends SgComponentServiceWithChildren<SgGroupComponentConfig> {

    private componentConfigDefault: SgGroupComponentConfig = {
        name: 'group',
        show: true,
        className: ''
    };

    constructor() {
        super();
    }
    
    getDefaults(): SgGroupComponentConfig {
        return this.componentConfigDefault;
    }
    
    setDefaults(componentConfigDefault: SgGroupComponentConfig): void {
        this.componentConfigDefault = componentConfigDefault;
    }

}
