import { SgComponent } from "./sg-component.model";
import { SgSelectComponentConfig } from "./sg-select-component-config.model";

export interface SgSelect extends SgComponent {

    selectComponentConfig: SgSelectComponentConfig;
    value: any;
   
}
