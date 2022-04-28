// Variables
const currency_btn_1_list_item_1 = document.getElementById('dv-currency-btn-1-list-item-1');
const currency_btn_1_list_item_2 = document.getElementById('dv-currency-btn-1-list-item-2');
const currency_btn_1_list_item_3 = document.getElementById('dv-currency-btn-1-list-item-3');
const currency_btn_1_list_item_4 = document.getElementById('dv-currency-btn-1-list-item-4');
const currency_btn_1_list_item_5 = document.getElementById('dv-currency-btn-1-list-item-5');

const currency_btn_2_list_item_1 = document.getElementById('dv-currency-btn-2-list-item-1');
const currency_btn_2_list_item_2 = document.getElementById('dv-currency-btn-2-list-item-2');
const currency_btn_2_list_item_3 = document.getElementById('dv-currency-btn-2-list-item-3');
const currency_btn_2_list_item_4 = document.getElementById('dv-currency-btn-2-list-item-4');
const currency_btn_2_list_item_5 = document.getElementById('dv-currency-btn-2-list-item-5');

// A Function That Sets The Attribute Of data-value To Value Of Selected Item
function set_data_value(item, btn, span) {
    const item_value = item.textContent;
    btn.setAttribute('data-value', item_value);
    span.textContent = item_value;
}

// Adding Event Listeners On Items That Listens On CLick And Calls 'set_data_value' Function
currency_btn_1_list_item_1.addEventListener('click', () => {set_data_value(currency_btn_1_list_item_1, currency_btn_1, currency_btn_1_span)})
currency_btn_1_list_item_2.addEventListener('click', () => {set_data_value(currency_btn_1_list_item_2, currency_btn_1, currency_btn_1_span)})
currency_btn_1_list_item_3.addEventListener('click', () => {set_data_value(currency_btn_1_list_item_3, currency_btn_1, currency_btn_1_span)})
currency_btn_1_list_item_4.addEventListener('click', () => {set_data_value(currency_btn_1_list_item_4, currency_btn_1, currency_btn_1_span)})
currency_btn_1_list_item_5.addEventListener('click', () => {set_data_value(currency_btn_1_list_item_5, currency_btn_1, currency_btn_1_span)})

currency_btn_2_list_item_1.addEventListener('click', () => {set_data_value(currency_btn_2_list_item_1, currency_btn_2, currency_btn_2_span)})
currency_btn_2_list_item_2.addEventListener('click', () => {set_data_value(currency_btn_2_list_item_2, currency_btn_2, currency_btn_2_span)})
currency_btn_2_list_item_3.addEventListener('click', () => {set_data_value(currency_btn_2_list_item_3, currency_btn_2, currency_btn_2_span)})
currency_btn_2_list_item_4.addEventListener('click', () => {set_data_value(currency_btn_2_list_item_4, currency_btn_2, currency_btn_2_span)})
currency_btn_2_list_item_5.addEventListener('click', () => {set_data_value(currency_btn_2_list_item_5, currency_btn_2, currency_btn_2_span)})
