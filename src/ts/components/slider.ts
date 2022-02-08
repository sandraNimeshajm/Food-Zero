import Swiper from "swiper/bundle";

const slider = () => {
  // const slides = document.querySelector(".js-testimonials-slider");
  // const blogSlides = document.querySelector(".js-blog-post-slider");

  // if (!slides || !blogSlides) return;

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

  const blogSlider = new Swiper(".js-blog-post-slider", {
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
      nextEl: ".blog-post__button-next",
      prevEl: ".blog-post__button-prev",
    },

    pagination: {
      el: ".blog-post__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
};

export default slider;
