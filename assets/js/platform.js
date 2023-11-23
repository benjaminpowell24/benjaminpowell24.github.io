$(document).ready(function () {
    if (/iPad|iPhone|Mac OS X|iPod/.test(navigator.userAgent)) {
        $("<span>🏆</span>").appendTo("#achievement");
    }
});