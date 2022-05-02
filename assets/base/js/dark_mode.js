// Variables
const switch_toggle = document.getElementById('dv-switch-toggle');
const dashboard_main = document.getElementById('dv-dashboard-main');
const header_menu_theme_toggler = document.getElementById('dv-header-menu-theme-toggler');
let clicks_dark_mode = 0;

// A Function That Turns On Dark Theme
function turn_dark(clicks) {
    if (clicks % 2 !== 0) {dashboard_main.setAttribute('data-theme', 'dark');}
    else {dashboard_main.setAttribute('data-theme', 'light');}
}

// Adding Event Listener On Switch Toggle That Calls 'turn_dark' Function
switch_toggle.addEventListener('click', () => {
    clicks_dark_mode ++;
    turn_dark(clicks_dark_mode);
})

// Adding Event Listener On Header Profile Dropdown, Theme Toggler Button That Listens To Click And  Calls 'turn_dark' Function
header_menu_theme_toggler.addEventListener('click', () => {
    clicks_dark_mode ++;
    const theme_status = document.getElementById('dv-dashboard-main').getAttribute('data-theme');
    if (theme_status === 'dark') {header_menu_theme_toggler.lastElementChild.textContent = 'روشن';}
    else {header_menu_theme_toggler.lastElementChild.textContent = 'تیره';}
    turn_dark(clicks_dark_mode);
})