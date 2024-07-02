// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            nav.classList.remove('show');
        });
    });
});
