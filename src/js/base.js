export const elements = {
  //hamburgher menu elements
  wrapperMenu: document.querySelector(".section--hero__header-wrapper_menu"),
  linksContainer: document.querySelector(
    ".section--hero__header__nav--links-container-ul"
  ),
  overlay: document.querySelector(".section--hero__header__overlay"),

  //year
  currentYear: document.querySelector(".current--year"),

  //navigation top link
  topLink: document.querySelector(".top-link"),
  scrollLinks: document.querySelectorAll(".scroll-link"),
  navbar: document.getElementById("nav"),

  //cart items
  cart: document.querySelector("#cart"),
  cartInfo: document.querySelector("#cart-info"),
  cartItems: document.querySelectorAll("[id=addToCart]"),
  cartHolder: document.querySelector(".section--hero__header__cart"),
  cartTotalContainer: document.querySelector(
    ".section--hero__header__cart-content_total"
  ),

  //login items
  logIn: document.querySelector(".signIn"),
  register: document.querySelector(".register"),
  logInForm: document.querySelector(".section--hero__form--login-form"),
  registerForm: document.querySelector(".section--hero__form--register-form"),
  form: document.querySelector(".section--hero__login-page__form"),
  //register section
  overlayLogIn: document.querySelector('[data-text="Log In"]'),
  overlayElement: document.querySelector(".section--hero__login-page_overlay"),
};
