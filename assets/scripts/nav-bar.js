// Variables
const mobile_nav_bg = document.getElementById('dv-mobile-nav-bg');
const mobile_nav = document.getElementById('dv-mobile-nav');
const on_mobile_nav_toggle = document.getElementById('dv-on-mobile-nav-toggle');

// Adding Event Listener That Listens To Click On Mobile Nav Bar Toggler And Shows Nav Bar
on_mobile_nav_toggle.addEventListener('click', () => show_nav(mobile_nav, mobile_nav_bg));

// Adding Event Listener That Listens To Click On Mobile Nav Bar Dark Bg And Closes Nav Bar
mobile_nav_bg.addEventListener('click', () => close_nav(mobile_nav, mobile_nav_bg));