import { SgComponentConfigModel } from "./sg-component-config.model";

export interface SgComponentModel<T extends SgComponentConfigModel> {

    name: string;

    componentConfig: T;
    
}
