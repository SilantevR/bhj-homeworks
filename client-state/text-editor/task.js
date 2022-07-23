const textArea = document.getElementById("editor");
const btn = document.getElementById("btn");
let value;
textArea.value = localStorage.getItem("textarea");
document.addEventListener("keyup", (e) => {
  e.preventDefault();
  value = textArea.value;
  localStorage.setItem("textarea", value);
});

btn.addEventListener("click", () => {
  value = "";
  textArea.value = "";
  localStorage.setItem("textarea", value);
});
