import "core-js/stable";
import "regenerator-runtime/runtime";

const socialMedia = document.querySelector(".social-media");
const activeSocialMedia = document.querySelector(".social-media-active");
const button = document.querySelector(".profile-btn");
const buttonActive = document.querySelector(".profile-btn--active");
const popUp = document.querySelector(".pop-up");

button.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (getComputedStyle(socialMedia).display === "grid") {
      socialMedia.style.display = "none";
      activeSocialMedia.style.display = "grid";
    }

    if (getComputedStyle(socialMedia).display === "none") {
      buttonActive.addEventListener("click", function (e) {
        activeSocialMedia.style.display = "none";
        socialMedia.style.display = "grid";
      });
    }
  }

  if (window.matchMedia("(min-width: 1000px)").matches) {
    if (getComputedStyle(popUp).display === "none") {
      popUp.style.display = "block";
      window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 1000px)").matches) {
          popUp.style.display = "none";
        }
      });
    } else popUp.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    if (getComputedStyle(activeSocialMedia).display === "grid") {
      activeSocialMedia.style.display = "none";
      socialMedia.style.display = "grid";
    }
  }
});
