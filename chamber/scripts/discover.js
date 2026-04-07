
const discoverCards = document.getElementById("discoverCards");

async function fetchDiscover() {
  const response = await fetch("data/companies.json");
  const data = await response.json();

  data.forEach(company => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${company.name}</h3>
      <p>${company.location}</p>
    `;
    discoverCards.appendChild(card);
  });
}

fetchDiscover();

/* localStorage visit tracking */
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (lastVisit) {
  const diff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  document.getElementById("visitDiscover").textContent =
    `Last visit was ${diff} day(s) ago`;
} else {
  document.getElementById("visitDiscover").textContent =
    "Welcome! This is your first visit.";
}

localStorage.setItem("lastVisit", now);

