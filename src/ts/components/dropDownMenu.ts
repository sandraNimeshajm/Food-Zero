const menu = (): void => {
  const menuItemsWithSubmenu = document.querySelectorAll(
    ".js-nav__item-has-children"
  );

  if (menuItemsWithSubmenu.length === 0) return;

  menuItemsWithSubmenu.forEach((item) => {
    item.querySelector("a").insertAdjacentHTML(
      "beforeend",
      `
			<div class="nav__subitems-expanding | js-nav-subitems-expanding" data-open='closed'>
				<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 9L5 5L1 1" stroke="#D3B48B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
        `
    );
  });

  const expandingElements = document.querySelectorAll(
    ".js-nav__item-link-has-children"
  );

  // const expandingElements = document.querySelectorAll(
  //   ".js-nav-subitems-expanding"
  // );

  expandingElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      expandingElements.forEach((expand) => {
        if (expand != el) {
          expand.parentElement.parentElement.querySelector<HTMLElement>(
            ".js-nav-subitems"
          ).style.height = `0px`;
          expand.setAttribute("data-open", "closed");
        }
      });

      if (el.getAttribute("data-open") === "closed") {
        let height = 0;
        let liParent = el.parentElement;
        liParent
          .querySelectorAll(":scope > .js-nav-subitems > .js-nav-subitem")
          .forEach((li) => {
            height += li.getBoundingClientRect().height;
          });
        liParent.querySelector<HTMLElement>(
          ".js-nav-subitems"
        ).style.height = `${height}px`;
        liParent.querySelector<HTMLElement>(".js-nav-subitems").style.overflow =
          "visible";
        el.setAttribute("data-open", "opened");
      } else {
        let liParent = el.parentElement.parentElement;
        liParent.querySelector<HTMLElement>(
          ".nav__subitems"
        ).style.height = `0px`;
        liParent.querySelector<HTMLElement>(".js-nav-subitems").style.overflow =
          "hidden";
        el.setAttribute("data-open", "closed");
      }
    });
  });
};

export default menu;
