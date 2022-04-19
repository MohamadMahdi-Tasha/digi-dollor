// Variables
const open_able_item_1_toggler = document.getElementById('dv-open-able-item-1-toggler');
const open_able_item_2_toggler = document.getElementById('dv-open-able-item-2-toggler');
const open_able_item_3_toggler = document.getElementById('dv-open-able-item-3-toggler');
const open_able_item_4_toggler = document.getElementById('dv-open-able-item-4-toggler');
const open_able_item_5_toggler = document.getElementById('dv-open-able-item-5-toggler');
const open_able_item_1 = document.getElementById('dv-open-able-item-1');
const open_able_item_2 = document.getElementById('dv-open-able-item-2');
const open_able_item_3 = document.getElementById('dv-open-able-item-3');
const open_able_item_4 = document.getElementById('dv-open-able-item-4');
const open_able_item_5 = document.getElementById('dv-open-able-item-5');
const open_able_item_1_toggler_svg = document.getElementById('dv-open-able-item-1-toggler-svg');
const open_able_item_2_toggler_svg = document.getElementById('dv-open-able-item-2-toggler-svg');
const open_able_item_3_toggler_svg = document.getElementById('dv-open-able-item-3-toggler-svg');
const open_able_item_4_toggler_svg = document.getElementById('dv-open-able-item-4-toggler-svg');
const open_able_item_5_toggler_svg = document.getElementById('dv-open-able-item-5-toggler-svg');
let click_item_1 = 0;
let click_item_2 = 0;
let click_item_3 = 0;
let click_item_4 = 0;
let click_item_5 = 0;

// A Function That Changes Height Of Given Item And Rotates Given Svg
function open_item(click, item, svg) {
    if (click % 2 !== 0) {
        item.style.height = 'auto';
        svg.style.transform = 'rotate(180deg)';
    } else {
        item.style.height = '4rem';
        svg.style.transform = 'rotate(0deg)';
    }
}

// Adding Event Listener On Togglers That Listens To Click And Calls 'open_item'
open_able_item_1_toggler.addEventListener('click', () => {click_item_1 ++;open_item(click_item_1, open_able_item_1, open_able_item_1_toggler_svg)})
open_able_item_2_toggler.addEventListener('click', () => {click_item_2 ++;open_item(click_item_2, open_able_item_2, open_able_item_2_toggler_svg)})
open_able_item_3_toggler.addEventListener('click', () => {click_item_3 ++;open_item(click_item_3, open_able_item_3, open_able_item_3_toggler_svg)})
open_able_item_4_toggler.addEventListener('click', () => {click_item_4 ++;open_item(click_item_4, open_able_item_4, open_able_item_4_toggler_svg)})
open_able_item_5_toggler.addEventListener('click', () => {click_item_5 ++;open_item(click_item_5, open_able_item_5, open_able_item_5_toggler_svg)})