const arrows = document.getElementsByClassName("slider__arrow");
const dots = Array.from(document.getElementsByClassName("slider__dot"));
const slides = Array.from(document.getElementsByClassName("slider__item"));
let numOfSlide = 0;
dots[numOfSlide].className += " slider__dot_active";

let deactivate = function (number) {
  let active = slides[number];
  if (active) {
    active.className = "slider__item";
  }
  let dot = dots[number];
  if (dot) {
    dot.className = "slider__dot";
  }
};

let activate = function (number) {
  if (number > slides.length - 1) {
    numOfSlide = 0;
    slides[numOfSlide].className += " slider__item_active";
    dots[numOfSlide].className += " slider__dot_active";
  }
  if (number < 0) {
    numOfSlide = slides.length - 1;
    slides[numOfSlide].className += " slider__item_active";
    dots[numOfSlide].className += " slider__dot_active";
  }
  slides[number].className += " slider__item_active";
  dots[number].className += " slider__dot_active";
};

arrows.item(1).onclick = function () {
  deactivate(numOfSlide);
  numOfSlide++;
  activate(numOfSlide);
};

arrows.item(0).onclick = function () {
  deactivate(numOfSlide);
  numOfSlide--;
  activate(numOfSlide);
};

for (let item in dots) {
  dots[item].onclick = function () {
    deactivate(numOfSlide);
    numOfSlide = item;
    activate(numOfSlide);
  };
}

/*const arrows = document.getElementsByClassName("slider__arrow");
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
}*/
