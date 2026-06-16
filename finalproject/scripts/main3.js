const membersContainer = document.querySelector("#places");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Failed to fetch JSON data");
        }

        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members) {

    if (!membersContainer) return;

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img 
                src="${member.logo}" 
                alt="${member.name} Logo"
                class="member-logo"
            >

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.website}" target="_blank">
                    ${member.website}
                </a>
            </p>

            <p><strong>Email:</strong> ${member.email}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
}

// Grid View
if (gridBtn && listBtn && membersContainer) {

    gridBtn.addEventListener("click", () => {

        membersContainer.classList.add("grid");
        membersContainer.classList.remove("list");

    });

    listBtn.addEventListener("click", () => {

        membersContainer.classList.add("list");
        membersContainer.classList.remove("grid");

    });
}

// Load data
getMembers();

// Timestamp Fix
const timestampInput = document.getElementById("timestamp");

if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

// Modal functions
function openModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "none";
    }
}

// Mobile Menu Toggle
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");

if (toggleMenu && nav) {

    toggleMenu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });
}