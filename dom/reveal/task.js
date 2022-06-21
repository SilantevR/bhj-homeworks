const element0 = document.getElementsByClassName("reveal").item(0);
const element1 = document.getElementsByClassName("reveal").item(1);

window.addEventListener("scroll", function () {
  const viewportHeight = window.innerHeight;
  const elementTop0 = element0.getBoundingClientRect().top;
  const elementTop1 = element1.getBoundingClientRect().top;

  if (elementTop0 + element0.clientHeight < 0 || elementTop0 > viewportHeight) {
    element0.classList.remove("reveal_active");
  } else if (elementTop0 < viewportHeight) {
    element0.classList.add("reveal_active");
  }

  if (elementTop1 + element1.clientHeight < 0 || elementTop1 > viewportHeight) {
    element1.classList.remove("reveal_active");
  } else if (elementTop1 < viewportHeight) {
    element1.classList.add("reveal_active");
  }
});
