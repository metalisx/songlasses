import { SgComponentConfigModel } from "./sg-component-config.model";

export interface SgSelectComponentConfigModel extends SgComponentConfigModel {

    required?: boolean;
    itemMatchStrategy?: 'startsWith' | 'contains',
    itemValueField?: string;
    itemDescriptionField?: string;
    items?: any[];

}
