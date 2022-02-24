const intersection = () => {
  const elementsTransition = document.querySelectorAll("[data-transition]");
  const elementsWords = document.querySelectorAll(".js-wordwrap");

  const animate = (el) => {
    el.classList.add("show");

    if (el.getAttribute("data-transition-delay")) {
      el.style.transitionDelay =
        el.getAttribute("data-transition-delay") + "ms";
    }

    if (el.classList.contains("show")) {
      const children = el.querySelectorAll("[data-transition]");
      console.log(children);

      if (children) {
        children.forEach((element) => {
          element.classList.add("show");
          if (element.getAttribute("data-transition-delay")) {
            element.style.transitionDelay =
              element.getAttribute("data-transition-delay") + "ms";
          }
        });
      }
    }
  };

  const myObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!(entry.boundingClientRect.y > 0)) {
          animate(entry.target);
        }

        // return if the element is not intersecting on initial load
        if (!entry.isIntersecting) {
          return;
        }

        // call animation function
        animate(entry.target);
        // disable observer for that element if you want animation to happen only once
        observer.unobserve(entry.target);
      });
    },
    {
      // trigger intersection when top of the element is 100px inside of the screen
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elementsWords.forEach((el) => {
    myObserver.observe(el);
  });
  elementsTransition.forEach((el) => {
    myObserver.observe(el);
  });
};

export default intersection;
