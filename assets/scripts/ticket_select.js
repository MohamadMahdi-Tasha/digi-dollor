// Variables
const select_btn_1 = document.getElementById('dv-select-btn-1');
const select_btn_1_span = document.getElementById('dv-select-btn-1-span');
const ticket_drop_down_1_1 = document.getElementById('dv-ticket-drop-down-1-1');
const ticket_drop_down_1_2 = document.getElementById('dv-ticket-drop-down-1-2');
const ticket_drop_down_1_3 = document.getElementById('dv-ticket-drop-down-1-3');
const ticket_drop_down_1_4 = document.getElementById('dv-ticket-drop-down-1-4');
const ticket_drop_down_1_5 = document.getElementById('dv-ticket-drop-down-1-5');

const select_btn_2 = document.getElementById('dv-select-btn-2');
const select_btn_2_span = document.getElementById('dv-select-btn-2-span');
const ticket_drop_down_2_1 = document.getElementById('dv-ticket-drop-down-2-1');
const ticket_drop_down_2_2 = document.getElementById('dv-ticket-drop-down-2-2');
const ticket_drop_down_2_3 = document.getElementById('dv-ticket-drop-down-2-3');
const ticket_drop_down_2_4 = document.getElementById('dv-ticket-drop-down-2-4');
const ticket_drop_down_2_5 = document.getElementById('dv-ticket-drop-down-2-5');

// A Function That Selects Item
function select_item(item, btn, span) {
    const items_value = item.textContent;
    btn.setAttribute('data-value', items_value);
    span.textContent = items_value;
}

// Adding Event Listener On Each Item That Listens To Click And Calls 'select_item' Function
ticket_drop_down_1_1.addEventListener('click', () => select_item(ticket_drop_down_1_1, select_btn_1, select_btn_1_span));
ticket_drop_down_1_2.addEventListener('click', () => select_item(ticket_drop_down_1_2, select_btn_1, select_btn_1_span));
ticket_drop_down_1_3.addEventListener('click', () => select_item(ticket_drop_down_1_3, select_btn_1, select_btn_1_span));
ticket_drop_down_1_4.addEventListener('click', () => select_item(ticket_drop_down_1_4, select_btn_1, select_btn_1_span));
ticket_drop_down_1_5.addEventListener('click', () => select_item(ticket_drop_down_1_5, select_btn_1, select_btn_1_span));

ticket_drop_down_2_1.addEventListener('click', () => select_item(ticket_drop_down_2_1, select_btn_2, select_btn_2_span));
ticket_drop_down_2_2.addEventListener('click', () => select_item(ticket_drop_down_2_2, select_btn_2, select_btn_2_span));
ticket_drop_down_2_3.addEventListener('click', () => select_item(ticket_drop_down_2_3, select_btn_2, select_btn_2_span));
ticket_drop_down_2_4.addEventListener('click', () => select_item(ticket_drop_down_2_4, select_btn_2, select_btn_2_span));
ticket_drop_down_2_5.addEventListener('click', () => select_item(ticket_drop_down_2_5, select_btn_2, select_btn_2_span));