// JS for Slides
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

// JS for Testimonies Form
var testimonySubmit = document.getElementById("testimonySubmit")

testimonySubmit.addEventListener('click', handleTestimonyAcceptClick)

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

function handleTestimonyAcceptClick() {
    var name = document.getElementById("testimonyName").value
    var desc = document.getElementById("testimonyInput").value
    var url = document.getElementById("testimonyImage").value

    // URL can be null
    if(!(name && desc)) {
        alert("Error: You must at least fill in the name and message field!")
    } else {
        insertNewTestimony(name, desc, url, desc)
    }
}




