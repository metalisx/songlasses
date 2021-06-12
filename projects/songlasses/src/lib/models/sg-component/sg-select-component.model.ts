import { SgComponentHasValueModel } from "./sg-component-has-value.model";
import { SgComponentModel } from "./sg-component.model";
import { SgSelectComponentConfigModel } from "./sg-select-component-config.model";

// delete
export interface xSgSelectComponentModel extends SgComponentModel<SgSelectComponentConfigModel>, SgComponentHasValueModel<string | null> {

}
