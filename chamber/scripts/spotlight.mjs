const url = "./data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  return data.members;
}

function getSpotlights(members) {
  // Filter Gold & Silver
  const filtered = members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  // Shuffle
  const shuffled = filtered.sort(() => 0.5 - Math.random());

  // Pick 2–3
  return shuffled.slice(0, Math.floor(Math.random() * 2) + 2);
}

function displaySpotlights(spotlights) {
  const container = document.getElementById("spotlight-container");
  container.innerHTML = "";

  spotlights.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.logo}" alt="${member.name}" width="100">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Membership:</strong> ${member.membership}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

async function initSpotlights() {
  const members = await getMembers();
  const spotlights = getSpotlights(members);
  displaySpotlights(spotlights);
}

initSpotlights();