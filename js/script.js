//get hamburger menu and add event listener
const mobileMenu = document.querySelector("#hamburger-icon");
const mobileLinks = document.querySelector(".mobile-nav-links");

mobileMenu.addEventListener("click", () => {
  mobileLinks.classList.toggle("activeMobile");
});
