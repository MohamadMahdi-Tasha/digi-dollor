// Variables
const tab_btn_2_1 = document.getElementById('dv-tab-btn-2-1');
const tab_btn_2_2 = document.getElementById('dv-tab-btn-2-2');
const tab_btn_2_3 = document.getElementById('dv-tab-btn-2-3');
const tab_btn_2_4 = document.getElementById('dv-tab-btn-2-4');

// A Function That Activates Given Button And DeActivates Others
function activate_tab_btn(btn, btn2, btn3, btn4) {
    btn.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
}

// Adding Event Listener On Each Tab Button That Listens To Click And Calls 'activate_tab_btn' Function
tab_btn_2_1.addEventListener('click', () => activate_tab_btn(tab_btn_2_1, tab_btn_2_2, tab_btn_2_3, tab_btn_2_4));
tab_btn_2_2.addEventListener('click', () => activate_tab_btn(tab_btn_2_2, tab_btn_2_1, tab_btn_2_3, tab_btn_2_4));
tab_btn_2_3.addEventListener('click', () => activate_tab_btn(tab_btn_2_3, tab_btn_2_1, tab_btn_2_2, tab_btn_2_4));
tab_btn_2_4.addEventListener('click', () => activate_tab_btn(tab_btn_2_4, tab_btn_2_1, tab_btn_2_2, tab_btn_2_3));