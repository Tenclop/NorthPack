import "D:/LearnDev/Practice-js/Small-Projects-master/NorthPack/src/sass/main.scss";
import { elements } from "./base.js";
import { cart } from "./cart.js";
import allProducts from "./allProducts.js";
import newArrivals from "./newArrivals.js";
import loginItems from "./login.js";

// const about = document.querySelector('[data-text="About"]');
// const contact = document.querySelector('[data-text="Contact"]');

// about.addEventListener("click", () => {
//   window.location.href = "index.html#About";
// });
// contact.addEventListener("click", () => {
//   window.location.href = "index.html#Contact";
// });

//New arrivals img added
const route = () => {
  const center = document.querySelector(".center");
  center.innerHTML = newArrivals;
};

window.addEventListener("load", route());

//all products
const allProductsRoute = () => {
  const all = document.querySelector(".section--allProducts__container");
  all.innerHTML = allProducts.render();
};

window.addEventListener("load", allProductsRoute());

/* Swiper js */
const swiper = new Swiper(".swiper", {
  autoHeight: true, //enable auto height
  calculateHeight: true,
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  onTransitionEnd: function (swiper) {
    swiper.params.speed = 700;
  },
  onTouchStart: function (swiper) {
    swiper.params.speed = 700;
  },
  onTransitionStart: function (swiper) {
    swiper.params.speed = 400;
  },

  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

//cart opening
cart.cartOpening();
cart.cartAddItems();

cart.clearCart();
window.addEventListener("DOMContentLoaded", cart.setupItems());
window.addEventListener("DOMContentLoaded", cart.showTotals());

//login-register form
loginItems();
