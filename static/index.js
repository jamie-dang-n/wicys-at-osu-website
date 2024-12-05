// JS for Slides
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
var testimonySubmit = document.getElementById("testimonySubmit");
if (testimonySubmit) {
    testimonySubmit.addEventListener('click', handleTestimonyAcceptClick);
    console.log('Testimony submit button found and event listener added.');
} else {
    console.error('Testimony submit button not found.');
}

function handleTestimonyAcceptClick() {
    var name = document.getElementById('testimonyName').value.trim();
    var desc = document.getElementById('testimonyInput').value.trim();
    var testimonyUrl = document.getElementById('testimonyImage').value;
    var date = null;
    var alt = "An image of WiCyS Club Activities!";

    if (!(name && desc)) {
        alert("Error: You must fill in at least your name and message!");
    } else {
        alert("name: " + name + " and desc: " + desc + " and testimonyURL: " + testimonyUrl);
        var processUrl = "/testimonials/addTestimony";
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
        }).then(function (res) {
            if (res.status === 200) {
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
                alert("An error occurred saving the testimony.");
            }
        }).catch(function (err) {
            alert("An error occurred saving the testimony.");
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