// ==UserScript==
// @id video-click-magic
// @name Click to Play/Pause <video>
// @description Makes it so <video> elements will play/pause when clicking the video, not just the controls. Requested by someone from IRC.
// @include *
// @version 1.1
// @updateURL https://r3c0d3x.github.io/video-click-magic/video-click-magic.user.js
// ==/UserScript==

function playPause() {
    if (typeof window.videojs === 'undefined')
        if (this.paused)
            this.play();
        else
            this.pause();
}

window.addEventListener('load', function() {
    if (window.location.host === 'boards.4chan.org')
        if (typeof unsafeWindow.Main !== 'undefined' && !document.getElementsByTagName('html')[0].classList.contains('fourchan-x'))
            window.addEventListener('click', function(e) {
                if (e.toElement.tagName === 'VIDEO' && e.toElement.classList.contains('expandedWebm'))
                    playPause.call(e.toElement);
            });
    else {
        Array.prototype.forEach.call(document.getElementsByTagName('video'), function(elem) {
            console.log(elem);
            elem.addEventListener('click', playPause);
        });

        (new MutationObserver(function(muts) {
            muts.forEach(function(mut) {
                mut.addedNodes.forEach(function(elem) {
                    console.log(elem);
                    if (elem.tagName === 'VIDEO') {
                        elem.addEventListener('click', playPause);
                    }
                });
            });
        })).observe(document.body, { childList: true });
    }
}, false);
