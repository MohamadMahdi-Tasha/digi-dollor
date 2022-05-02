// Variables
const switch_toggle = document.getElementById('dv-switch-toggle');
const dashboard_main = document.getElementById('dv-dashboard-main');
let clicks_dark_mode = 0;

// A Function That Turns On Dark Theme
function turn_dark() {
    if (clicks_dark_mode % 2 !== 0) {dashboard_main.setAttribute('data-theme', 'dark');}
    else {dashboard_main.setAttribute('data-theme', 'light');}
}

// Adding Event Listener On Switch Toggle That Calls 'turn_dark' Function
switch_toggle.addEventListener('click', () => {
    clicks_dark_mode ++;
    turn_dark();
})