import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#cards");

places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    cardsContainer.appendChild(card);
});

displayVisitMessage();

function displayVisitMessage() {
    const message = document.querySelector("#visit-message");

    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        message.innerHTML +=
            "<p>Welcome! Let us know if you have any questions.</p>";
    } else {

        const currentVisit = Date.now();

        const difference =
            currentVisit - Number(lastVisit);

        const days =
            Math.floor(difference / 86400000);

        if (days < 1) {
            message.innerHTML +=
                "<p>Back so soon! Awesome!</p>";
        } else if (days === 1) {
            message.innerHTML +=
                "<p>You last visited 1 day ago.</p>";
        } else {
            message.innerHTML +=
                `<p>You last visited ${days} days ago.</p>`;
        }
    }

    localStorage.setItem("lastVisit", Date.now());
}