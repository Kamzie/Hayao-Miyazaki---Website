"use strict";

const slides = document.querySelectorAll(".slides");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const filmNumber = document.querySelector(".film_number");

let curSlide = 0;
const maxSlide = slides.length;

// Functions
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${52 * (i - slide)}%)`)
  );
};

const filmNo = function (slide) {
  filmNumber.textContent = `Film: ${slide + 1} / ${slides.length}`;
};

// Next slide
const slider = function () {
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 11;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    filmNo(curSlide);
  };

  // Previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = 0;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    filmNo(curSlide);
  };

  const init = function () {
    goToSlide(0);
    filmNo(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // dotContainer.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("dots__dot")) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //   }
  // });
};

slider();

////////////////////////
// Lifecycle DOM events

// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("HTML parsed and DOM tree built");
// });

// window.addEventListener("load", function (e) {
//   console.log("Page fully loaded");
// });
