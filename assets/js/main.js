// script navbar
const navbar = document.querySelector(".container");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("background", window.scrollY > 0);
});
// script navbar

// script hamburger menu
const navSlide = document.querySelector(".nav-list");
document.querySelector("#menu").onclick = () => {
  navSlide.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navSlide.contains(e.target)) {
    navSlide.classList.remove("active");
  }
});
// script hamburger menu
