document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".open-btn");
    const closeButtons = document.querySelectorAll(".close-btn");

    // Handle Opening Modals
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetModalId = button.getAttribute("data-target");
            const modal = document.getElementById(targetModalId);
            if (modal) {
                modal.showModal(); // Opens modal natively with backdrop & focus trap
            }
        });
    });

    // Handle Closing Modals
    closeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const modal = event.target.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });
});