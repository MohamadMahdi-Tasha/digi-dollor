// Variables
const change_btn = document.getElementById('dv-change-btn');
const currency_btn_1 = document.getElementById('dv-currency-btn-1');
const currency_btn_1_span = document.getElementById('dv-currency-btn-1-span');

const currency_btn_2 = document.getElementById('dv-currency-btn-2');
const currency_btn_2_span = document.getElementById('dv-currency-btn-2-span');

// A Function That Replaces Value Of Each Item To Each Other
function replace_btn_value() {
    const currency_btn_1_value = currency_btn_1.getAttribute('data-value');
    const currency_btn_2_value = currency_btn_2.getAttribute('data-value');

    currency_btn_1_span.textContent = currency_btn_2_value;
    currency_btn_2_span.textContent = currency_btn_1_value;

    currency_btn_1.setAttribute('data-value', currency_btn_2_value);
    currency_btn_2.setAttribute('data-value', currency_btn_1_value);
}

// Adding Event Listener That Listens To Click On change Button And Calls 'replace_btn_value' Function
change_btn.addEventListener('click', replace_btn_value);