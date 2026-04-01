// Contact Form – Name, Email, Message + Reset button.
// Show “Form submitted successfully” after submit.

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    successMessage.style.display = 'block';
    form.reset();
});