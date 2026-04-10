// URL to your local JSON file (ensure this path is correct relative to your HTML)
const jsonUrl = 'data/places.json';

// Select DOM Elements
const placesContainer = document.querySelector('#places-container');
const modal = document.querySelector('#place-details');
const modalBody = document.querySelector('#modal-body');
const closeModalBtn = document.querySelector('#close-modal');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initPage();
});

async function initPage() {
    updateFooter();
    handleVisitCounter();
    await fetchAndRenderPlaces();
}

// 1. Data Fetching with try...catch (Requirement)
async function fetchAndRenderPlaces() {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Could not fetch destinations');
        
        const places = await response.json();
        
        // 2. Array Method: Use forEach or map to process data (Requirement)
        renderCards(places);
        
    } catch (error) {
        console.error('Fetch Error:', error);
        placesContainer.innerHTML = `<p class="error">Error loading data: ${error.message}</p>`;
    }
}

// 3. Dynamic Content Generation using Template Literals (Requirement)
function renderCards(places) {
    placesContainer.innerHTML = ''; // Clear the "Loading" message

    places.forEach(place => {
        const card = document.createElement('section');
        card.className = 'place-card';

        // Displaying 4+ distinct properties: name, location, image, description
        card.innerHTML = `
            <img src="${place.image_url}" alt="${place.name}" loading="lazy">
            <div class="card-content">
                <h3>${place.name}</h3>
                <p><strong>Location:</strong> ${place.location}</p>
                <p>${place.description.substring(0, 60)}...</p>
                <button class="details-btn">View Details</button>
            </div>
        `;

        // 4. Event Listener for Modal (Requirement)
        card.querySelector('.details-btn').addEventListener('click', () => {
            openDetailsModal(place);
        });

        placesContainer.appendChild(card);
    });
}

// 5. Modal Functionality (Requirement)
function openDetailsModal(place) {
    modalBody.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.image_url}" alt="${place.name}" class="modal-img">
        <p><strong>Address:</strong> ${place.address || place.location}</p>
        <p><strong>Contact:</strong> ${place.contact || 'N/A'}</p>
        <p><strong>Email:</strong> ${place.email || 'N/A'}</p>
        <p><strong>Description:</strong> ${place.description}</p>
        ${place.url ? `<p><a href="${place.url}" target="_blank">Visit Official Site</a></p>` : ''}
    `;
    modal.showModal(); // Opens the <dialog> element
}

// Close Modal Event
closeModalBtn.addEventListener('click', () => {
    modal.close();
});

// 6. Local Storage Usage (Requirement)
function handleVisitCounter() {
    let visitCount = Number(window.localStorage.getItem('visit-count')) || 0;
    visitCount++;
    window.localStorage.setItem('visit-count', visitCount);
    
    // Optional: Log to console for your video demo
    console.log(`Total site visits tracked in LocalStorage: ${visitCount}`);
}

// Helper to update standard footer info
function updateFooter() {
    const year = document.querySelector('#currentyear');
    const modified = document.querySelector('#lastModified');
    
    if (year) year.textContent = new Date().getFullYear();
    if (modified) modified.textContent = document.lastModified;
}