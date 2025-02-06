const videos = ["video1", "video2", "video3", "video4", "video5"];
let currentIndex = 0;

function playNextVideo() {
    if (currentIndex < videos.length - 1) {
        currentIndex++;
        document.getElementById(videos[currentIndex]).play();
    }
}

videos.forEach((id) => {
    let video = document.getElementById(id);
    video.addEventListener("ended", playNextVideo);
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function checkVideoVisibility() {
    const videoSection = document.getElementById("videoSection");
    const mainVideo = document.getElementById("video1");

    if (isElementInViewport(videoSection) && !sessionStorage.getItem("mainVideoPlayed")) {
        mainVideo.play().catch(error => console.log("Autoplay prevented:", error));
        sessionStorage.setItem("mainVideoPlayed", "true");
    }
}

document.addEventListener("scroll", checkVideoVisibility);
document.addEventListener("DOMContentLoaded", checkVideoVisibility);