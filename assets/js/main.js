(function () {
  "use strict";

  //===== Preloader

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // ==== Sticky Menu
  window.onscroll = function () {
    const header_navbar = document.getElementById("header_navbar");
    const sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "block";
    } else {
      backToTo.style.display = "none";
    }
  };


  //====== counter up
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: "k",
  });
  cu.start();

  //WOW Scroll Spy
  const wow = new WOW({
    //disabled for mobile
    mobile: false,
  });
  wow.init();
})();
