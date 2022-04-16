// Variables
const upload_media_btn = document.getElementById('dv-upload-media-btn');

// A Function That Gives The User Ability To Upload Media.
let file = [];
function upload_media() {
    // Creating An Input
    const upload_input = document.createElement('input');

    // Setting Some Attributes To Input Created
    upload_input.id = 'dv-upload-input';
    upload_input.type = 'file';
    upload_input.accept = 'image/png, image/jpeg, image/jpg';

    // When A File Number Uploaded Files Gets More Than 3 It Shows A Toaster Massage.
    upload_input.addEventListener('change', () => {
        file.push(upload_input.value);
        if (file.length > 3) {
            // Show Toaster
        }
    })

    // Clicking On Input
    upload_input.click();
}

// Adding Event Listener To Upload Media Button That Listens To Click And Calls 'upload_media' Function.
upload_media_btn.addEventListener('click', upload_media);