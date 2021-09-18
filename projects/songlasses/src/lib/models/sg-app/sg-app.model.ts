export interface SgApp {

    // sidebarType is a directive for the app component on how to display the sidebar
    // no-sidebar = this app component is configured without an sidedbar
    // sliding-sidebar = this app component uses a sliding sidebar in all view modes
    // integrated-sidebar = this app component uses the width to trigger the use of a sliding 
    //                      sidebar on small displays and an integrated sidebar on bigger displays
    sidebarType: 'no-sidebar' | 'sliding-sidebar' | 'integrated-sidebar';

    // Indicator to switch the display of the sidebar on(true) and off(false).
    showSidebar: boolean;

    // Indicator to switch the display of the integrated sidebar on(true) and off(false).
    showIntegratedSidebar: boolean;

}
