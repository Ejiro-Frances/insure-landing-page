//get hamburger menu and add event listener
const mobileMenu = document.querySelector("#hamburger-icon");
const mobileLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  mobileLinks.classList.toggle("activeMobile");

  if (mobileLinks.classList.contains("activeMobile")) {
    mobileMenu.src = "./images/icon-close.svg";
  } else {
    mobileMenu.src = "./images/icon-hamburger.svg";
  }
});
