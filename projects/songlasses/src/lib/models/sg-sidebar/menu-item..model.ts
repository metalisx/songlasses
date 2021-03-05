/**
 * Restrictions:
 * - label is required if a href, routerlink or action is set
 * - only one of href, routerlink or action should be set
 * - hrefTarget can only be set if the href is set
 */
export class MenuItem {

    label?: string;
    icon?: string;
    routerLink?: any;
    href?: string;
    hrefTarget?: string;
    action?: (event?: any, item?: MenuItem) => void; // Function with an optional event parameter which can be anything
    items?: MenuItem[];
    divider?: boolean;
    disabled?: boolean;

}
