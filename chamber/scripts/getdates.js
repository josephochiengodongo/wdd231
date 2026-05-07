const currentYear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `&copy;${today.getFullYear()} 🌳Joseph Ochieng Odongo🌳 Kenya`;

lastModified.textContent = document.lastModified;