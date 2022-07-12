const loader = document.getElementById("loader");
const items = document.getElementById("items");
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", (e) => {
  loader.classList.toggle("loader_active");
  let currency = JSON.parse(xhr.responseText);
  let entries = Object.entries(currency.response.Valute);
  for (let elem of entries) {
    let item = document.createElement("div");
    item.classList.toggle("item");
    item.innerHTML = `<div class="item__code">
    ${elem[1].CharCode}
  </div>
  <div class="item__value">
    ${elem[1].Value}
  </div>
  <div class="item__currency">
    руб.
  </div>`;
    items.appendChild(item);
  }
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
