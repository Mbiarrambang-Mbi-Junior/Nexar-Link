document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from local storage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleButton.innerHTML = '<i class="uil uil-moon"></i>';
    } else {
        themeToggleButton.innerHTML = '<i class="uil uil-sun"></i>';
    }

    // Toggle Search Bar
    searchToggle.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }
    });

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Theme toggle functionality
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Save the new theme preference to local storage
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = '<i class="uil uil-moon"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.innerHTML = '<i class="uil uil-sun"></i>';
        }
    });

    /* ----- TYPING EFFECT ----- */
    var typingEffect = new Typed(".typed-text", {
        strings: ["an Embedded Engineer", " an IOT", "an Automation engineer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });

    /* ----- SCROLL REVEAL ANIMATION ----- */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    // Target the hero section and its child elements
    sr.reveal('.hero-section .intro-card', { delay: 200 });
    sr.reveal('.hero-section .hero-title', { delay: 300 });
    sr.reveal('.hero-section .hero-description', { delay: 400 });
    sr.reveal('.hero-section .hero-actions', { delay: 500 });
    sr.reveal('.hero-section .social-links', { delay: 600 });
    sr.reveal('.hero-section .hero-image-container', { delay: 600 });

    // Other section reveals
    sr.reveal('#about', { interval: 200 });
    sr.reveal('.skills-box', { interval: 200 });
    sr.reveal('#projects', { interval: 200 });
    sr.reveal('#contact', { interval: 200 });
});