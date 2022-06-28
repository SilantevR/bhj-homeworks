const cart = document.querySelector("div.cart");
const products = document.querySelectorAll("div.product");

products.forEach((item) => {
  let controls = item.querySelectorAll(".product__quantity-control");
  let quantity = item.querySelector(".product__quantity-value");

  controls.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (
        elem.classList.contains("product__quantity-control_dec") &&
        Number(quantity.textContent) > 0
      ) {
        quantity.textContent--;
      } else if (elem.classList.contains("product__quantity-control_inc")) {
        quantity.textContent++;
      }
    });
  });

  let addBtn = item.querySelector(".product__add");
  addBtn.addEventListener("click", () => {
    let inCart = document.createElement("div");
    inCart.setAttribute("class", "cart__product");
    inCart.setAttribute("data-id", `${item.getAttribute("data-id")}`);
    inCart.innerHTML = `
    <img class="cart__product-image" src="${item
      .querySelector("img")
      .getAttribute("src")}">
    <div class="cart__product-count">${quantity.textContent}</div>`;

    let products = cart.querySelector(".cart__products");
    for (let elem of products.querySelectorAll(".cart__product")) {
      if (elem.getAttribute("data-id") === inCart.getAttribute("data-id")) {
        elem.querySelector(".cart__product-count").textContent =
          Number(elem.querySelector(".cart__product-count").textContent) +
          Number(inCart.querySelector(".cart__product-count").textContent);
        return;
      }
    }
    cart.querySelector(".cart__products").append(inCart);
  });
});
