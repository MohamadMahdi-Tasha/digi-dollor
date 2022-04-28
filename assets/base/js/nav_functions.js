// A Function That Shows Nav Bar
function show_nav(nav, dark_bg) {
    nav.style.left = '30%';
    dark_bg.style.left = '0';
    nav.setAttribute('data-opened', true);
}

// A Function That Closes Nav Bar
function close_nav(nav, dark_bg) {
    nav.style.left = '100%';
    dark_bg.style.left = '100%';
    nav.setAttribute('data-opened', false);
}