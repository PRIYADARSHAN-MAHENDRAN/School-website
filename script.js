// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navigation').offsetHeight, // Adjust this value as needed
                behavior: 'smooth'
            });
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
        slides.style.transform = translateX(${- index * 100}%);
    }

setInterval(slide, 7000); // Change slide every 7 seconds
});