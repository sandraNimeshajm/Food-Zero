import Swiper from "swiper/bundle";

const slider = () => {
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
