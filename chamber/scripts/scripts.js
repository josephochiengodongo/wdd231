import { places } from "../Data/places.mjs";
console.log(places)=[]
import { places } from './data/places.mjs';

const container = document.querySelector('.container');

places.forEach((place, index) => {

  const card = document.createElement('section');
  card.classList.add('card');
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});
