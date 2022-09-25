"use strict";

const header = document.querySelector(".header");
const hambergurMenu = document.querySelector(".hambergur__menu");
const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");
const destCards = document.querySelectorAll(".destination__cards");
const servicesEl = document.querySelector(".services");
const headerWraper = document.querySelector(".header__wrapper");
const backTop = document.querySelector(".btn__bck-top");

//  *NAVIGATION
hambergurMenu.addEventListener("click", () => {
  header.classList.toggle("nav__open");
});

// ********** SWIPER    ***************
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// * STICKY NAVIGATION

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
  if (!entry.isIntersecting) backTop.style.display = "block";
  else {
    backTop.style.display = "none";
  }
};

const headerWraperObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

headerWraperObserver.observe(headerWraper);
