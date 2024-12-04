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
var allTestimonies = []

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
    var name = document.getElementById('testimonyName').value.trim()
    var desc = document.getElementById('testimonyInput').value.trim()
    var url = document.getElementById('testimonyImage').value

    console.log("== name: ", name)

    // URL can be null
    if(!name || !desc) {
        alert("Error: You must at least fill in the name and message field!")
    } else {
        allPosts.push({
            desc: desc,
            url: url,
            name: name
        })
    }

}



