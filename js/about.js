// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupSmoothScroll();
});

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.intro-section, .history-section, .demographic-section, .regional-section, .area-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate demo cards
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate hamlet cards
    const hamletCards = document.querySelectorAll('.hamlet-card');
    hamletCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        observer.observe(card);
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Counter animation for demographic numbers
function animateCounters() {
    const counters = document.querySelectorAll('.demo-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/,/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
animateCounters();

// Print functionality (optional)
function printPage() {
    window.print();
}

// Add print button if needed
const printBtn = document.createElement('button');
printBtn.innerHTML = '<i class="fas fa-print"></i> Print Profile';
printBtn.className = 'print-btn';
printBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 15px 25px;
    background: #283593;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 1000;
    display: none;
`;

printBtn.addEventListener('click', printPage);
document.body.appendChild(printBtn);

// Show print button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        printBtn.style.display = 'block';
    } else {
        printBtn.style.display = 'none';
    }
});
