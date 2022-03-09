let nav = document.getElementById("show-nav");
let menu = document.querySelector("ul");
let triangle = document.querySelector(".triangle");
let isShowed = false;
nav.addEventListener("click", toggleNav);
window.onload = function () {
  if (screen.width < 600) {
    document.getElementById("egg").src =
      "./assets/img/mobile/image-transform.jpg";
    document.getElementById("standout").src =
      "./assets/img/mobile/image-stand-out.jpg";
    document.getElementById("design").src =
      "./assets/img/mobile/image-graphic-design.jpg";
    document.getElementById("photography").src =
      "./assets/img/mobile/image-photography.jpg";
    document.getElementById("milk").src =
      "./assets/img/mobile/image-gallery-milkbottles.jpg";
    document.getElementById("orange").src =
      "./assets/img/mobile/image-gallery-orange.jpg";
    document.getElementById("cone").src =
      "./assets/img/mobile/image-gallery-cone.jpg";
    document.getElementById("sugarcubes").src =
      "./assets/img/mobile/image-gallery-sugar-cubes.jpg";
  }
};

function toggleNav() {
  if (isShowed) {
    menu.style.display = "none";
    triangle.style.display = "none";
  } else {
    menu.style.display = "flex";
    triangle.style.display = "block";
  }
  isShowed = !isShowed;
}
