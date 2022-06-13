const navigators = Array.from(
  document.getElementsByClassName("tab__navigation")
);
const tabsContent = Array.from(
  document.getElementsByClassName("tab__contents")
);
const tabs = [];
const contents = [];
for (let i in navigators) {
  tabs.push(Array.from(navigators[i].querySelectorAll("div.tab")));
  contents.push(
    Array.from(tabsContent[i].querySelectorAll("div.tab__content"))
  );
  for (let j in tabs[i]) {
    tabs[i][j].addEventListener("click", function () {
      navigators[i].querySelector("div.tab_active").className = "tab";
      tabsContent[i].querySelector("div.tab__content_active").className =
        "tab__content";
      tabs[i][j].className += " tab_active";
      contents[i][j].className += " tab__content_active";
    });
  }
}
