// Toggle Menu for Mobile
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// Scroll Animation
function handleScrollAnimations() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.75) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);

// Initialize Map
async function initMap() {
    const map = L.map('map').setView([37.7749, -122.4194], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const response = await fetch('data/mapData.json');
    const mapData = await response.json();

    mapData.forEach(point => {
        L.marker(point.coordinates).addTo(map)
            .bindPopup(point.name)
            .openPopup();
    });
}

window.onload = initMap;

