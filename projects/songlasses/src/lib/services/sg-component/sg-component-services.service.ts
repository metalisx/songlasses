import { Injectable } from '@angular/core';
import { SgComponentService } from './sg-component.service';

/**
 * A singleton instance where components can register there component service.
 * 
 * This makes it possible to retrieve a component service from anywhere in the application
 * to manipulate the component.
 */
@Injectable({
    providedIn: 'root'
})
export class SgComponentServicesService {

    private componentServices: SgComponentService[] = [];

    constructor() {
    }

    register(componentService: SgComponentService) {
        // if (component && component.name && this.getComponent(component.name)) {
        //     console.error("Component with name " + component.name + " already added to the components list. Name should be unique.");
        // } else {
        //     this.components.push(component);
        //     this.sendComponents();
        // }
        this.componentServices.push(componentService);
    }

    getComponentService(name: string): SgComponentService | undefined {
        return this.componentServices.find(componentService => componentService.getName() === name);
    }

    getComponentServices(): SgComponentService[] {
        return this.componentServices;
    }

}
