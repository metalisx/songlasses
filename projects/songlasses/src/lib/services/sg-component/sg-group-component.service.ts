import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SgGroupComponentConfig } from "../../models/sg-component/sg-group-component-config.model";
import { SgGroupComponent } from "../../models/sg-component/sg-group-component.model";
import { ArrayUtils } from "../../utils/array-utils";
import { ComponentServiceUtils } from "../../utils/component-service-utils";
import { SgComponentService } from "./sg-component.service";

/**
 * Interface for a component service group containing a group of component services.
 * 
 * This makes it possible to retrieve a group of component services from anywhere in the application
 * to manipulate only the components in the group.
 */
@Injectable()
export class SgGroupComponentService implements SgComponentService {

    private groupComponentConfigDefault: SgGroupComponentConfig = {
        name: 'root',
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
        ArrayUtils.remove(this.componentServices, ComponentServiceUtils.getNamePredicate(componentService));
    }

    getComponentService(name: string): SgComponentService | undefined {
        return ComponentServiceUtils.getComponentService(name, this.componentServices);
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

    private sendGroupComponent(): void {
        this.subject.next(this.groupComponent);
    }

}
