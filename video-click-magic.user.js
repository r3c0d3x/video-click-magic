// ==UserScript==
// @id video-click-magic
// @name Click to Play/Pause <video>
// @description Makes it so <video> elements will play/pause when clicking the video, not just the controls. Requested by someone from IRC.
// @include *
// @version 1
// @updateURL http://r3c0d3x.github.io/video-click-magic/video-click-magic.user.js
// ==/UserScript==

window.addEventListener('load', function() {
    Array.prototype.forEach.call(document.getElementsByTagName('video'), function(elem) {
        elem.addEventListener('click', playPause);
    });
}, false);

function playPause() {
	  if (this.paused)
        this.play();
    else
        this.pause();
}

(new MutationObserver(function(muts) {
    muts.forEach(function(mut) {
        mut.addedNodes.forEach(function(elem) {
            if (elem.tagName === 'VIDEO')
                elem.addEventListener('click', playPause);
        });
    });
})).observe(document.body, { childList: true });
