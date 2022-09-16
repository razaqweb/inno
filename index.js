const hamburger = document.querySelector(".hamburger");
const menuTop = document.querySelector(".top");
const menuMiddle = document.querySelector(".middle");
const menuBottom = document.querySelector(".bottom");
const sections = document.querySelectorAll("section");
const mobileNav = document.querySelector(".mobile-nav-list");
const headerContainer = document.querySelector("fixedcontainer");
const normalNav = document.querySelector(".nav-list");
const mobileNavLink = document.querySelectorAll(".mobile-nav-link");

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

//smoothScrolling

normalNav.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.getAttribute("href");

  if (
    !e.target.classList.contains("nav-link") ||
    e.target.classList.contains("activities-link")
  )
    return;

  console.log(id);

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

mobileNav.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.getAttribute("href");
  if (
    !e.target.classList.contains("mobile-nav-link") ||
    e.target.classList.contains("mobile-activities-link")
  )
    return;

  console.log(id);
  mobileNav.classList.add("invisible");
  mobileNav.classList.remove("visible");
  sections.forEach((section) => {
    section.classList.remove("menu-active");
  });
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });

  hamburger.classList.toggle("revert");
});
