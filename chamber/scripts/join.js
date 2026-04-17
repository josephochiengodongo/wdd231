// join.js

// 1. Set the hidden timestamp
const timestampElement = document.getElementById('timestamp');
if (timestampElement) {
    timestampElement.value = new Date().toISOString();
}

// 2. Modal Logic (No inline onclick)
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.close();
    });
});

