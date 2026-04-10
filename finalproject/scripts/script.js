// script.js
import { places } from './data.js';

const container = document.getElementById('places-container');

function displayPlaces() {
    // Generate the HTML string by mapping through the data
    const htmlMarkup = places.map(place => `
        <article class="place-card">
            <img 
                src="${place.image_url}" 
                alt="${place.name}" 
                loading="lazy" 
                class="place-image"
            >
            <div class="place-content">
                <h2>${place.name}</h2>
                <p><strong>Location:</strong> ${place.location}</p>
                <p><strong>Contact:</strong> ${place.contact}</p>
                <p><strong>Email:</strong> <a href="mailto:${place.email}">${place.email}</a></p>
            </div>
        </article>
    `).join(''); // Join the array into one long string

    // Inject the string into the container
    container.innerHTML = htmlMarkup;
}

// Run the function
displayPlaces();