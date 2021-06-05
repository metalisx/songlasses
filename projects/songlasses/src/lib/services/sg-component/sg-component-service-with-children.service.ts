import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model"
import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgComponentService } from "./sg-component.service";
import { ArrayUtils } from "../../utils/array-utils";

/**
 * Interface for a component service with child component services.
 */
export abstract class SgComponentServiceWithChildren<T extends SgComponentModel<SgComponentConfigModel>>
    extends SgComponentService<T> {

    private logColor: string = "green";
    private logPaddingLeft: number = 10;

    private componentServices: SgComponentService<SgComponentModel<SgComponentConfigModel>>[] = [];

    constructor() {
        super();
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
            if (componentService instanceof SgComponentServiceWithChildren) {
                (componentService as SgComponentServiceWithChildren<SgComponentModel<SgComponentConfigModel>>).log(++level);
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
            if (returnComponentService === undefined && componentService instanceof SgComponentServiceWithChildren) {
                returnComponentService = (componentService as SgComponentServiceWithChildren<SgComponentModel<SgComponentConfigModel>>).getComponentService(name);
            }
            if (returnComponentService !== undefined) {
                return false;
            }
            return true;
        });
        return returnComponentService;
    }
        
}
