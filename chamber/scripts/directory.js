
const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.logo}" alt="${member.name} Logo" class="member-logo">
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();
// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
    nav.classList.toggle("open");
});




 


