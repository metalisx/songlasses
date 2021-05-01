export interface SgSelectComponentConfig {

    name: string;
    itemMatching?: 'startsWith' | 'contains',
    itemsValueField: string;
    itemsDescriptionField: string;
    items: any[];

    className?: string;

}
