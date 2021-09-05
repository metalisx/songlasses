import { SgMenuItem } from "./sg-menu-item.model";

export interface SgSidebar {

    // Toggle sidebar when display is in small screens mode, this is when the sidebar is out of the normal flow and is moved in from the left.
    show: boolean;

    // Indicator if in widescreen mode the sidebar is integrated into the dom hierarchy.
    // If true then it is integrated into the dom, if false then it is a slider sidebar.
    integrated: boolean;

    // When integrated is true then this is the indicator if the integrated sidebar is shown.
    // If true then it is shown, if false then it is not.
    showIntegratedSidebar: boolean;
}
