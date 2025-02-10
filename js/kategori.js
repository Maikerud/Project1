document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
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