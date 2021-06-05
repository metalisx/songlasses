import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { Observable, Subject } from "rxjs";

/**
 * Class for a component service.
 * 
 * A component service is used to access and manipulate a component without exposing the component.
 * A component should register the component service with the ComponentServicesService.
 */
export abstract class SgComponentService<T extends SgComponentModel<SgComponentConfigModel>>  {
   
    private component!: T;

    private subject = new Subject<any>(); // Should be T but typescript does not allow it.

    constructor() {}

    getName(): string | undefined {
        if (this.component && this.component.componentConfig) {
            return this.component.componentConfig.name;
        }
        return undefined;
    }

    getComponentModelObservable(): Observable<T> {
        return this.subject;
    }

    getComponentModel(): T {
        return this.component;
    }

    setComponentModel(component: T): void {
        this.component = component
        this.sendSelect();
    }

    refresh(): void {
        this.sendSelect();
    }
    
    toggle(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = !this.component.componentConfig.show;
            this.sendSelect();
        }
    }

    show(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = true;
            this.sendSelect();
        }
    }

    hide(): void {
        if (this.component && this.component.componentConfig) {
            this.component.componentConfig.show = false;
            this.sendSelect();
        }
    }

    protected sendSelect(): void {
        this.subject.next(this.component);
    }

}
