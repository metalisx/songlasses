export interface SgSelectComponentConfig {

    name: string;
    required: boolean;
    itemMatching?: 'startsWith' | 'contains',
    itemsValueField: string;
    itemsDescriptionField: string;
    items: any[];

    className?: string;

}
