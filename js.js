document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.nav-toggle').addEventListener('click', function () {
        const navBar = document.querySelector('.nav-bar');
        navBar.classList.toggle('active');  // Toggles the 'active' class on and off
    });
});