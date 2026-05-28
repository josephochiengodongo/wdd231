import places from "./places.js";

const app = document.getElementById("app");

places.forEach(place => {

  // Create card
  const card = document.createElement("div");

  card.className = "card";

  // Insert content
  card.innerHTML = `
  
    <img src="${place.url}" alt="${place.name}">

    <div class="card-content">

      <h2>${place.name}</h2>

      <div class="type">${place.type}</div>

      <div class="address">
        ${place.address}
      </div>

    </div>
  
  `;

  // Add card to page
  app.appendChild(card);

});