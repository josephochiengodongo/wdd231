// scripts/discover.js
import { attractions } from '../data/discover.mjs';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger Menu Navigation Toggling
    const menuButton = document.querySelector(".toggle-menu");
    const navigation = document.querySelector("nav[aria-label='Main Navigation']");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("show");
            menuButton.classList.toggle("open");
        });
    }

    // 2. LocalStorage Visitor Message Logic
    const messageContainer = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisitDate");
    const currentVisit = Date.now();

    // Create message element
    const messageElement = document.createElement("p");

    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const msPerDay = 24 * 60 * 60 * 1000;
        const timeDifference = currentVisit - parseInt(lastVisit);
        const daysPassed = Math.floor(timeDifference / msPerDay);

        if (timeDifference < msPerDay) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            messageElement.textContent = "You last visited 1 day ago.";
        } else {
            messageElement.textContent = `You last visited ${daysPassed} days ago.`;
        }
    }
    
    if (messageContainer) {
        messageContainer.appendChild(messageElement);
    }
    // Update storage with current timestamp
    localStorage.setItem("lastVisitDate", currentVisit);

    // 3. Render the 8 Dynamic Attraction Cards
    const cardsContainer = document.getElementById("cards");
    if (cardsContainer) {
        attractions.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("attraction-card");
            // Automatically applies an area name matching the CSS rule template (card1, card2, etc.)
            card.style.gridArea = `card${index + 1}`; 

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button class="learn-more-btn">Learn More</button>
            `;
            cardsContainer.appendChild(card);
        });
    }
});