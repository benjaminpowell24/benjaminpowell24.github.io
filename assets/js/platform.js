$(document).ready(function () {
    if (/iPad|iPhone|Mac OS X|iPod/.test(navigator.userAgent)) {
        $("<span>🧑🏾‍💻</span>").appendTo("#profile-icon");
        $("<span>🚀</span>").appendTo("#project-icon");
    } else {
        console.log("This is not an iOS device!");
    }
});