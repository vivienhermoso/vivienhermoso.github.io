document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('.navbar-nav a, .hero-buttons a, .navbar-brand').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing animation
    var options = {
        strings: ['computer scientist.', 'software engineer.', 'mobile application developer.', 'web developer.'],
        typeSpeed: 25,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        startDelay: 500,
    };

    var typed = new Typed('#typed-text', options);

    // Array of background images
    var bgImages = ['img/01.png', 'img/02.png', 'img/03.png'];
    var currentIndex = 0;
    var hero = document.getElementById('hero');

    // Preload images
    function preloadImages(images) {
        images.forEach(function(image) {
            var img = new Image();
            img.src = image;
        });
    }

    preloadImages(bgImages);

    function changeBackground() {
        hero.style.backgroundImage = 'url("' + bgImages[currentIndex] + '")';
        currentIndex = (currentIndex + 1) % bgImages.length;
    }

    // Initial background change
    changeBackground();

    // Change background every 2 seconds
    setInterval(changeBackground, 1500);

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
    document.querySelectorAll('.navbar-nav a, .hero-buttons a').forEach(anchor => {
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

    // Portfolio dropdown hover
    var portfolioDropdown = document.querySelector('.navbar-nav .dropdown');

    portfolioDropdown.addEventListener('mouseover', function() {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    portfolioDropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
    });

    // Handle click events inside dropdown
    portfolioDropdown.querySelectorAll('.dropdown-menu a').forEach(item => {
        item.addEventListener('click', function() {
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle close dropdown on outside click
    document.addEventListener('click', function(e) {
        if (!portfolioDropdown.contains(e.target)) {
            portfolioDropdown.classList.remove('show');
            portfolioDropdown.querySelector('.dropdown-menu').classList.remove('show');
        }
    });

    // Toggle dropdown with keyboard focus
    portfolioDropdown.addEventListener('focusin', function() {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    portfolioDropdown.addEventListener('focusout', function() {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
    });

    // Toggle dropdown with keyboard navigation
    portfolioDropdown.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.querySelector('.dropdown-menu a:first-child').focus();
        } else if (e.key === 'Escape') {
            this.classList.remove('show');
            this.querySelector('.dropdown-menu').classList.remove('show');
        }
    });

    //notable projects view more
    const portfolioItems = document.querySelectorAll('.portfolio-item .card');
    portfolioItems.forEach(card => {
        card.addEventListener('click', function() {
            const detailsSection = this.querySelector('.card-details');
            const icon = this.querySelector('.toggle-icon i');
            const viewDetailsText = this.querySelector('.card-text-viewdetails');
    
            detailsSection.classList.toggle('show');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');

            if (detailsSection.classList.contains('show')) {
                viewDetailsText.innerHTML = 'Hide Details <i class="fas fa-chevron-up"></i>';
            } else {
                viewDetailsText.innerHTML = 'View Details <i class="fas fa-chevron-down"></i>';
            }
    
            this.classList.toggle('expanded');
        });
    });
    //student organizations view more
    const orgItems = document.querySelectorAll('.organization-item .card');
    orgItems.forEach(card => {
        card.addEventListener('click', function() {
            const detailsSection = this.querySelector('.card-details');
            const icon = this.querySelector('.toggle-icon i');
            const viewDetailsText = this.querySelector('.card-text-viewdetails');

            detailsSection.classList.toggle('show');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
            
            if (detailsSection.classList.contains('show')) {
                viewDetailsText.innerHTML = 'Hide Details <i class="fas fa-chevron-up"></i>';
            } else {
                viewDetailsText.innerHTML = 'View Details <i class="fas fa-chevron-down"></i>';
            }

            this.classList.toggle('expanded');
        });
    });

    // image click
    var profilePicture = document.querySelector('.profile-picture');
    var hiddenImage = document.querySelector('.hidden-image');
    var clickCount = 0;
    var texts = ["Bazinga", "😂"];
    var textElement = document.getElementById('click-text');

    profilePicture.addEventListener('click', function() {
        clickCount++;

        // Check if click count is a multiple of 10
        if (clickCount % 10 === 0) {
            var randomIndex = Math.floor(Math.random() * texts.length);
            var randomText = texts[randomIndex];

            // Display the text with animation
            textElement.textContent = randomText;
            textElement.style.display = 'block';
            textElement.style.animation = 'none'; // Reset animation
            textElement.offsetHeight; // Trigger reflow
            textElement.style.animation = ''; // Re-apply animation

            // Remove text after animation ends (1 second)
            setTimeout(function() {
                textElement.style.display = 'none';
            }, 1000);
        }

        // Check if click count is a multiple of 100
        if (clickCount % 5 === 0 && clickCount % 10 !== 0) {
            hiddenImage.classList.add('show-hidden-image');

            // Hide the hidden image after 3 seconds
            setTimeout(function() {
                hiddenImage.classList.remove('show-hidden-image');
            }, 1000);
        }

        // Scale animation
        profilePicture.style.transform = 'scale(1.1)';
        setTimeout(function() {
            profilePicture.style.transform = 'scale(1)';
        }, 100);
    });

    // Show loading screen initially
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('active');

    // Hide loading screen when content is fully loaded
    window.addEventListener('load', function() {
        loadingScreen.classList.remove('active');
    });

    //fade in scroll
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        fadeInElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check to see if any elements are already in view
    handleScrollAnimation();

    //certificate
    const certificationItems = document.querySelectorAll('.certification-item');
    certificationItems.forEach(item => {
        item.addEventListener('click', () => {
            const expandedSection = item.querySelector('.cert-expanded');
            const icon = item.querySelector('.toggle-icon i');

            expandedSection.classList.toggle('show');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');

            item.classList.toggle('active');
        });
    });

    const viewMoreButton = document.getElementById('view-more-certifications');

    viewMoreButton.addEventListener('click', function () {
        // Toggle visibility of each certification item after the second one
        certificationItems.forEach((item, index) => {
            if (index >= 2) { // Adjust the index as needed
                item.classList.toggle('hidden');
            }
        });

        // Toggle text on the button
        if (viewMoreButton.textContent === 'View More') {
            viewMoreButton.textContent = 'View Less';
        } else {
            viewMoreButton.textContent = 'View More';
        }
    });
    
});
