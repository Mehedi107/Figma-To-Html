'use strict';
// Slider ==============================
let swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const cardsAll = document.querySelectorAll('.swiper-slide');
const paginationCurrent = document.querySelector('.pagination-current');
const paginationTotal = document.querySelector('.pagination-total');

let currentSlide = 0;

paginationTotal.textContent = cardsAll.length;
