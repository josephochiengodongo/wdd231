import { getPlaces } from './fetch.js';
import { saveVisit, getVisit } from './storage.js';

const placesContainer = document.querySelector('#places');
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

const modal = document.querySelector('#placeModal');
const modalTitle = document.querySelector('#modalTitle');
const modalType = document.querySelector('#modalType');
const modalAddress = document.querySelector('#modalAddress');
const modalLink = document.querySelector('#modalLink');
const closeModal = document.querySelector('#closeModal');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

async function displayPlaces() {

  const places = await getPlaces();

  places.forEach(place => {

    const card = document.createElement('section');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${place.image_url || 'https://via.placeholder.com/400x200'}"
           alt="${place.name}"
           loading="lazy">

      <h3>${place.name}</h3>

      <p><strong>Type:</strong> ${place.type}</p>

      <p><strong>Location:</strong> ${place.address}</p>

      <button>View Details</button>
    `;

    const button = card.querySelector('button');

    button.addEventListener('click', () => {

      modalTitle.textContent = place.name;
      modalType.textContent = `Type: ${place.type}`;
      modalAddress.textContent = `Address: ${place.address}`;

      modalLink.href = place.url || '#';

      modal.showModal();

      saveVisit(place.name);
    });

    placesContainer.appendChild(card);
  });

  const lastVisit = getVisit();

  if (lastVisit) {
    console.log(`Last viewed destination: ${lastVisit}`);
  }
}

closeModal.addEventListener('click', () => {
  modal.close();
});

displayPlaces();