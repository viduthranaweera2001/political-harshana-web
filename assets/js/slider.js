// Feedback section slider
var swiper = new Swiper(".header-slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  freeMode: {
    enabled: true,
    sticky: true,
  },

  speed: 500,
  autoplay: {
    delay: 4000,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 1,
    },
  },
});
