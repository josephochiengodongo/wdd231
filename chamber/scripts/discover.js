import { places } from "../data/places.mjs";

const container = document.querySelector("#cards");

// Loop through the places array
places.forEach((place) => {

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");

  // Title
  const title = document.createElement("h2");
  title.textContent = place.name;

  // Image
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = place.image;
  img.alt = place.name;
  img.loading = "lazy";

  figure.appendChild(img);

  // Address
  const address = document.createElement("address");
  address.textContent = place.address;

  // Description
  const description = document.createElement("p");
  description.textContent = place.description;

  // Button
  const button = document.createElement("button");
  button.textContent = "Learn More";

  // Optional click action
  button.addEventListener("click", () => {
    alert(`More about ${place.name}`);
  });

  // Assemble card
  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(button);

  // Add card to page
  container.appendChild(card);
});