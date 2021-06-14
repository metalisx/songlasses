import { SgComponentConfig } from "../../models/sg-component/sg-component-config.model";
import { Observable, Subject } from "rxjs";
import { SgComponentConfigEvent } from "../../models/sg-component/sg-component-config-event.model";

/**
 * Class for a component service.
 * 
 * The component service is used to access and manipulate a component without exposing the component.
 * The component should register the component service with the ComponentServicesService.
 */
export class SgComponentService<T extends SgComponentConfig>  {
   
    private componentConfig: T | null = null;

    private componentConfigSubject = new Subject<SgComponentConfigEvent<T | null>>();

    constructor() {}

    getName(): string | null {
        if (this.componentConfig !== undefined && this.componentConfig !== null &&
            this.componentConfig.name !== undefined && this.componentConfig.name !== null) {
            return this.componentConfig.name;
        }
        return null;
    }

    getComponentConfigObservable(): Observable<SgComponentConfigEvent<T | null>> {
        return this.componentConfigSubject;
    }

    getComponentConfig(): T | null {
        return this.componentConfig;
    }

    setComponentConfig(componentConfig: T | null): void {
        this.componentConfig = componentConfig
        this.sendComponentConfig();
    }

    refresh(): void {
        this.sendComponentConfig();
    }
    
    toggle(): void {
        if (this.componentConfig) {
            this.componentConfig.show = !this.componentConfig.show;
            this.sendComponentConfig();
        }
    }

    show(): void {
        if (this.componentConfig) {
            this.componentConfig.show = true;
            this.sendComponentConfig();
        }
    }

    hide(): void {
        if (this.componentConfig) {
            this.componentConfig.show = false;
            this.sendComponentConfig();
        }
    }

    protected sendComponentConfig(event: string = "service"): void {
        let componentServiceEvent: SgComponentConfigEvent<T> = {
            event: event,
            componentConfig: this.componentConfig
        }
        this.componentConfigSubject.next(componentServiceEvent);
    }

}
