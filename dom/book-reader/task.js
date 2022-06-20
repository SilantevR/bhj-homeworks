const book = document.querySelector(".book__content");
const controls = document.querySelector(".book__control_font-size");
const controlElements = controls.querySelectorAll(".font-size");
controlElements.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (controls.querySelector(".font-size_active")) {
      controls
        .querySelector(".font-size_active")
        .classList.toggle("font-size_active");
    }
    item.classList.toggle("font-size_active");
    let attr = item.dataset.size;
    if (
      book.classList.contains("book_fs-small") ||
      book.classList.contains("book_fs-big")
    ) {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
    book.classList.add(`book_fs-${attr}`);
    event.preventDefault();
  });
});

const colors = document.querySelector(".book__control_color");
const colorsElements = colors.querySelectorAll(".color");

colorsElements.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (colors.querySelector(".color_active")) {
      colors.querySelector(".color_active").classList.toggle("color_active");
    }
    item.classList.toggle("color_active");
    let attr = item.dataset.textColor;
    if (
      book.classList.contains("book_color-black") ||
      book.classList.contains("book_color-gray") ||
      book.classList.contains("book_color-whitesmoke")
    ) {
      book.classList.remove("book_color-black");
      book.classList.remove("book_color-gray");
      book.classList.remove("book_color-whitesmoke");
    }
    book.classList.add(`book_color-${attr}`);
    event.preventDefault();
  });
});

const backgronds = document.querySelector(".book__control_background");
const backgroundElements = backgronds.querySelectorAll(".color");

backgroundElements.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (backgronds.querySelector(".color_active")) {
      backgronds
        .querySelector(".color_active")
        .classList.toggle("color_active");
    }
    item.classList.toggle("color_active");
    let attr = item.dataset.bgColor;
    if (
      book.classList.contains("book_bg-gray") ||
      book.classList.contains("book_bg-black") ||
      book.classList.contains("book_bg-white")
    ) {
      book.classList.remove("book_bg-gray");
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-white");
    }
    book.classList.add(`book_bg-${attr}`);
    event.preventDefault();
  });
});
