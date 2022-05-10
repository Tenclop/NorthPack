import { elements } from "./base";
import gsap from "gsap";

//login items

const loginItems = () => {
  elements.overlayElement.addEventListener("click", () => {
    closeModal();
  });

  elements.overlayLogIn.addEventListener("click", () => {
    elements.overlayElement.style.display = "inline-block";
    elements.form.style.display = "inline-block";
  });

  elements.register.addEventListener("click", (e) => {
    e.preventDefault();
    elements.logInForm.style.display = "none";
    elements.registerForm.style.display = "inline-block";
  });

  elements.logIn.addEventListener("click", (e) => {
    e.preventDefault();
    elements.registerForm.style.display = "none";
    elements.logInForm.style.display = "inline-block";
  });

  const closeModal = () => {
    if (
      (elements.overlayElement.style.display = "inline-block") &&
      (elements.form.style.display = "inline-block")
    ) {
      elements.overlayElement.style.display = "none";
      elements.form.style.display = "none";
    } else {
      elements.overlayElement.style.display = "inline-block";
      elements.form.style.display = "inline-block";
    }
  };

  //fade in form animation gsap
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
    })
    .set(elements.form, { opacity: 0 })
    .to(elements.form, { opacity: 1 });

  const doFade = () => {
    tl.restart();
  };

  document.querySelector(".register").addEventListener("click", doFade);
  document.querySelector(".fade").addEventListener("click", doFade);
};

export default loginItems;
