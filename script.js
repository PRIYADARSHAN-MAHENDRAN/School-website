// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Image carousel
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function slide() {
        index++;
        if (index === images.length) {
            index = 0;
        }
        slides.style.transform = translateX(${-index * 100}%);
    }

    setInterval(slide, 5000); // Change slide every 5 seconds
});