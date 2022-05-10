import "D:/LearnDev/Practice-js/Small-Projects-master/NorthPack/src/sass/main.scss";
import { elements } from "./base";
import { cart } from "./cart.js";
import loginItems from "./login.js";

elements.cartInfo.style.visibility = "visible";

elements.wrapperMenu.addEventListener("click", function () {
  elements.wrapperMenu.classList.toggle("open");
  elements.overlay.classList.toggle("open");
  elements.linksContainer.classList.toggle("open");
});

// current year for footer
const year = new Date().getFullYear();
elements.currentYear.innerHTML = year;

// ********** scroll to top ************

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    elements.topLink.classList.add("show-link");
  } else {
    elements.topLink.classList.remove("show-link");
  }
});

// ********** close links ************ and get height auto dinamic
elements.scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //prevent default click
    e.preventDefault();
    //navigate to the specific supports
    const id = e.currentTarget.getAttribute("href").slice(1);
    const elementItem = document.getElementById(id);
    /* Calculate the hights
    Height of nav*/

    const navHeight = elements.navbar.getBoundingClientRect().height;
    let position = elementItem.offsetTop - navHeight;

    //Height of links
    const containerHeight =
      elements.linksContainer.getBoundingClientRect().height;

    if (navHeight) {
      position = position + containerHeight;
    }

    if (window.innerWidth < 800) {
      //Height of links for responsive positioning
      position = position + (navHeight - containerHeight);
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    elements.linksContainer.classList.remove("open");
    elements.wrapperMenu.classList.remove("open");
    elements.overlay.classList.remove("open");
  });
});

//cart opening
cart.cartOpening();
cart.cartAddItems();
cart.clearCart();
window.addEventListener("DOMContentLoaded", cart.setupItems());
window.addEventListener("DOMContentLoaded", cart.showTotals());

//login-register form
loginItems();
