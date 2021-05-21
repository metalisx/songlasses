/**
 * Interface for a component service.
 * 
 * A component service is used to access and manipulate a component without exposing the component.
 * A component should register the component service with the ComponentServicesService.
 */
export interface SgComponentService  {

    getName(): string | undefined;

}
