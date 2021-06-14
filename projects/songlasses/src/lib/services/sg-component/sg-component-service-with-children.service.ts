import { SgComponentConfig } from "../../models/sg-component/sg-component-config.model"
import { SgComponentService } from "./sg-component.service";
import { ArrayUtils } from "../../utils/array-utils";

/**
 * Class for a component service with child component services.
 */
export class SgComponentServiceWithChildren<T extends SgComponentConfig>
    extends SgComponentService<T> {

    private logColor: string = "green";
    private logPaddingLeft: number = 10;

    private componentServices: SgComponentService<SgComponentConfig>[] = [];

    constructor() {
        super();
    }

    register(componentService: SgComponentService<SgComponentConfig>): void {
        this.componentServices.push(componentService);
    }

    unregister(componentService: SgComponentService<SgComponentConfig>): void {
        ArrayUtils.remove(this.componentServices, this.getNamePredicate(componentService));
    }

    getComponentService(name: string): SgComponentService<SgComponentConfig> | undefined {
        return this.getComponentServiceFromComponentServices(name, this.componentServices);
    }

    getComponentServices(): SgComponentService<SgComponentConfig>[] {
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
            this.getComponentConfig());
        this.componentServices.forEach((componentService, index) => {
            console.log(`%cComponent Service: %o`, 
                `padding-left: ${this.logPaddingLeft * (level - 1)}px;color: ${this.logColor};`, 
                componentService);
            if (componentService instanceof SgComponentServiceWithChildren) {
                (componentService as SgComponentServiceWithChildren<SgComponentConfig>).log(++level);
                level--;
            }
        });
    }

    protected getNamePredicate(componentService: SgComponentService<SgComponentConfig>): 
        (value: SgComponentService<SgComponentConfig>, index: number, obj: SgComponentService<SgComponentConfig>[]) => unknown {
        return (cs: SgComponentService<SgComponentConfig>) => cs.getName() === componentService.getName();        
    }

    protected getComponentServiceFromComponentServices(name: string, componentServices: SgComponentService<SgComponentConfig>[]): 
        SgComponentService<SgComponentConfig> | undefined {
        let returnComponentService: SgComponentService<SgComponentConfig> | undefined;
        componentServices.every(componentService => {
            if (componentService.getName() === name) {
                returnComponentService = componentService;
            }
            if (returnComponentService === undefined && componentService instanceof SgComponentServiceWithChildren) {
                returnComponentService = (componentService as SgComponentServiceWithChildren<SgComponentConfig>).getComponentService(name);
            }
            if (returnComponentService !== undefined) {
                return false;
            }
            return true;
        });
        return returnComponentService;
    }
        
}
