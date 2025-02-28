// Ambil elemen dari HTML
const playPauseBtn = document.getElementById("play-pause");
const fullscreenBtn = document.getElementById("fullscreen");
const iframe = document.getElementById("youtube-video");

let isPlaying = true;

// Fungsi untuk play/pause video
playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        playPauseBtn.innerText = 'Play';
    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playPauseBtn.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Fungsi untuk fullscreen video
fullscreenBtn.addEventListener("click", () => {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});
