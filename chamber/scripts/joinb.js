// TIMESTAMP
document.getElementById("timestamp").value = new Date().toISOString();

// MODALS
const links = document.querySelectorAll("[data-modal]");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById(link.dataset.modal);
    modal.style.display = "block";

    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});