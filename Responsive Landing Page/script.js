
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "#001f4d";
  } else {
    navbar.style.background = "#000a2d";
  }
});
