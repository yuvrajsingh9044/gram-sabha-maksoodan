// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    setupGrievanceForm();
    setupInquiryForm();
});

// Setup Grievance Form
function setupGrievanceForm() {
    const form = document.getElementById('grievanceForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            fullName: formData.get('fullName'),
            fatherName: formData.get('fatherName'),
            mobile: formData.get('mobile'),
            email: formData.get('email'),
            address: formData.get('address'),
            subject: formData.get('subject'),
            details: formData.get('details'),
            file: formData.get('file')
        };
        
        // Validate
        if (!validatePhone(data.mobile)) {
            showMessage('Please enter a valid 10-digit mobile number', 'error');
            return;
        }
        
        if (data.email && !validateEmail(data.email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // In production, send data to server
        console.log('Grievance Form Data:', data);
        
        // Show success message
        showSuccessMessage(
            'Your grievance has been submitted to Gram Panchayat Maksoodan.',
            'आपकी शिकायत ग्राम पंचायत मकसूदन को सफलतापूर्वक प्रस्तुत की गई है।',
            'A confirmation SMS will be sent to your mobile number.',
            'आपके मोबाइल नंबर पर एक पुष्टिकरण SMS भेजा जाएगा।'
        );
        
        // Reset form
        form.reset();
        
        // Scroll to success message
        window.scrollTo({
            top: form.offsetTop - 100,
            behavior: 'smooth'
        });
    });
}

// Setup Inquiry Form
function setupInquiryForm() {
    const form = document.getElementById('inquiryForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Validate
        if (!validatePhone(data.phone)) {
            showMessage('Please enter a valid 10-digit phone number', 'error');
            return;
        }
        
        if (!validateEmail(data.email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // In production, send data to server
        console.log('Inquiry Form Data:', data);
        
        // Show success message
        showSuccessMessage(
            'Thank you for contacting us!',
            'हमसे संपर्क करने के लिए धन्यवाद!',
            'We will respond to your inquiry within 48 hours.',
            'हम 48 घंटे के भीतर आपकी पूछताछ का जवाब देंगे।'
        );
        
        // Reset form
        form.reset();
        
        // Scroll to success message
        window.scrollTo({
            top: form.offsetTop - 100,
            behavior: 'smooth'
        });
    });
}

// Validate Phone Number
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

// Validate Email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Success Message
function showSuccessMessage(titleEn, titleHi, messageEn, messageHi) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message show';
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
            <i class="fas fa-check-circle" style="font-size: 30px; color: #28a745;"></i>
            <div>
                <h3 style="margin: 0 0 5px 0; color: #155724;">${titleEn}</h3>
                <h4 style="margin: 0; color: #155724; font-weight: normal;">${titleHi}</h4>
            </div>
        </div>
        <p style="margin: 10px 0 5px 0;">${messageEn}</p>
        <p style="margin: 0;">${messageHi}</p>
    `;
    
    // Insert at top of forms section
    const formsSection = document.querySelector('.forms-section');
    formsSection.insertBefore(successDiv, formsSection.firstChild);
    
    // Remove after 10 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => {
            successDiv.remove();
        }, 300);
    }, 10000);
}

// Show Error/Info Message
function showMessage(message, type = 'info') {
    alert(message);
}

// Smooth scroll for anchor links
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

// File upload validation
document.getElementById('gFile')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Check file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            alert('File size must be less than 5MB');
            e.target.value = '';
            return;
        }
        
        // Check file type
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            alert('Only PDF, JPG, and PNG files are allowed');
            e.target.value = '';
            return;
        }
    }
});

// Phone number formatting
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function(e) {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});

// Add loading state to submit buttons
document.querySelectorAll('.submit-btn').forEach(button => {
    button.addEventListener('click', function() {
        const form = this.closest('form');
        if (form.checkValidity()) {
            this.disabled = true;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            // Re-enable after form submission
            setTimeout(() => {
                this.disabled = false;
                this.innerHTML = this.dataset.originalText || 'Submit';
            }, 2000);
        }
    });
    
    // Store original button text
    button.dataset.originalText = button.innerHTML;
});

// Print functionality (optional)
function printContactInfo() {
    window.print();
}

// Copy email to clipboard
document.querySelectorAll('.email-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.querySelector('span').textContent;
        
        // Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show copied message
                const originalText = this.querySelector('strong').textContent;
                this.querySelector('strong').textContent = 'Copied!';
                setTimeout(() => {
                    this.querySelector('strong').textContent = originalText;
                }, 2000);
            });
        } else {
            // Fallback for older browsers
            window.location.href = `mailto:${email}`;
        }
    });
});

// Add animation on scroll
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

// Observe all major sections
document.querySelectorAll('.office-details-section, .admin-contacts-section, .service-contacts-section, .form-container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
