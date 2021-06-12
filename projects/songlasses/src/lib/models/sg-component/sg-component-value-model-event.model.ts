import { SgComponentValueModel } from "./sg-component-value.model";

export interface SgComponentValueModelEventModel<V extends any | null> {

    event: string;
    value: V
    
}
