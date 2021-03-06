import { SgMenuItem } from "./sg-menu-item.model";

export interface SgSidebar {

    // Toggle sidebar when display is in small screens mode, this is when the sidebar is out of the normal flow and is moved in from the left.
    show: boolean;

    // Indicator if in widescreen mode the sidebar is integrated into the dom hyrarchie.
    // If true then it is integrated into the dom, if false then it is a slider sidebar.
    integrated: boolean;

    // Toggle integrated sidebar when display is in wide screens mode, this is when the sidebar is integrated into the dom hyrachie.
    // Only relevant if the property integrated is true.
    integratedShow: boolean;

    // Indicator if the hamburger button should be displayed when the display is in wide screen mode.
    // Only relevant if the property integrated is true.
    integratedHamburgerButtonShow: boolean;

    menuItems: SgMenuItem[];

}
