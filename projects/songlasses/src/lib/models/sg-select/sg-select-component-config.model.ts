export interface SgSelectComponentConfig {

    name: string;
    required: boolean;
    itemDescriptionMatchStrategy?: 'startsWith' | 'contains',
    itemValueField: string;
    itemDescriptionField: string;
    items: any[];

    className?: string;

}
