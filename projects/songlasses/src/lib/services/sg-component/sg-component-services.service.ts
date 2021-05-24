import { Injectable } from '@angular/core';
import { SgGroupComponentService } from './sg-group-component.service';
import { SgComponentService } from './sg-component.service';
import { ObjectUtils } from '../../utils/object-utils';
import { ArrayUtils } from '../../utils/array-utils';

/**
 * A singleton instance where components can register there component service.
 * 
 * This makes it possible to retrieve a component service from anywhere in the application
 * to manipulate the component.
 * 
 * If the component group is used the component services created in the component group
 * are registered in a component service group. This way a group of component services
 * can be retrieved.
 */
@Injectable({
    providedIn: 'root'
})
export class SgComponentServicesService {

    private componentServices: SgComponentService[] = [];

    private logColor: string = "green";
    private logPaddingLeft: number = 10;

    constructor() {
    }

    register(componentService: SgComponentService, groupComponentService?: SgGroupComponentService | null) {
        // TODO Maybe make the name unique or add an id which should be unique
        // if (component && component.name && this.getComponent(component.name)) {
        //     console.error("Component with name " + component.name + " already added to the components list. Name should be unique.");
        // } else {
        //     this.components.push(component);
        //     this.sendComponents();
        // }
        if (groupComponentService !== undefined && groupComponentService !== null) {
            groupComponentService.getComponentServices().push(componentService);
            // TODO When we use a name the following can be used.
            // let groupComponentService = this.componentServices
            //     .filter((componentService: SgComponentService) => componentService instanceof SgGroupComponentService)
            //     .find((componentService: SgComponentService) => componentService.getName() === groupComponentService.getName())
            //     ;
            // groupComponentService.push(componentService);
        } else {
            this.componentServices.push(componentService);
        }
    }

    unregister(componentService: SgComponentService, groupComponentService?: SgGroupComponentService | null) {
        const predicate = (cs: SgComponentService) => cs.getName() === componentService.getName();
        if (groupComponentService !== undefined && groupComponentService !== null) {
            ArrayUtils.remove(groupComponentService.getComponentServices(), predicate);
        } else {
            ArrayUtils.remove(this.componentServices, predicate);
        }
    }

    getComponentService(name: string, componentServices: SgComponentService[] = this.componentServices): SgComponentService | undefined {
        let returnComponentService: SgComponentService | undefined;
        componentServices.every(componentService => {
            if (componentService.getName() === name) {
                returnComponentService = componentService;
            }
            if (returnComponentService === undefined && componentService instanceof SgGroupComponentService) {
                returnComponentService = this.getComponentService(name, (componentService as SgGroupComponentService).getComponentServices());
            }
            if (returnComponentService !== undefined) {
                return false;
            }
            return true;
        });
        return returnComponentService;
    }

    getComponentServices(): SgComponentService[] {
        return this.componentServices;
    }

    toggle(): void {
        this.componentServices.forEach(componentService => componentService.toggle());
    }

    /**
     * Convenience method to log the component services structure to the console.
     * 
     * @param componentServices
     * @param level 
     */
    log(componentServices: SgComponentService[] = this.componentServices, level: number = 1): void {
        if (level === 1) {
            console.log(`%cComponentServices structure`, `color: ${this.logColor};`);
        }
        componentServices.forEach(componentService => {
            console.log(`%cLevel %c${level}: %o`, 
                `padding-left: ${this.logPaddingLeft * (level - 1)}px;color: ${this.logColor};`, 
                `color: ${this.logColor};`,
                 componentService);
            if (componentService instanceof SgGroupComponentService) {
                this.log((componentService as SgGroupComponentService).getComponentServices(), ++level);
                level--;
            }
        });
    }

}
