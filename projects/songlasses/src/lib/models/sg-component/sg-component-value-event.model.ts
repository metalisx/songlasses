import { SgComponentServiceEvent } from "./sg-event.model";

export interface SgComponentValueEvent<V extends any | null> extends SgComponentServiceEvent {

    value: V
    
}
