// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function slide() {
        index++;
        if (index === images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slide, 5000); // Change slide every 5 seconds
});
