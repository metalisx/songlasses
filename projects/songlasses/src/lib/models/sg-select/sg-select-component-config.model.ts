export interface SgSelectComponentConfig {

    name: string;
    required: boolean;
    itemMatchStrategy?: 'startsWith' | 'contains',
    itemValueField: string;
    itemDescriptionField: string;
    items: any[];

    className?: string;

}
