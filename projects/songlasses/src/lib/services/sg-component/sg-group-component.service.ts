import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { SgGroupComponentConfigModel } from "../../models/sg-component/sg-group-component-config.model";
import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgGroupComponentModel } from "../../models/sg-component/sg-group-component.model";
import { ArrayUtils } from "../../utils/array-utils";
import { SgComponentService } from "./sg-component.service";

/**
 * Interface for a component service group containing a group of component services.
 * 
 * This makes it possible to retrieve a group of component services from anywhere in the application
 * to manipulate only the components in the group.
 */
@Injectable()
export class SgGroupComponentService implements SgComponentService<SgGroupComponentModel> {

    private logColor: string = "green";
    private logPaddingLeft: number = 10;

    private groupComponentConfigDefault: SgGroupComponentConfigModel = {
        name: 'group',
        show: true,
        className: ''
    };
    
    private componentServices: SgComponentService<SgComponentModel<SgComponentConfigModel>>[] = [];

    private component!: SgGroupComponentModel;
    
    private subject = new Subject<SgGroupComponentModel>();

    getName(): string | undefined {
        if (this.component && this.component.componentConfig) {
            return this.component.componentConfig.name;
        }
        return undefined;
    }

    getComponentModelObservable(): Observable<SgGroupComponentModel> {
        return this.subject;
    }

    getDefaults(): SgGroupComponentConfigModel {
        return this.groupComponentConfigDefault;
    }
    
    setDefaults(groupComponentConfigDefault: SgGroupComponentConfigModel): void {
        this.groupComponentConfigDefault = groupComponentConfigDefault;
    }

    register(componentService: SgComponentService<SgComponentModel<SgComponentConfigModel>>): void {
        this.componentServices.push(componentService);
    }

    unregister(componentService: SgComponentService<SgComponentModel<SgComponentConfigModel>>): void {
        ArrayUtils.remove(this.componentServices, this.getNamePredicate(componentService));
    }

    getComponentService(name: string): SgComponentService<SgComponentModel<SgComponentConfigModel>> | undefined {
        return this.getComponentServiceFromComponentServices(name, this.componentServices);
    }

    getComponentServices(): SgComponentService<SgComponentModel<SgComponentConfigModel>>[] {
        return this.componentServices;
    }

    getComponentModel(): SgGroupComponentModel {
        return this.component;
    }

    setComponentModel(component: SgGroupComponentModel): void {
        this.component = component;
        this.sendComponent();
    }

    refresh(): void {
        this.sendComponent();
    }

    toggle(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = !this.component.componentConfig.show;
            this.sendComponent();
        }
    }

    show(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = true;
            this.sendComponent();
        }
    }

    hide(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = false;
            this.sendComponent();
        }
    }

    /**
     * Convenience method to log the component services structure to the console.
     * 
     * @param componentServices
     * @param level 
     */
     log(level: number = 1): void {
        if (level === 1) {
            console.log(`%cComponentServices structure`, `color: ${this.logColor};`);
        }
        console.log(`%cLevel %c${level}: %o`, 
            `padding-left: ${this.logPaddingLeft * (level - 1)}px;color: ${this.logColor};`, 
            `color: ${this.logColor};`,
            this.getComponentModel());
        this.componentServices.forEach((componentService, index) => {
            console.log(`%cComponent Service: %o`, 
                `padding-left: ${this.logPaddingLeft * (level - 1)}px;color: ${this.logColor};`, 
                componentService);
            if (componentService instanceof SgGroupComponentService) {
                (componentService as SgGroupComponentService).log(++level);
                level--;
            }
        });
    }

    private getNamePredicate(componentService: SgComponentService<SgComponentModel<SgComponentConfigModel>>): 
        (value: SgComponentService<SgComponentModel<SgComponentConfigModel>>, index: number, obj: SgComponentService<SgComponentModel<SgComponentConfigModel>>[]) => unknown {
        return (cs: SgComponentService<SgComponentModel<SgComponentConfigModel>>) => cs.getName() === componentService.getName();        
    }

    private getComponentServiceFromComponentServices(name: string, componentServices: SgComponentService<SgComponentModel<SgComponentConfigModel>>[]): 
        SgComponentService<SgComponentModel<SgComponentConfigModel>> | undefined {
        let returnComponentService: SgComponentService<SgComponentModel<SgComponentConfigModel>> | undefined;
        componentServices.every(componentService => {
            if (componentService.getName() === name) {
                returnComponentService = componentService;
            }
            if (returnComponentService === undefined && componentService instanceof SgGroupComponentService) {
                returnComponentService = (componentService as SgGroupComponentService).getComponentService(name);
            }
            if (returnComponentService !== undefined) {
                return false;
            }
            return true;
        });
        return returnComponentService;
    }

    private sendComponent(): void {
        this.subject.next(this.component);
    }

}
