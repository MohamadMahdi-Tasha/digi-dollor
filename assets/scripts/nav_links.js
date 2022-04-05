// Variables
const item_list_1 = document.getElementById('dv-mobile-nav-link-item-1');
const item_list_2 = document.getElementById('dv-mobile-nav-link-item-2');
const item_list_3 = document.getElementById('dv-mobile-nav-link-item-3');
const item_list_4 = document.getElementById('dv-mobile-nav-link-item-4');
const item_list_5 = document.getElementById('dv-mobile-nav-link-item-5');

const item_list_toggler_1 = document.getElementById('dv-mobile-nav-link-item-1-list-toggle');
const item_list_toggler_2 = document.getElementById('dv-mobile-nav-link-item-2-list-toggle');
const item_list_toggler_3 = document.getElementById('dv-mobile-nav-link-item-3-list-toggle');
const item_list_toggler_4 = document.getElementById('dv-mobile-nav-link-item-4-list-toggle');
const item_list_toggler_5 = document.getElementById('dv-mobile-nav-link-item-5-list-toggle');

let click_toggler_1 = 0;
let click_toggler_2 = 0;
let click_toggler_3 = 0;
let click_toggler_4 = 0;
let click_toggler_5 = 0;

// A Function That Activates List Item Of Mobile Nav Link.
function show_nav_list_item(clicks, item) {
    if (clicks % 2 !== 0) {item.setAttribute('data-list-opened', true);}
    else {item.setAttribute('data-list-opened', false);}
}

// Adding Event Listener On Each Toggler To Listen To Click And Call 'show_nav_list_item' Function.
item_list_toggler_1.addEventListener('click', () => {click_toggler_1++;show_nav_list_item(click_toggler_1, item_list_1)})
item_list_toggler_2.addEventListener('click', () => {click_toggler_2++;show_nav_list_item(click_toggler_2, item_list_2)})
item_list_toggler_3.addEventListener('click', () => {click_toggler_3++;show_nav_list_item(click_toggler_3, item_list_3)})
item_list_toggler_4.addEventListener('click', () => {click_toggler_4++;show_nav_list_item(click_toggler_4, item_list_4)})
item_list_toggler_5.addEventListener('click', () => {click_toggler_5++;show_nav_list_item(click_toggler_5, item_list_5)})
