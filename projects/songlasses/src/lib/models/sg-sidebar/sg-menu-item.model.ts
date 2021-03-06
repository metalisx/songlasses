/**
 * Restrictions:
 * - label is required if a href, routerlink or action is set
 * - only one of href, routerlink or action should be set
 * - hrefTarget can only be set if the href is set
 */
export class SgMenuItem {

    label?: string;
    icon?: string;
    routerLink?: any;
    href?: string;
    hrefTarget?: string;
    action?: (event?: any, item?: SgMenuItem) => void; // Function with an optional event parameter which can be anything
    items?: SgMenuItem[];
    divider?: boolean;
    disabled?: boolean;

}
