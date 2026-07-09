// Image Rotation
const hero = document.getElementById('hero');
const images = [
    'url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b)',
    'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09)',
    'url(https://images.unsplash.com/photo-1488521787171-136585149313)'
];
let i = 0;

function changeBg() {
    hero.style.backgroundImage = images[i];
    i = (i + 1) % images.length;
}
setInterval(changeBg, 7000);
changeBg();

// Modal Controls
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.onclick = () => mobileMenu.style.width = "100%";
closeBtn.onclick = () => mobileMenu.style.width = "0";

///// ufirst misson and vision on the index page
function openTab(evt, tabName) {
    // Hide all contents
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Remove active class from buttons
    const btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }

    // Show current content and add active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}


//// for the scroll section 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progressBar');
let progress = 0;

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    progress = 0; // Reset progress
}

// Auto-progress logic
setInterval(() => {
    progress += 0.5; // Controls speed
    progressBar.style.width = progress + "%";
    
    if (progress >= 100) {
        moveSlide(1);
        progress = 0;
    }
}, 50);

// Hover interaction to stop/start
const container = document.querySelector('.carousel-container');
container.addEventListener('mouseenter', () => progress = progress); // Pause logic

//// for the popular cause
function toggleAccordion(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden');
}
/// addtional icons
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    
    // Toggle hidden state
    content.classList.toggle('hidden');
    
    // Rotate icon
    if (!content.classList.contains('hidden')) {
        icon.style.transform = "rotate(180deg)";
    } else {
        icon.style.transform = "rotate(0deg)";
    }
}
document.querySelector('button.uppercase').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show Loading
    document.getElementById('loadingOverlay').classList.remove('hidden');
    
    // Wait 6 seconds
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
        document.getElementById('donationModal').classList.remove('hidden');
    }, 6000);
});

function closeModal() {
    document.getElementById('donationModal').classList.add('hidden');
}


/// application modal
// Listen for form submission
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default page refresh
    
    // Display the success modal
    const modal = document.getElementById('volunteerModal');
    modal.classList.remove('hidden');
});

// Close the modal and reset the form
function closeVolunteerModal() {
    const modal = document.getElementById('volunteerModal');
    modal.classList.add('hidden');
    
    // Clear the inputs for the next user
    document.getElementById('volunteerForm').reset();
}