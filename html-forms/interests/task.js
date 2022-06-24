const interests = Array.from(document.querySelectorAll(".interest__check"));
interests.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      !item.closest("li.interest").querySelector(".interest__check").checked
    ) {
      item
        .closest("li.interest")
        .querySelectorAll(".interest__check")
        .forEach((elem) => {
          elem.checked = false;
        });
    } else if (
      item.closest("li.interest").querySelector(".interest__check").checked
    ) {
      item
        .closest("li.interest")
        .querySelectorAll(".interest__check")
        .forEach((elem) => {
          elem.checked = true;
        });
    }
  });
});
