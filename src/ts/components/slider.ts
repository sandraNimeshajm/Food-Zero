import Swiper from "swiper/bundle";

const slider = () => {
  const slides = document.querySelector(".js-testimonials-slider");
  const blogSlides = document.querySelector(".js-blog-post-slider");

  const swiper = new Swiper(".js-testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: ".testimonials__slider-pagination",
    },
    navigation: {
      nextEl: ".js-testimonials-next",
      prevEl: ".js-testimonials-prev",
    },
  });
};

export default slider;
