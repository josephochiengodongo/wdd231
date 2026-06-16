import { fetchDestinations } from './fetch.js';
import { renderDestinations, setupModal, loadSavedPreference } from './app-features.js';

const DATA_URL = './data.json';
const gridElement = document.querySelector('#destinations-grid');

async function init() {
    loadSavedPreference();
    setupModal();
    
    const data = await fetchDestinations(DATA_URL);
    if (data) {
        renderDestinations(data, gridElement);
    } else {
        gridElement.innerHTML = `<p class="error">Unable to dynamically load your destinations package at this time.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", init);