export interface SgSelectComponentConfig {

    name?: string;
    show?: boolean;
    required?: boolean;
    itemMatchStrategy?: 'startsWith' | 'contains',
    itemValueField?: string;
    itemDescriptionField?: string;
    items?: any[];

    className?: string;

}
