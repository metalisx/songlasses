import { SgComponentConfigModel } from "./sg-component-config.model";
import { SgComponentModel } from "./sg-component.model";

export interface SgComponentServiceEventModel<T extends SgComponentModel<SgComponentConfigModel>> {

    event: string;
    componentModel: T;
    
}
