const element = document.getElementsByClassName("reveal").item(0);

window.addEventListener("scroll", function () {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  if (elementTop < viewportHeight) {
    element.classList.add("reveal_active");
  }
});
