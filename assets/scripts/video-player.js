// Variables
const volume_input = document.getElementById('dv-volume-input');
const mute_btn = document.getElementById('dv-mute-btn');
const video_btn_video = document.getElementById('dv-video-btn-video');
const pause_btn_video = document.getElementById('dv-pause-btn-video');
const mic_off_btn_video = document.getElementById('dv-mic-off-video');
const full_btn_video = document.getElementById('dv-full-btn-video');
const video_src = document.getElementById('dv-video');

const pause_icon = document.getElementById('dv-pause-icon');
const mute_icon = document.getElementById('dv-mute-icon');
const mic_off_icon = document.getElementById('dv-mic-off-icon');

let clicks_of_mic = 0;
let clicks_of_play_btn = 0;
let clicks_of_video = 0;
let clicks_of_mute_button = 0;

let is_full_screen = false;
let is_mic_on = false;
let is_playing = false;
let is_camera_on = false;
let is_muted = false;

// Setting Volume Of Video To Volume Slider On Video
video_src.volume = volume_input.value / 100;

// Adding event Listener On Full Screen Button That Listens To Click And Requests Full Screen.
full_btn_video.addEventListener('click', () => {
    video_src.requestFullscreen();
    is_full_screen = true;
})

// Adding event Listener On Mic Button That Listens To Click And Turns Mic On And Off.
mic_off_btn_video.addEventListener('click', () => {
    clicks_of_mic ++;
    if (clicks_of_mic % 2 !== 0) {
        mic_off_icon.classList.replace('fa-microphone-slash', 'fa-microphone-lines');
        mic_off_btn_video.classList.add('active');
        is_mic_on = true;
    } else {
        mic_off_icon.classList.replace('fa-microphone-lines', 'fa-microphone-slash');
        mic_off_btn_video.classList.remove('active');
        is_mic_on = false;
    }
})

// Adding event Listener On Play Button That Listens To Click And Starts Video.
pause_btn_video.addEventListener('click', () => {
    clicks_of_play_btn ++;
    if (clicks_of_play_btn % 2 !== 0) {
        pause_icon.classList.replace('fa-pause', 'fa-play');
        video_src.play();
        is_playing = true;
    } else {
        pause_icon.classList.replace('fa-play', 'fa-pause');
        video_src.pause();
        is_playing = false;
    }
})

// Adding event Listener On Camera Button That Listens To Click And Starts It.
video_btn_video.addEventListener('click', () => {
    clicks_of_video ++;
    if (clicks_of_video % 2 !== 0) {
        video_btn_video.classList.add('active');
        is_camera_on = true;
    } else {
        video_btn_video.classList.remove('active');
        is_camera_on = false;
    }
})


// Adding event Listener On Volume Button That Listens To Input Event And Sets Volume Of Video To Its Value And Sets Icon Of Mute Button.
volume_input.addEventListener('input', () => {
    video_src.volume = volume_input.value / 100;
    if (volume_input.value >= 30) {
        if (mute_icon.classList.contains('fa-volume-low')) {mute_icon.classList.replace('fa-volume-low', 'fa-volume-high')}
        else {mute_icon.classList.replace('fa-volume-xmark', 'fa-volume-high')}
        is_muted = false;
    } if (volume_input.value == 0 && volume_input.value < 1) {
        if (mute_icon.classList.contains('fa-volume-high')) {mute_icon.classList.replace('fa-volume-high', 'fa-volume-xmark')}
        else {mute_icon.classList.replace('fa-volume-low', 'fa-volume-xmark')}
        is_muted = true;
    }
})

// Adding event Listener On Mute Button That Listens To Click And Mutes Video And Sets The Icon Of Mute Button.
mute_btn.addEventListener('click', () => {
    clicks_of_mute_button ++;
    if (clicks_of_mute_button % 2 !== 0) {
        if (mute_icon.classList.contains('fa-volume-high')) {mute_icon.classList.replace('fa-volume-high', 'fa-volume-xmark');}
        else if (mute_icon.classList.contains('fa-volume-low')) {mute_icon.classList.replace('fa-volume-low', 'fa-volume-xmark');}
        video_src.volume = 0;
        volume_input.value = 0;
        is_muted = true;
    } else {
        mute_icon.classList.replace('fa-volume-xmark', 'fa-volume-low');
        video_src.volume = 0.2;
        volume_input.value = 20;
        is_muted = false;
    }
})