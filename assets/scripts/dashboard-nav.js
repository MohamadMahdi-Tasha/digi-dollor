// Variables
const dashboard_nav = document.getElementById('dv-dashboard-nav');
const dark_bg = document.getElementById('dv-mobile-nav-bg');
const dashboard_nav_toggler = document.getElementById('dv-dashboard-mobile-toggle');

// Adding Event Listener That Listens To Click On Mobile Nav Bar Toggler And Shows Nav Bar
dashboard_nav_toggler.addEventListener('click', () => {show_nav(dashboard_nav, dark_bg)})

// Adding Event Listener That Listens To Click On Mobile Nav Bar Dark Bg And Closes Nav Bar
dark_bg.addEventListener('click', () => {close_nav(dashboard_nav, dark_bg)})