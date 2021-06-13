import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { Observable, Subject } from "rxjs";
import { SgComponentConfigModelEventModel } from "../../models/sg-component/sg-component-config-model-event.model";

/**
 * Class for a component service.
 * 
 * The component service is used to access and manipulate a component without exposing the component.
 * The component should register the component service with the ComponentServicesService.
 */
export abstract class SgComponentService<T extends SgComponentConfigModel>  {
   
    private componentConfigModel: T | null = null;

    private componentConfigModelSubject = new Subject<SgComponentConfigModelEventModel<T | null>>(); // Should be SgComponentConfigModelEventModel<T> but typescript does not allow it.

    constructor() {}

    getName(): string | null {
        if (this.componentConfigModel !== undefined && this.componentConfigModel !== null &&
            this.componentConfigModel.name !== undefined && this.componentConfigModel.name !== null) {
            return this.componentConfigModel.name;
        }
        return null;
    }

    getComponentConfigModelObservable(): Observable<SgComponentConfigModelEventModel<T | null>> {
        return this.componentConfigModelSubject;
    }

    getComponentConfigModel(): T | null {
        return this.componentConfigModel;
    }

    setComponentConfigModel(componentConfigModel: T | null): void {
        this.componentConfigModel = componentConfigModel
        this.sendComponentConfigModel();
    }

    refresh(): void {
        this.sendComponentConfigModel();
    }
    
    toggle(): void {
        if (this.componentConfigModel) {
            this.componentConfigModel.show = !this.componentConfigModel.show;
            this.sendComponentConfigModel();
        }
    }

    show(): void {
        if (this.componentConfigModel) {
            this.componentConfigModel.show = true;
            this.sendComponentConfigModel();
        }
    }

    hide(): void {
        if (this.componentConfigModel) {
            this.componentConfigModel.show = false;
            this.sendComponentConfigModel();
        }
    }

    protected sendComponentConfigModel(event: string = "service"): void {
        let componentServiceEventModel: SgComponentConfigModelEventModel<T> = {
            event: event,
            componentConfigModel: this.componentConfigModel
        }
        this.componentConfigModelSubject.next(componentServiceEventModel);
    }

}
