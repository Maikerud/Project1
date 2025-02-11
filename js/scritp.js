document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const navLinksItems = navLinks.querySelectorAll('a');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    // Close the burger menu and overlay when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show');
            overlay.classList.remove('show');
        }
    });

    // Close the burger menu and overlay when clicking on a menu item
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            overlay.classList.remove('show');
        });
    });
});