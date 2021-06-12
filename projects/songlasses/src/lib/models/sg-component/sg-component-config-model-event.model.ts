import { SgComponentConfigModel } from "./sg-component-config.model";

export interface SgComponentConfigModelEventModel<T extends SgComponentConfigModel> {

    event: string;
    componentConfigModel: T;
    
}
