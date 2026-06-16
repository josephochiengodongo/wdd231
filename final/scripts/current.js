document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".toggle-menu");
    const mainNav = document.querySelector('nav[aria-label="Main Navigation"]');

    if (menuButton && mainNav) {
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("open");
            mainNav.classList.toggle("open");
            
            // Adjust accessibility state dynamically
            const expanded = menuButton.classList.contains("open");
            menuButton.setAttribute("aria-label", expanded ? "Close Navigation Menu" : "Open Navigation Menu");
        });

        // Fallback cleanup when rotating view dimensions
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                menuButton.classList.remove("open");
                mainNav.classList.remove("open");
            }
        });
    }
});