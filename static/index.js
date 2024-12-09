document.addEventListener('DOMContentLoaded', function () {
    // JS for Slides
    const slides = document.querySelectorAll('.slide');
    const nextSlideButton = document.querySelector('.next-slide');
    const prevSlideButton = document.querySelector('.prev-slide');

    if (slides.length > 0 && nextSlideButton && prevSlideButton) {
        let currentSlide = 0;

        // Next slide button click handler
        nextSlideButton.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        });

        // Previous slide button click handler
        prevSlideButton.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        });
    }

    // JS for Testimony Form
    const testimonySubmit = document.getElementById("testimonySubmit");

    if (testimonySubmit) {
        testimonySubmit.addEventListener('click', handleTestimonyAcceptClick);
    }

    function handleTestimonyAcceptClick() {
        const today = new Date().toLocaleDateString();
        const name = document.getElementById('testimonyName').value.trim();
        const desc = document.getElementById('testimonyInput').value.trim();
        const testimonyUrl = document.getElementById('testimonyImage').value;
        const alt = testimonyUrl === "" ? "No image provided." : "An image of WiCyS Club Activities!";

        if (!(name && desc)) {
            alert("Error: You must fill in at least your name and message!");
        } else {
            const processUrl = "/testimonials/addTestimony";

            fetch(processUrl, {
                method: "POST",
                body: JSON.stringify({ url: testimonyUrl, desc, name, date: today, alt }),
                headers: { "Content-Type": "application/json" }
            })
            .then(res => res.json())
            .then(data => {
                if (data.message === "Testimony saved successfully!") {
                    const testimonyTemplate = Handlebars.templates.singleTestimony;
                    const newTestimonyHTML = testimonyTemplate({ url: testimonyUrl, desc, name, alt });
                    const testimoniesSection = document.getElementById("testimonies-flex");
                    testimoniesSection.insertAdjacentHTML("beforeend", newTestimonyHTML);
                } else {
                    alert("Error: " + data.message);
                }
            })
            .catch(err => {
                alert("An error occurred saving the testimony.");
                console.error("Client-side error:", err);
            });
        }
    }
});

// JS for Testimony Modals
// Debugging: Ensure the script is running
console.log("Script is running");

// Modal element references (Ensure these exist on the page before interacting with them)
var modal = document.getElementById('read-more-modal');
var modalBackdrop = document.getElementById('modal-backdrop');
var modalCloseButton = document.getElementById('modal-close');

// Debugging: Check if modal elements are found
if (modal && modalBackdrop && modalCloseButton) {
    console.log("Modal:", modal);
    console.log("Modal Backdrop:", modalBackdrop);
    console.log("Modal Close Button:", modalCloseButton);

    // Fetch testimony data from the server
    fetch('/testimonyData.json')
        .then(response => response.json())
        .then(testimonyData => {
            console.log("Testimony Data fetched:", testimonyData);

            // Function to show the modal
            function showModal(event) {
                var button = event.target;
                console.log("Button clicked:", button);

                // Retrieve the index of the clicked button
                var index = button.getAttribute('data-index');
                var testimony = testimonyData[index]; // Use the index to get the correct testimony data

                // Debugging: Log data for modal
                console.log("Modal data:", testimony);

                // Update modal content
                modal.querySelector('.modal-header h3').textContent = testimony.name;
                modal.querySelector('.testimony-desc-full').textContent = testimony.desc;
                var img = modal.querySelector('.testimony-img-container img');
                img.src = testimony.url;
                img.alt = testimony.alt;

                // Show the modal
                modal.classList.remove('hidden');
                modalBackdrop.classList.remove('hidden');
                console.log("Modal displayed.");
            }

            // Function to hide the modal
            function hideModal() {
                modal.classList.add('hidden');
                modalBackdrop.classList.add('hidden');
                console.log("Modal hidden.");
            }

            // Attach event listeners to "Read More" buttons if they exist
            var readMoreButtons = document.querySelectorAll('.readMore');
            console.log("Found Read More Buttons:", readMoreButtons);

            // Safeguard: Check if readMoreButtons exist and attach listeners
            if (readMoreButtons.length === 0) {
                console.warn("No Read More buttons found. Check your HTML structure and class names.");
            } else {
                readMoreButtons.forEach(function (button, index) {
                    // Store the index on the button element to pass to the modal function
                    button.setAttribute('data-index', index);
                    button.addEventListener('click', showModal);
                    console.log("Event listener attached to button:", button);
                });
            }

            // Attach event listener to close button
            modalCloseButton.addEventListener('click', hideModal);
            console.log("Event listener attached to modal close button.");

            // Ensure clicking on the backdrop also closes the modal
            modalBackdrop.addEventListener('click', hideModal);
        })
        .catch(error => {
            console.error("Error fetching testimony data:", error);
        });

} else {
    console.error("Modal or related elements not found. Please ensure they exist in the HTML structure.");
}

// Safeguard for Contact Form Elements
var nameVal = document.getElementById("contactName");
var email = document.getElementById("contactEmail");
var phone = document.getElementById("contactPhone");
var message = document.getElementById("contactInput");
var submitButton = document.getElementById("contactSubmit");

// Safeguard: Ensure elements exist before attaching event listeners
if (nameVal && email && phone && message && submitButton) {
    // Function to clear input fields
    function clearInput() {
        nameVal.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
    }

    // Function to handle form submission
    function submitContact() {
        console.log("here");

        // Check if all fields are filled
        if (nameVal.value == '' || email.value == '' || phone.value == '' || message.value == '') {
            alert('All fields must be completed');
        } else {
            alert('Thanks for reaching out!');
            clearInput(); // Clear input fields after submission
        }
    }

    // Attach event listener to submit button
    submitButton.addEventListener("click", submitContact);
} else {
    console.error("Contact form elements not found. Ensure the correct IDs are applied.");
}

// Safeguard for Navbar Hamburger Menu Interaction
// Ensure the menu icon exists before adding event listener
var menuIcon = document.querySelector('.menu-icon');
var navbarMenu = document.querySelector('.navbar ul');

if (menuIcon && navbarMenu) {
    menuIcon.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
} else {
    console.error("Navbar menu or menu icon not found. Ensure the correct class names are applied.");
}

