const popup = document.getElementById("subscribe-modal");
const times = popup.querySelector(".modal__close");
if (!document.cookie) {
  popup.classList.add("modal_active");
}
times.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "close=true";
});
