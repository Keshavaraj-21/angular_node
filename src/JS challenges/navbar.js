const menu = document.getElementById("menu");
const imgPattern = document.querySelector(".img-bottom-pattern");
const navBar = document.querySelector("nav");
const header = document.querySelector("header");
let isNavbarShowed = false;

menu.addEventListener("click", () => {
  isNavbarShowed = !isNavbarShowed;
  isNavbarShowed ? openMenu() : closeMenu();
});

const openMenu = () => {
  menu.classList.add("active");
  imgPattern.style.opacity = "1";
  navBar.style.display = "block";
  navBar.classList.remove("close");
  imgPattern.classList.remove("close");
  setTimeout(() => {
    imgPattern.style.display = "block";
  }, 500);
};

const closeMenu = () => {
  menu.classList.remove("active");
  navBar.classList.add("close");
  imgPattern.style.display = "none";
  setTimeout(() => {
    navBar.style.display = "none";
  }, 500);
};
