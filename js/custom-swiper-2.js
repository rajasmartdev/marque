const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  direction: 'horizontal',
  loop: true,
  speed: 1200,
  watchSlidesProgress: true,
  parallax: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
