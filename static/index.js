// JS for Slides

const slides = document.querySelectorAll('.slide');
const Handlebars = require('handlebars');
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
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

var testimonySubmit = document.getElementById("testimonySubmit")

testimonySubmit.addEventListener('click', handleTestimonyAcceptClick)

function handleTestimonyAcceptClick() {
    var name = document.getElementById('testimonyName').value.trim()
    var desc = document.getElementById('testimonyInput').value.trim()
    var testimonyUrl = document.getElementById('testimonyImage').value

    // get current date
    var dateObj = new Date();
    var month   = dateObj.getUTCMonth() + 1; // months from 1-12
    var day     = dateObj.getUTCDate();
    var year    = dateObj.getUTCFullYear();

    var date = month + "/" + day + "/" + year;
    console.log("==date: ", date )
    var alt = "An image of WiCyS Club Activities!"
  
    if(!(name && desc && testimonyUrl)) {
        alert("Error: You must fill in all fields! If no image, use cat pic!")
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
            // First check for status 200
            if (res.status === 200) {
                res.json().then((data) => {
                    // Check if the server's response is actually indicating success
                    if (data.message === "Testimony saved successfully!") {
                        // If the testimony was saved successfully
                        console.log("here")
                        var testimonyTemplate = Handlebars.templates.singleTestimony;
                        var newTestimonyHTML = testimonyTemplate({
                            url: testimonyUrl,
                            desc: desc,
                            name: name,
                            alt: alt
                        });
                        var testimoniesSection = document.getElementById("testimonies-flex");
                        testimoniesSection.insertAdjacentHTML("beforeend", newTestimonyHTML);
                    } else {
                        // Handle server-side error response (even if status is 200)
                        alert("An error occurred saving the testimony: " + data.message);
                        console.error("Server error details:", data); // Log the server error message for debugging
                    }
                });
            } else {
                alert("An unexpected error occurred with the status: " + res.status);
                console.error("Unexpected response status:", res.status);
            }
        })
        .catch(function(err) {
            // Handle client-side errors (e.g., network issues)
            alert("An error occurred saving the testimony.");
            console.error("Client-side error:", err); // Log the error object for debugging
        });
     
    }
}

/* CONTACTS FORM */
var contactForm = document.querySelector('.formContainer');
if (contactForm) {
    contactForm.addEventListener('submit', submitContact);
    console.log('Contact form found and event listener added.');
} else {
    console.error('Contact form not found.');
}

function clearInput() {
    document.getElementById("contactName").value = '';
    document.getElementById("contactEmail").value = '';
    document.getElementById("contactPhone").value = '';
    document.getElementById("contactInput").value = '';
}

function submitContact(event) {
    event.preventDefault(); // Prevent the default form submission

    var nameVal = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var phone = document.getElementById("contactPhone").value;
    var message = document.getElementById("contactInput").value;

    if (nameVal === '' || email === '' || phone === '' || message === '') {
        alert('All fields must be completed');
    } else {
        alert('Thanks for reaching out!');
        clearInput(); // Clear the form fields
    }
}