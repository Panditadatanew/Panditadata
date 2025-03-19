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

// Toggle Solutions for Earth and Mars
function toggleSolutions(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

// Initialize Map
async function initMap() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.error("Leaflet library (L) is not loaded. Please ensure the Leaflet script is included before scripts.js.");
        return;
    }

    // Initialize the map
    const map = L.map('map').setView([37.7749, -122.4194], 5); // San Francisco coordinates as example

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fetch and add markers
    try {
        const response = await fetch('/data/mapData.json'); // Ensure path matches your repo
        if (!response.ok) {
            throw new Error(`Failed to fetch mapData.json: ${response.status}`);
        }
        const mapData = await response.json();

        mapData.forEach(point => {
            L.marker(point.coordinates).addTo(map)
                .bindPopup(point.name)
                .openPopup();
        });
    } catch (error) {
        console.error("Error loading map data:", error);
    }
}

// Run initMap after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});
