// Variables
const tab_btn_1 = document.getElementById('dv-tab-btn-1');
const tab_btn_2 = document.getElementById('dv-tab-btn-2');

// A Function That Activates Tab Button Given Button And Deactivates Other Given Button
function activate_tab_button(btn, other_btn) {
    btn.classList.add('active');
    other_btn.classList.remove('active');
}

// Adding Event Listener On Each Button To Call 'activate_tab_button' Function
tab_btn_1.addEventListener('click', () => activate_tab_button(tab_btn_1, tab_btn_2));
tab_btn_2.addEventListener('click', () => activate_tab_button(tab_btn_2, tab_btn_1));