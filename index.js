const hamburger = document.querySelector(".hamburger");
const menuTop = document.querySelector(".top");
const menuMiddle = document.querySelector(".middle");
const menuBottom = document.querySelector(".bottom");
const sections = document.querySelectorAll("section");
const mobileNav = document.querySelector(".mobile-nav-list");
const headerContainer = document.querySelector("fixedcontainer");

//Event Listeners
hamburger.addEventListener("click", (e) => {
  e.preventDefault();

  hamburger.classList.toggle("active");
  hamburger.classList.toggle("revert");
  // mobileNav.classList.toggle("invisible");
  // mobileNav.classList.toggle("visible");

  if (mobileNav.classList.contains("visible")) {
    mobileNav.classList.add("invisible");
    mobileNav.classList.remove("visible");
  } else {
    mobileNav.classList.add("visible");
    mobileNav.classList.remove("invisible");
  }

  sections.forEach((section) => {
    section.classList.toggle("menu-active");
  });
});
