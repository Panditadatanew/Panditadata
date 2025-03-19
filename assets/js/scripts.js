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
