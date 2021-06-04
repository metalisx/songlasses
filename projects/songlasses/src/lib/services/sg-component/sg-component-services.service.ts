import { SgComponentConfigModel } from "../../models/sg-component/sg-component-config.model"
import { SgComponentModel } from "../../models/sg-component/sg-component.model";
import { SgComponentService } from "./sg-component.service";
/**
 * Interface for a component service list.
 */
export interface SgComponentServicesService<T extends SgComponentModel<SgComponentConfigModel>>
    extends SgComponentService<T> {

}
