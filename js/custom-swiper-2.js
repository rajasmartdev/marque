const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1200,
  watchSlidesProgress: true,
  parallax: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
