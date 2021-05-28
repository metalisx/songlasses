import { SgComponentService } from "../services/sg-component/sg-component.service";
import { SgGroupComponentService } from "../services/sg-component/sg-group-component.service";

export class ComponentServiceUtils {

    static getNamePredicate(componentService: SgComponentService): (value: SgComponentService, index: number, obj: SgComponentService[]) => unknown {
        return (cs: SgComponentService) => cs.getName() === componentService.getName();        
    }

    static getComponentService(name: string, componentServices: SgComponentService[]): SgComponentService | undefined {
        let returnComponentService: SgComponentService | undefined;
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

}
