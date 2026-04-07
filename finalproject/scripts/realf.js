import { places } from './places.js';

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

const container = document.getElementById('places-container');

if (container) {
  places.forEach(place => {
    const card = document.createElement('article');
    card.classList.add('place-card');

    card.innerHTML = `
      <h2>${place.name}</h2>

      ${place.image_url ? `<img src="${place.image_url}" alt="${place.name}" loading="lazy">` : ''}

      ${place.location ? `<p><strong>Location:</strong> ${place.location}</p>` : ''}
      ${place.address ? `<p><strong>Address:</strong> ${place.address}</p>` : ''}
      ${place.contact ? `<p><strong>Contact:</strong> ${place.contact}</p>` : ''}
      ${place.Email ? `<p><strong>Email:</strong> ${place.Email}</p>` : ''}
      ${place.county ? `<p><strong>County:</strong> ${place.county}</p>` : ''}
      ${place.type ? `<p><strong>Type:</strong> ${place.type}</p>` : ''}
      ${place.url ? `<a href="${place.url}" target="_blank">Visit Site</a>` : ''}
    `;

    container.appendChild(card);
  });
}

const visitMessage = document.getElementById('visit-message');

if (visitMessage) {
  let visits = localStorage.getItem('visits') || 0;
  visits++;
  localStorage.setItem('visits', visits);

  visitMessage.textContent = `You have visited this site ${visits} times.`;
}