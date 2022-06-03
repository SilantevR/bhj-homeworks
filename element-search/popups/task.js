const popup = document.getElementById(`modal_main`);
const popupSuccess = document.getElementById(`modal_success`);
popup.className += " modal_active";
const elementsClose = document.getElementsByClassName("modal__close");
const btn = document.getElementsByClassName("btn_success").item(0);
for (let item of Array.from(elementsClose))
  item.onclick = () => {
    if (item.className.includes("show-success")) {
      popup.className = "modal";
      popupSuccess.className += " modal_active";
      return;
    }
    popup.className = "modal";
    popupSuccess.className = "modal";
  };
btn.onclick = () => {
  popupSuccess.className = "modal";
};
