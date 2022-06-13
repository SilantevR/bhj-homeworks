const btn = Array.from(document.getElementsByClassName("dropdown__value"));
let list = [];
let item = [];
for (let i in btn) {
  list.push(btn[i].closest("div.dropdown").querySelector("ul.dropdown__list"));
  item.push(
    Array.from(
      btn[i].closest("div.dropdown").querySelectorAll("a.dropdown__link")
    )
  );
  for (let elem of item[i]) {
    elem.onclick = function () {
      list[i].className = "dropdown__list";
      btn[i].textContent = elem.textContent;
      return false;
    };
  }
  btn[i].addEventListener("click", function () {
    if (list[i].className.includes("dropdown__list_active")) {
      list[i].className = "dropdown__list";
    } else {
      list[i].className += " dropdown__list_active";
    }
  });
}
