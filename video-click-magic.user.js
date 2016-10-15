// ==UserScript==
// @id video-click-magic
// @name Click to Play/Pause <video>
// @description Makes it so <video> elements will play/pause when clicking the video, not just the controls. Requested by someone from IRC.
// @include *
// @version 1.1
// @updateURL https://r3c0d3x.github.io/video-click-magic/video-click-magic.user.js
// ==/UserScript==

function playPause() {
    if (typeof unsafeWindow.videojs === 'undefined')
        if (this.paused)
            this.play();
        else
            this.pause();
}

window.addEventListener('click', function(e) {
    if (e.toElement.tagName === 'VIDEO')
    playPause.call(e.toElement);
});
