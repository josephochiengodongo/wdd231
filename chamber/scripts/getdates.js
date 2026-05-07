const currentYear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `&copy;${today.getFullYear()} 🌳Joseph Odongo🌳 Kenya`;

lastModified.textContent = document.lastModified;