


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


/* CONTACTS FORM */
var nameVal = document.getElementById("contactName");
var email = document.getElementById("contactEmail");
var phone = document.getElementById("contactPhone");
var message = document.getElementById("contactInput");

//taking code from assignment 3/5 for modal and text clearing
function openModal(){
    document.getElementById("contacts-modal").classList.remove("hidden");
    document.getElementById("modal-backdrop").classList.remove("hidden");
}

document.getElementById("contacts-button").onclick = openModal;

function clearInput(){
    nameVal = '';
    email = '';
    phone = '';
    message = '';
}

function contactAlert(){
    if (nameVal.value == '' || email.value == '' || phone.value == '' || message.value == ''){
        alert('All fields must be completed');
    }

    //add this information to a database
}