const wordSplit = () => {
  const wordWrap = document.querySelectorAll(".js-wordwrap");

  wordWrap.forEach((el) => {
    function wrap_words(el, prepend, append) {
      let retVal = "";

      function processHTMLElement(node) {
        if (node.innerHTML === "") {
          return node;
        } else {
          return wrap_words(node, prepend, append);
        }
      }

      function processText(node) {
        const trimmed = node.nodeValue.trim();
        const words = trimmed.split(" ");

        if (trimmed === "") {
          return node.nodeValue;
        }

        return words
          .map((word) => {
            return `${prepend}${word}${append}`;
          })
          .join(" ");
      }

      [...el.childNodes].forEach((node) => {
        if (node instanceof HTMLElement) {
          retVal += ` ${processHTMLElement(node).outerHTML} `;
        } else {
          retVal += processText(node);
        }
      });

      el.innerHTML = retVal;

      return el;
    }

    wrap_words(el, '<span class="word-wrap-word"><span>', "</span></span>");

    let count = 0;
    let initialDelay = 0;

    const wordWrapItem = el.querySelectorAll(".word-wrap-word") as any;
    wordWrapItem.forEach((wrapWord) => {
      count++;
      wrapWord.querySelector("span").style.animationDelay = ` ${
        initialDelay + count * 0.08 + "s"
      } `;
    });
  });
};

export default wordSplit;
