const links = document.getElementsByClassName("menu__link");
for (let item of links) {
  item.onclick = function () {
    item.closest("li.menu__item");
    let i = item.closest("li.menu__item");
    if (i.querySelector("ul.menu_sub")) {
      let active = document.getElementsByClassName("menu_active").item(0);
      if (active) {
        active.className = "menu menu_sub";
      }
      i.querySelector("ul.menu_sub").className += " menu_active";
      return false;
    }
  };
}
