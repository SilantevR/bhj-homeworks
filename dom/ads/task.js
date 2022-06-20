const rotators = Array.from(document.querySelectorAll(".rotator"));

rotators.forEach((rotator) => {
  rotator
    .querySelectorAll(".rotator__case")
    .forEach((elem) =>
      elem.setAttribute("style", `color: ${elem.dataset.color}`)
    );
});

let change = function () {
  for (let item of rotators) {
    let elems = Array.from(item.querySelectorAll(".rotator__case"));
    for (let i in elems) {
      if (elems[i].classList.contains("rotator__case_active")) {
        elems[i].classList.toggle("rotator__case_active");

        if (i == elems.length - 1) {
          elems[0].classList.toggle("rotator__case_active");
          time = elems[0].dataset.speed;
        } else {
          elems[i].nextElementSibling.classList.toggle("rotator__case_active");
          time = elems[i].nextElementSibling.dataset.speed;
        }
        clearTimeout(timer);
        setTimeout(change, time);
        return;
      }
    }
  }
};
let time = 1000;
let timer = setTimeout(change, time);
