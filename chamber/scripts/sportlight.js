const membersURL = "data/members.json";

async function getSpotlights() {
    const response = await fetch(membersURL);
    const data = await response.json();
    const members = data.members;

    // 1. Filter for Gold (3) and Silver (2) levels
    const eligible = members.filter(m => m.membershipLevel >= 2);

    // 2. Shuffle and pick 3
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // 3. Display
    const container = document.querySelector('#spotlight-container');
    selected.forEach(m => {
        let card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <h3>${m.name}</h3>
            <img src="${m.image}" alt="${m.name} logo">
            <p>${m.address}</p>
            <p>${m.phone}</p>
            <a href="${m.website}">Visit Site</a>
            <p>Level: ${m.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(card);
    });
}

fetchWeather();
getSpotlights();