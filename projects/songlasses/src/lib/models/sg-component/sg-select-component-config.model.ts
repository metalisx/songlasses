import { SgComponentConfig } from "./sg-component-config.model";

export interface SgSelectComponentConfig extends SgComponentConfig {

    required?: boolean;
    itemMatchStrategy?: 'startsWith' | 'contains',
    itemValueField?: string;
    itemDescriptionField?: string;
    items?: any[];

}
