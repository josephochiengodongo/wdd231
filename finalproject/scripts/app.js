import places from "./places.js";

const container = document.getElementById("placesContainer");

places.forEach(place => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${place.url}" alt="${place.name}">

    <div class="card-content">
      <h2>${place.name}</h2>
      <div class="type">${place.type}</div>
      <div class="address">${place.address}</div>
    </div>
  `;

  container.appendChild(card);
});