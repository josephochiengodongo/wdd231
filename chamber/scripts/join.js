const links = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const modalId = link.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    modal.style.display = "block";
  });
});

modals.forEach(modal => {
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});