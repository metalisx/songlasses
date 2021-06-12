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
   
    private componentConfigModel!: T;

    private componentConfigModelSubject = new Subject<any>(); // Should be SgComponentConfigModelEventModel<T> but typescript does not allow it.

    constructor() {}

    getName(): string | undefined {
        if (this.componentConfigModel) {
            return this.componentConfigModel.name;
        }
        return undefined;
    }

    getComponentConfigModelObservable(): Observable<SgComponentConfigModelEventModel<T>> {
        return this.componentConfigModelSubject;
    }

    getComponentConfigModel(): T {
        return this.componentConfigModel;
    }

    setComponentConfigModel(componentConfigModel: T): void {
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
