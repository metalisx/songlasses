import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SgGroupComponentConfig } from "../../models/sg-component/sg-group-component-config.model";
import { SgGroupComponent } from "../../models/sg-component/sg-group-component.model";
import { ArrayUtils } from "../../utils/array-utils";
import { SgComponentService } from "./sg-component.service";

/**
 * Interface for a component service group containing a group of component services.
 * 
 * This makes it possible to retrieve a group of component services from anywhere in the application
 * to manipulate only the components in the group.
 */
@Injectable()
export class SgGroupComponentService implements SgComponentService {

    private logColor: string = "green";
    private logPaddingLeft: number = 10;

    private groupComponentConfigDefault: SgGroupComponentConfig = {
        name: 'group',
        show: true,
        className: ''
    };
    
    private componentServices: SgComponentService[] = [];

    private groupComponent!: SgGroupComponent;
    
    private subject = new Subject<SgGroupComponent>();

    getName(): string | undefined {
        if (this.groupComponent && this.groupComponent.groupComponentConfig) {
            return this.groupComponent.groupComponentConfig.name;
        }
        return undefined;
    }

    getGroupComponentObservable(): Observable<SgGroupComponent> {
        return this.subject;
    }

    getDefaults(): SgGroupComponentConfig {
        return this.groupComponentConfigDefault;
    }
    
    setDefaults(groupComponentConfigDefault: SgGroupComponentConfig): void {
        this.groupComponentConfigDefault = groupComponentConfigDefault;
    }

    register(componentService: SgComponentService): void {
        this.componentServices.push(componentService);
    }

    unregister(componentService: SgComponentService): void {
        ArrayUtils.remove(this.componentServices, this.getNamePredicate(componentService));
    }

    getComponentService(name: string): SgComponentService | undefined {
        return this.getComponentServiceFromComponentServices(name, this.componentServices);
    }

    getComponentServices(): SgComponentService[] {
        return this.componentServices;
    }

    getGroupComponent(): SgGroupComponent {
        return this.groupComponent;
    }

    setGroupComponent(groupComponent: SgGroupComponent): void {
        this.groupComponent = groupComponent;
        this.sendGroupComponent();
    }

    refresh(): void {
        this.sendGroupComponent();
    }

    toggle(): void {
        if (this.groupComponent && this.groupComponent.groupComponentConfig) {
            this.groupComponent.groupComponentConfig.show = !this.groupComponent.groupComponentConfig.show;
            this.sendGroupComponent();
        }
    }

    show(): void {
        if (this.groupComponent && this.groupComponent.groupComponentConfig) {
            this.groupComponent.groupComponentConfig.show = true;
            this.sendGroupComponent();
        }
    }

    hide(): void {
        if (this.groupComponent && this.groupComponent.groupComponentConfig) {
            this.groupComponent.groupComponentConfig.show = false;
            this.sendGroupComponent();
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
            this.getGroupComponent());
        this.componentServices.forEach((componentService, index) => {
            console.log(`%cComponent Service: %o`, 
                `padding-left: ${this.logPaddingLeft * (level - 1)}px;color: ${this.logColor};`, 
                componentService);
            if (componentService instanceof SgGroupComponentService) {
                (componentService as SgGroupComponentService).log(++level);
                //this.log((componentService as SgGroupComponentService).getComponentServices(), ++level);
                level--;
            }
        });
    }

    private getNamePredicate(componentService: SgComponentService): (value: SgComponentService, index: number, obj: SgComponentService[]) => unknown {
        return (cs: SgComponentService) => cs.getName() === componentService.getName();        
    }

    private getComponentServiceFromComponentServices(name: string, componentServices: SgComponentService[]): SgComponentService | undefined {
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

    private sendGroupComponent(): void {
        this.subject.next(this.groupComponent);
    }

}
