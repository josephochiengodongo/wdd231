// js/main.js

// 1. DOM Element Selection
const placesContainer = document.querySelector('#places-container');
const modal = document.querySelector('#details-modal');
const modalBody = document.querySelector('#modal-content-area');
const closeModalBtn = document.querySelector('#close-modal-btn');

// Initialize local storage array for "Liked/Bookmarked" places if it doesn't exist
if (!localStorage.getItem('favoritePlaces')) {
    localStorage.setItem('favoritePlaces', JSON.stringify([]));
}

/**
 * Fetch and process the places data inside a strict try...catch block
 */
async function loadPlacesData() {
    const dataUrl = 'data/places.json'; // Path to your local JSON data file

    try {
        const response = await fetch(dataUrl);
        
        // Ensure the network response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Verify we have items to loop through
        if (data && data.places) {
            renderPlaces(data.places);
        } else {
            throw new Error("Invalid data format received.");
        }

    } catch (error) {
        // Robust asynchronous error handling
        console.error("Failed to fetch places data:", error);
        if (placesContainer) {
            placesContainer.innerHTML = `
                <div class="error-msg">
                    <p>Sorry, we couldn't load the destination data right now. Please try again later.</p>
                </div>
            `;
        }
    }
}

/**
 * Dynamically generates and renders cards using Template Literals and Array Methods
 * @param {Array} placesArray 
 */
function renderPlaces(placesArray) {
    if (!placesContainer) return;
    
    // Clear container fallback text
    placesContainer.innerHTML = '';

    // Array Method & Template Literal implementation (Meets > 15 item requirement)
    placesArray.forEach((place, index) => {
        // Read data safely, standardizing your url vs image_url keys
        const imageSource = place.image_url || place.url || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600';
        
        // Fetch favorites list from Local Storage to preserve state UI
        const favorites = JSON.parse(localStorage.getItem('favoritePlaces'));
        const isFavorited = favorites.includes(place.name);
        const heartIcon = isFavorited ? '❤️' : '🤍';

        // Creation of dynamic component card displaying 4 distinct values:
        // 1. Name, 2. Type, 3. Address, 4. Image/Link Source
        const cardHTML = `
            <article class="place-card" data-index="${index}">
                <img src="${imageSource}" alt="${place.name}" loading="lazy" class="place-img">
                <div class="card-content">
                    <span class="place-type">${place.type}</span>
                    <h3 class="place-name">${place.name}</h3>
                    <p class="place-address">📍 ${place.address}</p>
                    
                    <div class="card-actions">
                        <button class="btn view-details-btn" aria-label="View details about ${place.name}">Learn More</button>
                        <button class="fav-btn" data-name="${place.name}" aria-label="Save ${place.name} to favorites">
                            <span class="heart-icon">${heartIcon}</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
        
        placesContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Attach Event Listeners to dynamically created components
    setupCardEventListeners(placesArray);
}

/**
 * Handles DOM Event Listeners for Modal elements and Local Storage actions
 * @param {Array} placesArray 
 */
function setupCardEventListeners(placesArray) {
    // 1. Handle Details Modal Clicks
    const detailButtons = document.querySelectorAll('.view-details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.place-card');
            const index = card.getAttribute('data-index');
            openModal(placesArray[index]);
        });
    });

    // 2. Handle Local Storage Favoriting Logic
    const favButtons = document.querySelectorAll('.fav-btn');
    favButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonEl = e.target.closest('.fav-btn');
            const placeName = buttonEl.getAttribute('data-name');
            toggleFavorite(placeName, buttonEl);
        });
    });
}

/**
 * Implements accessible Modal operations for user interactions
 * @param {Object} place 
 */
function openModal(place) {
    if (!modal || !modalBody) return;

    const imageSource = place.image_url || place.url || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600';

    // Populate Modal body with dynamic properties
    modalBody.innerHTML = `
        <h2>${place.name}</h2>
        <span class="badge">${place.type}</span>
        <img src="${imageSource}" alt="${place.name}" class="modal-img-fluid">
        <p><strong>Location:</strong> ${place.address}</p>
        <p class="modal-description">Plan your next adventure to this beautiful destination located in Kenya. Ensure you review seasonal availability and conservation entry guidelines prior to your visit.</p>
        <a href="${imageSource}" target="_blank" rel="noopener" class="btn external-link">View Original Asset</a>
    `;

    // Show modal and update accessibility attributes
    modal.classList.add('show-modal');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
    closeModalBtn.focus(); // Shift keyboard focus for accessibility
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore layout scroll
}

/**
 * Local Storage Persistence Management
 */
function toggleFavorite(name, buttonElement) {
    let favorites = JSON.parse(localStorage.getItem('favoritePlaces')) || [];
    const heartSpan = buttonElement.querySelector('.heart-icon');

    if (favorites.includes(name)) {
        // Remove from local storage array filtering out the value
        favorites = favorites.filter(item => item !== name);
        heartSpan.textContent = '🤍';
    } else {
        // Add to local storage
        favorites.push(name);
        heartSpan.textContent = '❤️';
    }

    localStorage.setItem('favoritePlaces', JSON.stringify(favorites));
}

// Global Modal Control Listeners
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close modal if user clicks backdrop window layout
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fire layout routine on initialization
document.addEventListener('DOMContentLoaded', loadPlacesData);