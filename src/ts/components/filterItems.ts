const filterItems = () => {
  let btns = document.querySelectorAll(".js-filter-btn");
  let items = document.querySelectorAll(".js-filter-item");

  if (!btns || !items) return;

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
      }
      this.classList.add("active");

      let currentCategory = this.getAttribute("data-filter");

      for (let k = 0; k < items.length; k++) {
        items[k].classList.remove("active");
        items[k].classList.add("hide");

        let itemsCats = items[k].getAttribute("data-category").split(" ");

        let allCats = currentCategory == "all";

        if (itemsCats.includes(currentCategory) || allCats) {
          items[k].classList.remove("hide");
          items[k].classList.add("active");
        }
      }
    });
  }
};

export default filterItems;
