// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide
setInterval(nextSlide, 5000);

// Slider buttons
document.querySelector('.slider-btn.next')?.addEventListener('click', nextSlide);
document.querySelector('.slider-btn.prev')?.addEventListener('click', prevSlide);

// Create slider dots
const dotsContainer = document.querySelector('.slider-dots');
if (dotsContainer) {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.style.cssText = 'width:12px;height:12px;background:rgba(255,255,255,0.5);border-radius:50%;cursor:pointer;';
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle?.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Progress circle animation
function animateProgressCircles() {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const value = circle.querySelector('.progress-value');
        if (value) {
            value.textContent = progress + '%';
        }
    });
}

// Run on page load
window.addEventListener('load', animateProgressCircles);
