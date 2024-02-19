document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (email.trim() === '' || phone.trim() === '') {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
            // Here you can add code to send the form data to the server if needed.
            // For now, we'll just log the data to the console.
            console.log('Email:', email);
            console.log('Phone:', phone);
            // Reset the form
            contactForm.reset();
        }
    });
});
