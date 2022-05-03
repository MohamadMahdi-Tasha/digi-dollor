// Variables
const upload_media_btn = document.getElementById('dv-upload-media-btn');
let clicks_of_upload_btn = 0;

// A Function That Gives The User Ability To Upload Media.
let file = [];
function upload_media() {
    clicks_of_upload_btn ++;
    if (clicks_of_upload_btn <= 3) {
        // Creating An Input
        const upload_input = document.createElement('input');

        // Setting Some Attributes To Input Created
        upload_input.id = 'dv-upload-input';
        upload_input.type = 'file';
        upload_input.accept = 'image/png, image/jpeg, image/jpg';

        file.push(upload_input.value);

        // Clicking On Input
        upload_input.click();
    } else {swal('خطا!', 'تعداد فایل ها از 3 تا بیشتر نمیتواند باشد.')}
}

// Adding Event Listener To Upload Media Button That Listens To Click And Calls 'upload_media' Function.
upload_media_btn.addEventListener('click', upload_media);