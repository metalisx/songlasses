import { SgComponentConfig } from "./sg-component-config.model";
import { SgComponentServiceEvent } from "./sg-event.model";

export interface SgComponentConfigEvent<T extends SgComponentConfig | null> extends SgComponentServiceEvent {

    componentConfig: T | null;
    
}
