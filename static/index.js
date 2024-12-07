// JS for Slides
const slides = document.querySelectorAll('.slide');
const Handlebars = require('handlebars);')
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



/* CONTACTS FORM */
//taken from assignment 3/5 (<- citation)
var nameVal = document.getElementById("contactName");
var email = document.getElementById("contactEmail");
var phone = document.getElementById("contactPhone");
var message = document.getElementById("contactInput");
var submitButton = document.getElementById("contactSubmit");

function clearInput(){
    nameVal.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
}

function submitContact(){
    if (nameVal.value == ''|| email.value == '' || phone.value == '' || message.value == ''){
        alert('All fields must be completed');
    } else {
        //alert('All fields are completed');
        alert('Thanks for reaching out!');
        clearInput();//clear
    }
}
if (submitButton){
    submitButton.addEventListener('click', submitContact);
}