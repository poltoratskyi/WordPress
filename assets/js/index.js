window.addEventListener("DOMContentLoaded", () => {
  const waiting = document.getElementById("to-waiting");
  const headerActionLink = document.querySelector(".header__action-link");

  /* Smooth scroll block*/

  const smoothScroll = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  headerActionLink.addEventListener("click", (e) => {
    e.preventDefault();

    smoothScroll(waiting);
  });

  /* Open modal window of registration form */

  const buttons = document.querySelectorAll(".button");
  const overlay = document.querySelector(".overlay");

  buttons.forEach((i) => {
    i.addEventListener("click", () => {
      overlay.classList.add("overlay_active");

      document.body.style.overflow = "hidden";
    });
  });

  /* Close modal window of registration form */

  const modalClose = document.querySelector(".modal__close");

  modalClose.addEventListener("click", () => {
    overlay.classList.remove("overlay_active");

    document.body.style.overflow = "auto";
  });

  /* Validator css  */

  const validator = document.querySelector(".validator-link");

  validator.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
