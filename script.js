// Toggle Navbar on Hamburger Click
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close Navbar when a link is clicked (optional)
navLinks.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});