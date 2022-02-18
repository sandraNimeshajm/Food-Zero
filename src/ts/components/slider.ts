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

  const allPostsSlider = new Swiper(".js-all-posts-slider", {
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
      nextEl: ".js-all-posts-next",
      prevEl: ".js-all-posts-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      1300: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1301: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
};

export default slider;
