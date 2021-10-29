import { SgComponentConfig } from "./sg-component-config.model";

export interface SgSelectComponentConfig extends SgComponentConfig {

    name?: string;
    show?: boolean;
    required?: boolean;
    itemMatchStrategy?: 'startsWith' | 'contains',
    itemValueField?: string;
    itemDescriptionField?: string;
    items?: any[];
    listPageNumber?: number;
    listItemCount?: number;
    className?: string;
   
}
