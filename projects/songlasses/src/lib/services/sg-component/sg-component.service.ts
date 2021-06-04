import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model";
import { Observable } from "rxjs";

/**
 * Interface for a component service.
 * 
 * A component service is used to access and manipulate a component without exposing the component.
 * A component should register the component service with the ComponentServicesService.
 */
export interface SgComponentService<T extends SgComponentModel<SgComponentConfigModel>>  {

    getComponentModelObservable(): Observable<T>;
    getComponentModel(): T;
    setComponentModel(componentModel: T): void;
    getName(): string | undefined;
    toggle(): void;

}
