// Variables
const toaster_list = document.getElementById('dv-toaster-list');

// A Function That Creates New Toaster
function new_toaster(type, name, details) {
    // Elements
    const list_item = document.createElement('li');
    const toaster = document.createElement('div');
    const toaster_right_side = document.createElement('div');
    const toaster_texts = document.createElement('div');
    const toaster_title = document.createElement('h1');
    const toaster_details = document.createElement('p');
    const alert_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
    const close_icon ='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#343434" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg>';

    // Converting Icons(strings) To Html Elements(Node)
    const alert_icon_new = new DOMParser().parseFromString(alert_icon, "text/xml");
    const close_icon_new = new DOMParser().parseFromString(close_icon, "text/xml");

    // Setting some Attributes
    toaster.className = `dv-toaster ${type}`;
    toaster_right_side.className = 'dv-toaster-right-side';
    toaster_title.id =  'dv-toaster-title';
    toaster_details.id = 'dv-toaster-details';
    toaster.addEventListener('click', () => close_toaster(toaster));
    setInterval(() => close_toaster(toaster), 2000);

    // Setting Content Of Some Elements
    toaster_title.textContent = name;
    toaster_details.textContent = details;

    // Appending Children To Their Parents
    list_item.appendChild(toaster);
    toaster.appendChild(toaster_right_side);
    toaster.appendChild(close_icon_new.firstChild);
    toaster_right_side.appendChild(alert_icon_new.firstChild);
    toaster_right_side.appendChild(toaster_texts);
    toaster_texts.appendChild(toaster_title);
    toaster_texts.appendChild(toaster_details);
    toaster_list.appendChild(list_item);
}

// A Function That Closes Toaster
function close_toaster(toaster_element) {toaster_element.style.display = 'none';}