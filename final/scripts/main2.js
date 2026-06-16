const membersContainer = document.querySelector("#places");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {
    const response = await fetch("data/places.json");
    const data = await response.json();
    displayMembers(data.places);
}

function displayMembers(places) {
    members.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("place-card");

        card.innerHTML = `
            <h3>${place.name}</h3>
            <img src="${place.logo}" alt="${place.name} Logo" class="member-logo">
            <p><strong>Phone:</strong> ${place.phone}</p>
            <p><strong>Website:</strong> <a href="${place.website}" target="_blank" rel="noopener">${member.website}</a></p>
            <p><strong>Email:</strong> ${place.email}</p>
            <p><strong>Address:</strong> ${place.address}</p>
            <p><strong>Membership:</strong> ${place.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
}

// Grid and List View Toggles (Only add listeners if buttons exist)
if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
        membersContainer.classList.add("grid");
        membersContainer.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        membersContainer.classList.add("list");
        membersContainer.classList.remove("grid");
    });
}

getMembers();

// --- THE FIX ---
// Only set the timestamp if the element actually exists on this page
const timestampInput = document.getElementById("timestamp");
if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

// Modal functions
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// Mobile Menu Toggle
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");

if (toggleMenu && nav) {
    toggleMenu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}