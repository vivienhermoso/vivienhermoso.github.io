document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('.hero-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing animation
    var options = {
        strings: ['computer science student.', 'mobile application developer.', 'web developer.'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        startDelay: 500,
    };

    var typed = new Typed('#typed-text', options);

    // Array of background images
    var bgImages = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg'];
    var currentIndex = 0;
    var hero = document.getElementById('hero');

    function changeBackground() {
        hero.style.backgroundImage = 'url("' + bgImages[currentIndex] + '")';
        currentIndex = (currentIndex + 1) % bgImages.length;
    }

    // Initial background change
    changeBackground();

    // Change background every 2 seconds
    setInterval(changeBackground, 2000);

    // Form submission
    var form = document.getElementById('contact-form');
    var successMessage = document.getElementById('form-success');
    var sendAnotherBtn = document.getElementById('send-another');
    var submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                response.json().then(data => {
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        alert(data.errors.map(error => error.message).join(', '));
                    } else {
                        alert('Oops! There was a problem submitting your form.');
                    }
                });
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form.');
        });
    });

    // Enable/disable submit button based on form validity
    form.addEventListener('input', function() {
        submitBtn.disabled = !form.checkValidity();
    });

    // Send another message button
    sendAnotherBtn.addEventListener('click', function() {
        form.style.display = 'block';
        successMessage.style.display = 'none';
        form.reset(); // Reset the form fields
        submitBtn.disabled = true; // Disable submit button after reset
    });

    var navbar = document.querySelector('.navbar');
    var heroButtons = document.querySelector('.hero-buttons');

    // Smooth scroll and button animation
    document.querySelectorAll('.hero-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /// Navbar appearance on scroll
    window.addEventListener('scroll', function() {
        var scrollDistance = window.scrollY;
        var heroHeight = document.getElementById('hero').offsetHeight;

        // Toggle fixed-top class on navbar
        if (scrollDistance >= heroHeight) {
            navbar.classList.add('fixed-top');
            heroButtons.classList.add('transform-to-navbar');
        } else {
            navbar.classList.remove('fixed-top');
            heroButtons.classList.remove('transform-to-navbar');
        }
    });

});
