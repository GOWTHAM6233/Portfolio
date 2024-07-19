document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Roles sliding animation
    const roles = ["Front-end Web Developer", "Trader", "React Enthusiast"];
    let roleIndex = 0;
    const roleElement = document.getElementById('role');

    function slideRoles() {
        roleElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }

    slideRoles(); // Initial call

    setInterval(slideRoles, 3000); // Slide every 3 seconds
});



