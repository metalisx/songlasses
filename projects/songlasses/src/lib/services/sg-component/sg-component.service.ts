import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { Observable, Subject } from "rxjs";
import { SgComponentServiceEventModel } from "../../models/sg-component/sg-component-service-event.model";

/**
 * Class for a component service.
 * 
 * A component service is used to access and manipulate a component without exposing the component.
 * A component should register the component service with the ComponentServicesService.
 */
export abstract class SgComponentService<T extends SgComponentModel<SgComponentConfigModel>>  {
   
    private componentModel!: T;

    private subject = new Subject<any>(); // Should be T but typescript does not allow it.

    constructor() {}

    getName(): string | undefined {
        if (this.componentModel && this.componentModel.componentConfig) {
            return this.componentModel.componentConfig.name;
        }
        return undefined;
    }

    getComponentModelObservable(): Observable<SgComponentServiceEventModel<T>> {
        return this.subject;
    }

    getComponentModel(): T {
        return this.componentModel;
    }

    setComponentModel(componentModel: T): void {
        this.componentModel = componentModel
        this.sendSelect();
    }

    refresh(): void {
        this.sendSelect();
    }
    
    toggle(): void {
        if (this.componentModel && this.componentModel.componentConfig) {
            this.componentModel.componentConfig.show = !this.componentModel.componentConfig.show;
            this.sendSelect();
        }
    }

    show(): void {
        if (this.componentModel && this.componentModel.componentConfig) {
            this.componentModel.componentConfig.show = true;
            this.sendSelect();
        }
    }

    hide(): void {
        if (this.componentModel && this.componentModel.componentConfig) {
            this.componentModel.componentConfig.show = false;
            this.sendSelect();
        }
    }

    protected sendSelect(event: string = "service"): void {
        let componentServiceEventModel: SgComponentServiceEventModel<T> = {
            event: event,
            componentModel: this.componentModel
        }
        this.subject.next(componentServiceEventModel);
    }

}
