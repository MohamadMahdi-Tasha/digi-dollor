// Variables
const mobile_nav_bg = document.getElementById('dv-mobile-nav-bg');
const mobile_nav = document.getElementById('dv-mobile-nav');
const on_mobile_nav_toggle = document.getElementById('dv-on-mobile-nav-toggle');

// A Function That Shows Nav Bar
function show_nav() {
    mobile_nav.style.left = '30%';
    mobile_nav_bg.style.left = '0';
    mobile_nav.setAttribute('data-opened', true);
}

// A Function That Closes Nav Bar
function close_nav() {
    mobile_nav.style.left = '100%';
    mobile_nav_bg.style.left = '100%';
    mobile_nav.setAttribute('data-opened', false);
}

// Adding Event Listener That Listens To Click On Mobile Nav Bar Toggler And Shows Nav Bar
on_mobile_nav_toggle.addEventListener('click', show_nav);

// Adding Event Listener That Listens To Click On Mobile Nav Bar Dark Bg And Closes Nav Bar
mobile_nav_bg.addEventListener('click', close_nav);