const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Keeps the layout logic
    mobileMenu.classList.toggle('active'); // Triggers the CSS animation
});
