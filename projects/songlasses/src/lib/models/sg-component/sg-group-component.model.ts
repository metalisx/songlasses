import { SgComponent } from "./sg-component.model";
import { SgGroupComponentConfig } from "./sg-group-component-config.model";

export interface SgGroupComponent extends SgComponent {

    groupComponentConfig: SgGroupComponentConfig;
    value: any;
   
}
