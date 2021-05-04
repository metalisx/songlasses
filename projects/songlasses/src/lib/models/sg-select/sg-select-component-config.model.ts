export interface SgSelectComponentConfig {

    name: string;
    required: boolean;
    itemDescriptionMatchStrategy?: 'startsWith' | 'contains',
    itemsValueField: string;
    itemsDescriptionField: string;
    items: any[];

    className?: string;

}
