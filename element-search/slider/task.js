const arrows = document.getElementsByClassName("slider__arrow");
const dots = Array.from(document.getElementsByClassName("slider__dot"));
const slides = Array.from(document.getElementsByClassName("slider__item"));

let numOfSlide = 0;
dots[numOfSlide].className += " slider__dot_active";
const deactivate = function () {
  let active = document.getElementsByClassName("slider__item_active").item(0);
  if (active) {
    active.className = "slider__item";
  }
  let dot = document.getElementsByClassName("slider__dot_active").item(0);
  if (dot) {
    dot.className = "slider__dot";
  }
};

arrows.item(1).onclick = function () {
  deactivate();

  numOfSlide++;
  if (numOfSlide === slides.length) {
    numOfSlide = 0;
  }
  slides[numOfSlide].className += " slider__item_active";
  dots[numOfSlide].className += " slider__dot_active";
};

arrows.item(0).onclick = function () {
  deactivate();

  numOfSlide--;
  if (numOfSlide < 0) {
    numOfSlide = slides.length - 1;
  }
  slides[numOfSlide].className += " slider__item_active";
  dots[numOfSlide].className += " slider__dot_active";
};

for (let item in dots) {
  dots[item].onclick = function () {
    deactivate();
    numOfSlide = item;
    slides[numOfSlide].className += " slider__item_active";
    dots[numOfSlide].className += " slider__dot_active";
  };
}
