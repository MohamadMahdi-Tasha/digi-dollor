// Adding Event Listener On Each Btn That Listens To Click And Sets Attribute Of It And Changes Its Content
document.querySelectorAll('.dv-selectable-item').forEach(item => {
    item.addEventListener('click', () => {
        const element_to_be_change_its_text = item.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild;
        const btn = item.parentElement.parentElement.previousElementSibling;
        const selected_item_content = item.textContent;

        btn.setAttribute('data-value', selected_item_content);
        element_to_be_change_its_text.textContent = selected_item_content;
    })
})

// Adding event Listener On Switch Buttons That Listens To Click And Replaces Each Buttons Attribute And Content With Other One
document.getElementById('dv-switch-btn').addEventListener('click', () => {
    const btn_1 = document.getElementById('dv-btn-1');
    const btn_2 = document.getElementById('dv-btn-2');

    btn_1.setAttribute('data-value', btn_2.firstElementChild.lastElementChild.textContent);
    btn_2.setAttribute('data-value', btn_1.firstElementChild.lastElementChild.textContent);
    btn_2.firstElementChild.lastElementChild.textContent = btn_2.getAttribute('data-value');
    btn_1.firstElementChild.lastElementChild.textContent = btn_1.getAttribute('data-value');
})