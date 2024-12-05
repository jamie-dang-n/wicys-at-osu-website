// JS for Slides
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Place your JavaScript code here
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.querySelector('.next-slide').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('.prev-slide').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });
});

// JS for Testimonies Form
function insertNewTestimony(name, desc, url, alt) {
    var testimony = Handlebars.templates.singleTestimony({
        url:url,
        name:name,
        desc:desc,
        alt:alt
    })

    var testimoniesSection = document.getElementById("testimonies-flex")
    testimoniesSection.insertAdjacentHTML("beforeend", testimony)
}

