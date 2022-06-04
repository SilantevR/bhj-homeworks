const links = document.getElementsByClassName("menu__link");
for (let item of links) {
  item.onclick = function () {
    item.closest("li.menu__item");
    let i = item.closest("li.menu__item");
    if (i.querySelector("ul.menu_active")) {
      i.querySelector("ul.menu_active").className = "menu menu_sub";
      return false;
    } else if (i.querySelector("ul.menu_sub")) {
      if (i.closest("ul.menu").querySelector("ul.menu_active")) {
        i.closest("ul.menu").querySelector("ul.menu_active").className =
          "menu menu_sub";
        i.querySelector("ul.menu_sub").className += " menu_active";
      } else {
        i.querySelector("ul.menu_sub").className += " menu_active";
      }
      return false;
    }
  };
}
