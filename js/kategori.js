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

    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    function filterKategori(category) {
        const kategoriItems = document.querySelectorAll('.kategori-item');
    
        kategoriItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(',');
            if (category === 'all' || categories.includes(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    window.filterKategori = filterKategori;
});