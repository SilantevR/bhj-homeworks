const cookie = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let date = new Date();
cookie.onclick = function () {
  if (cookie.width > 200) {
    cookie.width = 200;
  } else {
    cookie.width = 300;
  }
  count.textContent++;
  speed.textContent = 1 / ((new Date() - date) / 1000);
  date = new Date();
};
