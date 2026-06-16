// scripts/discovere.js
import attractions from '../data/places.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards");

    if (cardsContainer) {
        attractions.forEach(place => {
            // Create Card Element
            const card = document.createElement("div");
            card.className = "card";
            
            // Assign specific grid-area identifier dynamically based on ID
            card.style.gridArea = place.id;

            // Assemble semantic markup
            card.innerHTML = `
                <h2>${place.name}</h2>
                <figure>
                    <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
                </figure>
                <address>${place.address}</address>
                <p>${place.description}</p>
                <button type="button">Learn More</button>
            `;

            cardsContainer.appendChild(card);
        });
    }
});