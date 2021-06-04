import { Injectable } from '@angular/core';
import { SgGroupComponentService } from './sg-group-component.service';
import { SgComponentService } from './sg-component.service';
import { InjectUtils } from '../../utils/inject-utils';
import { SgGroupComponentModel } from '../../models/sg-component/sg-group-component.model';
import { CopyUtils } from '../../utils/copy-utils';
import { SgComponentConfigModel } from '../../models/sg-component/sg-component-config.model';
import { SgComponentModel } from '../../models/sg-component/sg-component.model';

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
export class SgRootComponentService extends SgGroupComponentService {

    private componentModel: SgGroupComponentModel = {
        name: "root",
        componentConfig: {
            name: "root",
            show: true,
            className: "root"
        }
    }

    constructor() {
        super();
        InjectUtils.throwErrorIfExists(SgRootComponentService);
        CopyUtils.merge(this.componentModel, this.getDefaults());
        this.setComponentModel(this.componentModel);        
    }

    register(componentService: SgComponentService<SgComponentModel<SgComponentConfigModel>>, groupComponentService?: SgGroupComponentService | null) {
        // TODO Maybe make the name unique or add an id which should be unique
        // if (component && component.name && this.getComponent(component.name)) {
        //     console.error("Component with name " + component.name + " already added to the components list. Name should be unique.");
        // } else {
        //     this.components.push(component);
        //     this.sendComponents();
        // }
        if (groupComponentService !== undefined && groupComponentService !== null) {
            groupComponentService.register(componentService);
            // TODO When we use a name the following can be used.
            // let groupComponentService = this.componentServices
            //     .filter((componentService: SgComponentService) => componentService instanceof SgGroupComponentService)
            //     .find((componentService: SgComponentService) => componentService.getName() === groupComponentService.getName())
            //     ;
            // groupComponentService.push(componentService);
        } else {
            super.register(componentService);
        }
    }

    unregister(componentService: SgComponentService<SgComponentModel<SgComponentConfigModel>>, groupComponentService?: SgGroupComponentService | null) {
        if (groupComponentService !== undefined && groupComponentService !== null) {
            groupComponentService.unregister(componentService);
        } else {
            super.unregister(componentService);
        }
    }

}
