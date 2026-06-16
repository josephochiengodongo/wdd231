const menuButton = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});