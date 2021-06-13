import { SgComponentConfigModel } from "./sg-component-config.model";
import { SgComponentServiceEventModel } from "./sg-event.model";

export interface SgComponentConfigModelEventModel<T extends SgComponentConfigModel | null> extends SgComponentServiceEventModel {

    componentConfigModel: T | null;
    
}
