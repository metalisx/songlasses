export interface SgApp {

    // Indicator if in widescreen mode the sidebar is integrated into the dom hierarchy.
    // If true then it is integrated into the dom, if false then it is a slider sidebar.
    integratedSidebar: boolean;

    // Indicator if the sliding sidebar should be shown.
    showSidebar: boolean;

    // Indicator if the integrated sidebar should be shown.
    showIntegratedSidebar: boolean;

}
