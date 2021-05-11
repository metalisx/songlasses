import { Subject } from "rxjs";
import { SgSelectComponentConfig } from "./sg-select-component-config.model";

export interface SgSelect {

    value: any;
    selectComponentConfig: SgSelectComponentConfig;
    subject?: Subject<SgSelect>;
}
