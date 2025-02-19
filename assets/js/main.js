/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: '3',
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 16
    }
  }
});