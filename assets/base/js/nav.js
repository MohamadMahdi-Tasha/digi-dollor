// Variables
const nav_close_btn = document.getElementById('dv-mobile-nav-close-btn');
const on_mobile_nav_toggle = document.getElementById('dv-on-mobile-nav-toggle');
const nav = on_mobile_nav_toggle.getAttribute('data-target');

// A Function That Sets Attribute Of Given Nav
function set_nav_visibility(status) {
    document.getElementById(nav).setAttribute('data-opened', status);
    document.getElementById('dv-mobile-nav-bg').setAttribute('data-opened', status);
}

// Adding Event Listeners That Listens To CLick And Calls 'set_nav_visibility' Function
nav_close_btn.addEventListener('click', () => set_nav_visibility(false))
on_mobile_nav_toggle.addEventListener('click', () => set_nav_visibility(true))
document.getElementById('dv-mobile-nav-bg').addEventListener('click', () => set_nav_visibility(false))

// Adding Event Listener On Each Button That Opens Its List
document.querySelectorAll('[data-list-opened=false] > button').forEach(item => {
    let clicks_of_item = 0;
    item.addEventListener('click', () => {
        clicks_of_item ++;
        if (clicks_of_item % 2 !== 0) {
            item.parentElement.setAttribute("data-list-opened", true);
            item.classList.add('active');
            item.nextElementSibling.classList.remove('d-none');
        } else {
            item.parentElement.setAttribute("data-list-opened", false);
            item.classList.remove('active');
            item.nextElementSibling.classList.add('d-none');
        }
    })
})