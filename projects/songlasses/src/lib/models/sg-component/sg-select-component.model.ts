import { SgComponentModel } from "./sg-component.model";
import { SgSelectComponentConfigModel } from "./sg-select-component-config.model";

export interface SgSelectComponentModel extends SgComponentModel<SgSelectComponentConfigModel> {

    value: any;

}
