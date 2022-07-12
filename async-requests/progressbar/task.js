const progress = document.getElementById("progress");
let xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(document.forms[0]);
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(formData);
});
xhr.upload.addEventListener("progress", (e) => {
  let percent = e.loaded / e.total;
  progress.value = `${Number(percent.toFixed(2))}`;
});
