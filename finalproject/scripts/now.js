const menuButton = document.querySelector(".toggle-menu");
const navigation = document.querySelector("header nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});
