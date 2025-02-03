let progressPath = document.getElementById("progress-path");
let progressWrap = document.getElementById("progress-wrap");
let pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.webkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.webkitTransition =
  "stroke-dashoffset 10ms linear";
  
const onScollEvent = function (event) {
  let scroll = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;
  let progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;

  let offset = 50;
  if (window.scrollY > offset) {
    progressWrap.classList.add("active-progress");
  } else {
    progressWrap.classList.remove("active-progress");
  }
};

onScollEvent();
window.onscroll = onScollEvent;
progressWrap.onclick = function (event) {
  window.scroll({ top: 0, behavior: "smooth" });
  return false;
};