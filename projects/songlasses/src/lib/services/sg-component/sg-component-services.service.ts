import { Injectable } from '@angular/core';
import { SgComponentService } from './sg-component.service';

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

}
