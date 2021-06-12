import { SgComponentServiceEventModel } from "./sg-event.model";

export interface SgComponentValueModelEventModel<V extends any | null> extends SgComponentServiceEventModel {

    value: V
    
}
