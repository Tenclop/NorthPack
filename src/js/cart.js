import { elements } from "./base.js";
import prod from "./data.js";
import { v4 as uuidv4 } from "uuid";
export const cart = {
  //opens the cart
  cartOpening: () => {
    elements.cartInfo.addEventListener("click", () => {
      elements.cart.classList.toggle("show-cart");
    });
  },

  //add items to the cart

  cartAddItems: () => {
    document.querySelectorAll("[id=addToCart]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const fullPath =
          e.target.parentElement.previousElementSibling.src ||
          e.target.previousElementSibling.src;
        const position = fullPath.indexOf("assets");
        const partialPath = fullPath.slice(position);

        const item = {};

        const id =
          e.target.parentElement.parentElement.getAttribute("data-id") ||
          e.target.parentElement.getAttribute("data-id");

        const name =
          e.target.nextElementSibling.textContent ||
          e.target.parentElement.nextElementSibling.textContent;

        const price =
          e.target.nextElementSibling.nextElementSibling.textContent;

        const finalPrice =
          price.length >= 15
            ? price.slice(10)
            : price.length >= 14
            ? price.slice(9)
            : price.length >= 8 && price.length <= 9
            ? price.slice(3)
            : price.slice(1);

        item.id = uuidv4();
        item.img = `./${partialPath}`;
        item.name = name;
        item.price = finalPrice;

        cart.setBackToDefault(item);

        cart.addToLocalStorage(item);
        // cart.getLocalStorage();

        cart.setupItems();

        // cart.removeFromLocalStorage(item);
        cart.deleteItem(item);

        cart.showTotals();
      });
    });
  },

  //show total sum of items
  showTotals: () => {
    const total = [];
    const items = document.querySelectorAll(
      ".section--hero__header__cart-content_price"
    );

    items.forEach((item) => {
      total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce((total, item) => {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);

    const checkoutBtn = document.querySelector(".btn-checkout");
    if (cart.getLocalStorage().length !== 0) {
      const newCartElements = ` <h5>total &nbsp</h5>
          <h5>$<strong id="cart-total">0</strong></h5>`;
      elements.cartTotalContainer.innerHTML = newCartElements;
      elements.cartTotalContainer.style.fontSize = "calc(1.5rem + 1vw)";
      const cartTotalText = document.getElementById("cart-total");
      cartTotalText.textContent = finalMoney;
      checkoutBtn.setAttribute("href", "http://localhost:3000");
    } else {
      elements.cartTotalContainer.innerHTML = "";
      elements.cartTotalContainer.innerHTML = "Wow, it's so epmty over here 😯";
      elements.cartTotalContainer.style.fontSize = "calc(0.8rem + 0.5vw)";
      checkoutBtn.setAttribute("href", "#");
    }
  },

  setBackToDefault: (items) => {
    const cartHolder = document.querySelector(
      ".section--hero__header__cart show-container"
    );
    const cartItem = document.querySelectorAll(
      ".section--hero__header__cart-content"
    );
    cartItem.forEach((item) => {
      item.remove();
    });
  },

  //delete item via id check
  deleteItem: (item) => {
    const product = document.querySelector(".cart-item"); //list
    const cartHolder = document.querySelector(".section--hero__header__cart");
    document
      .querySelectorAll(".section--hero__header__cart-content_remove")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const element = e.currentTarget.parentElement;

          cartHolder.removeChild(element);
          if (cartHolder.childNodes.length === 17) {
            localStorage.removeItem("list");
          }

          cart.removeFromLocalStorage(item);

          cart.showTotals();
        });
      });
  },

  removeFromLocalStorage: (item) => {
    let products = cart.getLocalStorage();
    //check here local storage name of object
    products = products.filter((prod) => {
      if (prod.item.id !== item.id) {
        return prod;
      }
    });

    localStorage.setItem("list", JSON.stringify(products));
  },

  clearCart: () => {
    const cartHolder = document.querySelector(".section--hero__header__cart");
    // const items = [...document.querySelectorAll(".cart-item")];
    const items = document.getElementsByClassName("cart-item");
    document.querySelector("#clear-cart").addEventListener("click", () => {
      if (items.length > 0) {
        Array.from(items).forEach((item) => {
          cartHolder.removeChild(item);
        });
      }
      // cartHolder.parentNode.removeChild(items);
      cartHolder.classList.remove(".section--hero__header__cart-content");

      localStorage.removeItem("list");
      cart.showTotals();
    });
  },

  addToLocalStorage: (item) => {
    const products = { item };
    let items = cart.getLocalStorage();
    items.push(products);
    localStorage.setItem("list", JSON.stringify(items));
  },

  getLocalStorage: () => {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  },

  setupItems: () => {
    let items = cart.getLocalStorage();

    if (items.length > 0) {
      items.forEach((item) => {
        cart.createListItem(
          item.item.id,
          item.item.img,
          item.item.name,
          item.item.price
        );
      });
    }
    elements.cartHolder.classList.add("show-container");
  },

  createListItem: (id, img, name, price) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("section--hero__header__cart-content", "cart-item");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    cartItem.setAttributeNode(attr);
    cartItem.innerHTML = `<img
              src="${img}"
              class="img-fluid rounded-circle"
              id="item-img"
              alt=""
            />
            <div class="section--hero__header__cart-content_item-text">
              <p
                id="cart-item-title"
                class="section--hero__header__cart-content_title"
              >
                ${name}
              </p>

              <span
                id="cart-item-price"
                class="section--hero__header__cart-content_price"
                >${price}</span
              >
            </div>
            <a
              href="#"
              id="cart-item-remove"
              class="section--hero__header__cart-content_remove"
            >
              <i class="fas fa-trash"></i>
            </a>
          </div>`;

    const deleteBtn = cartItem.querySelector(
      ".section--hero__header__cart-content_remove"
    );
    deleteBtn.addEventListener("click", cart.deleteItem);

    //selecting the cart
    const cartadd = elements.cart;
    const total = document.querySelector(
      ".section--hero__header__cart-content_total"
    );
    cartadd.insertBefore(cartItem, total);
  },
};
