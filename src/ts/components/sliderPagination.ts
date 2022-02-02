//@ts-nocheck

const sliderPagination = () => {
  const slides = [...document.querySelectorAll(".js-testimonials-slide")];
  let current = 1;
  const max = slides.length;

  const currentSlide = document.querySelector(".js-testimonials-current");
  currentSlide.innerHTML = current;
  console.log(current);

  const maxSlide = document.querySelector(".js-testimonials-max");
  maxSlide.innerHTML = max;

  const btnPrev = document.querySelector(".js-testimonials-prev");
  const btnNext = document.querySelector(".js-testimonials-next");

  btnPrev.addEventListener("click", () => {
    if (current === 1) {
      return;
    }
    current--;
    console.log(current);

    currentSlide.innerHTML = current;
  });

  btnNext.addEventListener("click", () => {
    if (current === max) {
      return;
    }
    current++;
    console.log(current);

    currentSlide.innerHTML = current;
  });
};

export default sliderPagination;
