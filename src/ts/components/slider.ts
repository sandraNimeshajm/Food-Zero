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
      nextEl: ".js-blog-post-next",
      prevEl: ".js-blog-post-prev",
    },

    pagination: {
      el: ".js-blog-post-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  const allPostsSlider = new Swiper(".js-all-posts-slider", {
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
      nextEl: ".js-all-posts-next",
      prevEl: ".js-all-posts-prev",
    },
  });
};

export default slider;
