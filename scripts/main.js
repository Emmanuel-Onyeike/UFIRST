const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Keeps the layout logic
    mobileMenu.classList.toggle('active'); // Triggers the CSS animation
});
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for persistent preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save current theme state to memory
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
