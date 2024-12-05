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


function handleTestimonyAcceptClick() {
    var name = document.getElementById('testimonyName').value.trim()
    var desc = document.getElementById('testimonyInput').value.trim()
    var testimonyUrl = document.getElementById('testimonyImage').value
    var date = null
    var alt = "An image of WiCyS Club Activities!"
  
    if(!(name && desc)) {
        alert("Error: You must fill in at least your name and message!")
    } else {
        alert("name: " + name + " and desc: " + desc + " and testimonyURL: " + testimonyUrl)
        var processUrl = "/testimonials/addTestimony"
        fetch(processUrl, {
            method: "POST",
            body: JSON.stringify({
                url: testimonyUrl,
                desc: desc,
                name: name,
                date: date,
                alt: alt
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(res) {
            // if successful, render the new testimony
            if (res.status === 200) {
                var testimonyTemplate = Handlebars.templates.singleTestimony
                var newTestimonyHTML = testimonyTemplate({
                    url: testimonyUrl,
                    desc: desc,
                    name: name,
                    alt: alt
                })
                var testimoniesSection = document.getElementById("testimonies-flex")
                testimoniesSection.insertAdjacentHTML("beforeend", newTestimonyHTML)
            } else {
                alert("An error occurred saving the testimony.")
              }
        }).catch(function(err) {
            alert("An error occurred saving the testimony.")
        })
    }
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

submitButton.addEventListener('click', submitContact);


