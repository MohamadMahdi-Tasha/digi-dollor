// Variables
const mobile_nav_link_item_1_btn = document.getElementById('dv-mobile-nav-link-item-1-btn');
const mobile_nav_link_item_2_btn = document.getElementById('dv-mobile-nav-link-item-2-btn');
const mobile_nav_link_item_3_btn = document.getElementById('dv-mobile-nav-link-item-3-btn');
const mobile_nav_link_item_4_btn = document.getElementById('dv-mobile-nav-link-item-4-btn');
const mobile_nav_link_item_5_btn = document.getElementById('dv-mobile-nav-link-item-5-btn');

const mobile_nav_link_item_1 = document.getElementById('dv-mobile-nav-link-item-1');
const mobile_nav_link_item_2 = document.getElementById('dv-mobile-nav-link-item-2');
const mobile_nav_link_item_3 = document.getElementById('dv-mobile-nav-link-item-3');
const mobile_nav_link_item_4 = document.getElementById('dv-mobile-nav-link-item-4');
const mobile_nav_link_item_5 = document.getElementById('dv-mobile-nav-link-item-5');

let clicks1 = 1;
let clicks2 = 1;
let clicks3 = 1;
let clicks4 = 1;
let clicks5 = 1;

// A Function That Sets The Height Of Given Element To 10rem
function show_links(clicks, list, btn) {
    if (clicks % 2 === 0) {
        list.style.height = '25rem';
        list.setAttribute('data-list-opened', true);
        btn.style.backgroundColor = 'var(--blue)';
    } else {
        list.style.height = '3.9rem';
        list.setAttribute('data-list-opened', false);
        btn.style.backgroundColor = 'var(--high-dark-indigo)';
    }
}

// Adding Event Listeners On Button That Listens To Click And Calls 'show_links'
mobile_nav_link_item_1_btn.addEventListener('click', () => {clicks1 ++;show_links(clicks1, mobile_nav_link_item_1, mobile_nav_link_item_1_btn);})
mobile_nav_link_item_2_btn.addEventListener('click', () => {clicks2 ++;show_links(clicks2, mobile_nav_link_item_2, mobile_nav_link_item_2_btn);})
mobile_nav_link_item_3_btn.addEventListener('click', () => {clicks3 ++;show_links(clicks3, mobile_nav_link_item_3, mobile_nav_link_item_3_btn);})
mobile_nav_link_item_4_btn.addEventListener('click', () => {clicks4 ++;show_links(clicks4, mobile_nav_link_item_4, mobile_nav_link_item_4_btn);})
mobile_nav_link_item_5_btn.addEventListener('click', () => {clicks5 ++;show_links(clicks5, mobile_nav_link_item_5, mobile_nav_link_item_5_btn);})