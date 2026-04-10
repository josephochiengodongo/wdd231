// URL to your local JSON file
const dataUrl = 'data/places.json';

// 1. Asynchronous Function with Try/Catch (Requirement)
async function getPlaces() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // 2. Use Array Method (Requirement)
        displayPlaces(data);
        
    } catch (error) {
        console.error('There was an error fetching the data:', error);
        document.getElementById('places-container').innerHTML = `<p>Error loading data.</p>`;
    }
}

// 3. Dynamic Content Generation using Template Literals (Requirement)
function displayPlaces(places) {
    const container = document.querySelector('#places-container');
    container.innerHTML = ""; // Clear existing content

    places.forEach(place => {
        const card = document.createElement('section');
        card.classList.add('place-card');

        // Note: loading="lazy" (Requirement)
        card.innerHTML = `
            <img src="${place.image_url}" alt="${place.name}" loading="lazy">
            <div class="card-details">
                <h3>${place.name}</h3>
                <p><strong>Location:</strong> ${place.location}</p>
                <p><strong>Contact:</strong> ${place.contact}</p>
                <button class="view-details">Learn More</button>
            </div>
        `;
        
        // 4. Event Listener for Modal (Requirement)
        card.querySelector('.view-details').addEventListener('click', () => {
            showModal(place);
        });

        container.appendChild(card);
    });
}

// 5. Modal Interaction (Requirement)
function showModal(place) {
    // Create modal elements dynamically or select existing one
    const modal = document.createElement('dialog');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${place.name}</h2>
            <p>${place.description}</p>
            <p>Email: ${place.email}</p>
            <button id="closeModal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.showModal();

    modal.querySelector('#closeModal').addEventListener('click', () => {
        modal.close();
        modal.remove();
    });
}

// 6. Local Storage Example (Requirement)
function trackVisit() {
    const lastVisit = localStorage.getItem('last-visit');
    const now = Date.now();
    localStorage.setItem('last-visit', now);
    
    if (lastVisit) {
        console.log(`Welcome back! Last visit: ${new Date(parseInt(lastVisit)).toLocaleDateString()}`);
    }
}

// Initialize
trackVisit();
getPlaces();









































import React from 'react';
import { places } from './places.mjs'; // Path to your data file

const PlacesGallery = () => {
  return (
    <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
      {places.map((place, index) => (
        <div key={index} className="place-card" style={cardStyle}>
          {/* Lazy Loading the Image */}
          <img 
            src={place.image_url} 
            alt={place.name} 
            loading="lazy" 
            style={imageStyle} 
          />
          
          <div style={{ padding: '15px' }}>
            <h3>{place.name}</h3>
            <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Address:</strong> {place.address}</p>
            <p><strong>Contact:</strong> {place.contact}</p>
            <a href={`mailto:${place.email}`}>{place.email}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Styles
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const imageStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  display: 'block'
};

export default PlacesGallery;