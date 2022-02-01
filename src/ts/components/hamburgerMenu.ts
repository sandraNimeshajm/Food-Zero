const hamburgerMenu = () => {
  const hamburgerMenuBtnOpen = document.querySelector(".js-menu-open");
  const hamburgerMenuBtnClose = document.querySelector(".js-menu-close");
  const headerContent = document.querySelector(".js-header-content");
  const body = document.querySelector("body");

  function openMenuHandler() {
    headerContent.classList.add("active");
    hamburgerMenuBtnOpen.classList.add("active");
    body.classList.add("fixed");
  }

  hamburgerMenuBtnOpen.addEventListener("click", openMenuHandler);

  function closeMenuHandler() {
    headerContent.classList.remove("active");
    hamburgerMenuBtnOpen.classList.remove("active");
    body.classList.remove("fixed");
  }

  hamburgerMenuBtnClose.addEventListener("click", closeMenuHandler);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !headerContent.classList.contains("hidden")) {
      headerContent.classList.remove("active");
      hamburgerMenuBtnOpen.classList.remove("active");
      body.classList.remove("fixed");
    }
  });
};

export default hamburgerMenu;
