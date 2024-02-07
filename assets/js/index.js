window.addEventListener("DOMContentLoaded", () => {
  /* Check webp block */

  const supportsWebP = () => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  };

  /* header section */

  if (supportsWebP()) {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/webp/main_back-min.webp)";
  } else {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/main_back-min.jpg)";
  }

  /* finish section */

  if (supportsWebP()) {
    document.querySelector(".finish").style.backgroundImage =
      "url(assets/img/webp/second_bg-min.webp)";
  } else {
    document.querySelector(".header").style.backgroundImage =
      "url(assets/img/second_bg-min.jpg)";
  }

  /* Smooth scroll block*/

  const waiting = document.getElementById("to-waiting");
  const headerActionLink = document.querySelector(".header__action-link");

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
