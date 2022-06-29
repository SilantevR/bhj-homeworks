const a = document.body.querySelectorAll("a.has-tooltip");
let tooltip = 0;
a.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.getAttribute("title") === tooltip.textContent) {
      document.querySelector(".tooltip").classList.toggle("tooltip_active");
      e.preventDefault();
      return;
    } else if (document.querySelector(".tooltip")) {
      document.querySelector(".tooltip").remove();
    }
    tooltip = document.createElement("div");
    tooltip.textContent = item.getAttribute("title");
    tooltip.setAttribute("class", "tooltip tooltip_active");
    item.getBoundingClientRect().top;
    tooltip.setAttribute(
      "style",
      `left: ${item.getBoundingClientRect().left}px; top: ${
        item.getBoundingClientRect().top + item.offsetHeight
      }px`
    );
    item.insertAdjacentElement("afterEnd", tooltip);
    e.preventDefault();
  });
});
