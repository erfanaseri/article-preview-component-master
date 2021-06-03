import "core-js/stable";
import "regenerator-runtime/runtime";

const socialMedia = document.querySelector(".social-media");
const activeSocialMedia = document.querySelector(".social-media-active");
const button = document.querySelector(".profile-btn");
const buttonActive = document.querySelector(".profile-btn--active");

button.addEventListener("click", function (e) {
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
});
