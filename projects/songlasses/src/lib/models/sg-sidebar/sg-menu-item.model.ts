/**
 * Restrictions:
 * - label is required if a href, routerlink or action is set
 * - only one of href, routerlink or action should be set
 * - hrefTarget is only used if the href is set
 *
 * It is possible to set the header, label and divider in one menu items.
 */
export class SgMenuItem {

    subHeader?: string;
    label?: string;
    icon?: string;
    routerLink?: any;
    href?: string;
    hrefTarget?: string;
    // Action is a function where the event and an item is passed to.
    // Actin should return true when the menu shoud be closed, otherwise false.
    action?: (event?: any, item?: SgMenuItem) => boolean; 
    menuItems?: SgMenuItem[];
    divider?: boolean;
    disabled?: boolean;

}
