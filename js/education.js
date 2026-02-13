// Education Page JavaScript

// School Details Data
const schoolsData = {
    'primary-maksoodan': {
        name: 'Primary School Maksoodan',
        nameHindi: 'प्राथमिक विद्यालय मकसूदन',
        classes: 'Classes 1-5',
        location: 'Maksoodan',
        board: 'Uttar Pradesh Basic Education Board',
        medium: 'Hindi',
        establishment: 'Established: [Year]',
        staff: [
            { name: 'Jay Kumar Srivastava', role: 'Headmaster' },
            { name: 'Abhishek Singh', role: 'Assistant Teacher' },
            { name: '[Yadav - Full Name]', role: 'Assistant Teacher' }
        ],
        shikshamitra: [
            { name: 'Mithilesh Singh', role: 'Shiksha Mitra' },
            { name: 'Shiv Prasad Shankar', role: 'Shiksha Mitra' },
            { name: 'Nirmala Gupta', role: 'Shiksha Mitra' }
        ],
        students: {
            total: 180,
            classWise: [
                { class: 'Class 1', count: 35 },
                { class: 'Class 2', count: 38 },
                { class: 'Class 3', count: 32 },
                { class: 'Class 4', count: 40 },
                { class: 'Class 5', count: 35 }
            ]
        },
        facilities: [
            'Classrooms',
            'Drinking Water',
            'Toilets',
            'Playground',
            'Mid-Day Meal',
            'Electricity',
            'Smart Class (if available)'
        ],
        activities: [
            'Independence Day Celebration',
            'Republic Day Celebration',
            'Sports Day',
            'Cultural Programs',
            'Annual Function'
        ]
    },
    'upper-primary-maksoodan': {
        name: 'Upper Primary School Maksoodan',
        nameHindi: 'उच्च प्राथमिक विद्यालय मकसूदन',
        classes: 'Classes 6-8',
        location: 'Mishrapur, Maksoodan',
        board: 'UP Board',
        medium: 'Hindi',
        establishment: 'Established: [Year]',
        staff: [
            { name: '[Headmaster Name]', role: 'Headmaster' },
            { name: '[Teacher Name]', role: 'Assistant Teacher' },
            { name: '[Teacher Name]', role: 'Assistant Teacher' },
            { name: '[Teacher Name]', role: 'Assistant Teacher' }
        ],
        students: {
            total: 150,
            classWise: [
                { class: 'Class 6', count: 55 },
                { class: 'Class 7', count: 50 },
                { class: 'Class 8', count: 45 }
            ]
        },
        facilities: [
            'Classrooms',
            'Science Lab (if available)',
            'Computer Lab (if available)',
            'Library',
            'Drinking Water',
            'Toilets',
            'Playground',
            'Mid-Day Meal',
            'Electricity'
        ],
        activities: [
            'Independence Day Celebration',
            'Republic Day Celebration',
            'Sports Day',
            'Science Exhibition',
            'Cultural Programs',
            'Annual Function'
        ]
    },
    'primary-jafarapur': {
        name: 'Primary School Jafarapur',
        nameHindi: 'प्राथमिक विद्यालय जाफराबाद',
        classes: 'Classes 1-5',
        location: 'Jafarapur, Maksoodan Gram Sabha',
        board: 'Uttar Pradesh Basic Education Board',
        medium: 'Hindi',
        establishment: 'Established: [Year]',
        staff: [
            { name: '[Headmaster Name]', role: 'Headmaster' },
            { name: '[Teacher Name]', role: 'Assistant Teacher' },
            { name: '[Teacher Name]', role: 'Assistant Teacher' }
        ],
        shikshamitra: [
            { name: '[Shiksha Mitra Name]', role: 'Shiksha Mitra' },
            { name: '[Shiksha Mitra Name]', role: 'Shiksha Mitra' }
        ],
        students: {
            total: 120,
            classWise: [
                { class: 'Class 1', count: 25 },
                { class: 'Class 2', count: 24 },
                { class: 'Class 3', count: 22 },
                { class: 'Class 4', count: 26 },
                { class: 'Class 5', count: 23 }
            ]
        },
        facilities: [
            'Classrooms',
            'Drinking Water',
            'Toilets',
            'Playground',
            'Mid-Day Meal',
            'Electricity'
        ],
        activities: [
            'Independence Day Celebration',
            'Republic Day Celebration',
            'Sports Day',
            'Cultural Programs',
            'Annual Function'
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    animateCounters();
    setupModals();
});

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
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

// Show school details
function showSchoolDetails(schoolId) {
    const school = schoolsData[schoolId];
    if (!school) return;
    
    const modal = document.getElementById('schoolModal');
    const modalBody = document.getElementById('schoolModalBody');
    
    // Build staff section
    let staffHTML = '';
    if (school.staff && school.staff.length > 0) {
        staffHTML = `
            <div class="info-section">
                <h3><i class="fas fa-chalkboard-teacher"></i> Teaching Staff | शिक्षण स्टाफ</h3>
                <div class="staff-list">
                    ${school.staff.map(staff => `
                        <div class="staff-item">
                            <div>
                                <div class="staff-name">${staff.name}</div>
                                <div class="staff-role">${staff.role}</div>
                            </div>
                            <i class="fas fa-user-tie" style="font-size: 24px; color: #1976d2;"></i>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Build Shiksha Mitra section
    let shikshamitraHTML = '';
    if (school.shikshamitra && school.shikshamitra.length > 0) {
        shikshamitraHTML = `
            <div class="info-section">
                <h3><i class="fas fa-users"></i> Shiksha Mitra | शिक्षा मित्र</h3>
                <div class="staff-list">
                    ${school.shikshamitra.map(sm => `
                        <div class="staff-item">
                            <div>
                                <div class="staff-name">${sm.name}</div>
                                <div class="staff-role">${sm.role}</div>
                            </div>
                            <i class="fas fa-user" style="font-size: 24px; color: #ff9800;"></i>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Build class-wise strength chart
    let classWiseHTML = '';
    if (school.students && school.students.classWise) {
        classWiseHTML = `
            <div class="info-section">
                <h3><i class="fas fa-chart-bar"></i> Class-wise Student Strength | कक्षावार छात्र संख्या</h3>
                <div class="info-grid">
                    ${school.students.classWise.map(cls => `
                        <div class="info-item">
                            <strong>${cls.class}</strong>
                            <div style="font-size: 24px; color: #1976d2; margin-top: 10px;">${cls.count} Students</div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 20px; background: #e3f2fd; border-radius: 10px;">
                    <div style="font-size: 18px; color: #666; margin-bottom: 5px;">Total Student Strength</div>
                    <div style="font-size: 36px; font-weight: bold; color: #1565c0;">${school.students.total}</div>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-school-header">
            <h2>${school.name}</h2>
            <p>${school.nameHindi}</p>
            <div style="margin-top: 15px;">
                <span style="display: inline-block; padding: 8px 20px; background: rgba(255,255,255,0.3); border-radius: 20px; font-size: 16px;">
                    ${school.classes}
                </span>
            </div>
        </div>
        
        <div class="modal-school-body">
            <!-- Basic Information -->
            <div class="info-section">
                <h3><i class="fas fa-info-circle"></i> School Profile | विद्यालय प्रोफ़ाइल</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>School Name</strong>
                        ${school.name}
                    </div>
                    <div class="info-item">
                        <strong>Location</strong>
                        ${school.location}
                    </div>
                    <div class="info-item">
                        <strong>Board</strong>
                        ${school.board}
                    </div>
                    <div class="info-item">
                        <strong>Medium</strong>
                        ${school.medium}
                    </div>
                    ${school.establishment ? `
                        <div class="info-item">
                            <strong>Establishment</strong>
                            ${school.establishment}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            ${staffHTML}
            ${shikshamitraHTML}
            ${classWiseHTML}
            
            <!-- Facilities -->
            <div class="info-section">
                <h3><i class="fas fa-building"></i> Facilities | सुविधाएं</h3>
                <div class="facilities-grid">
                    ${school.facilities.map(facility => `
                        <div class="facility-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${facility}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Activities -->
            <div class="info-section">
                <h3><i class="fas fa-calendar-alt"></i> Activities & Events | गतिविधियां और कार्यक्रम</h3>
                <ul class="activities-list">
                    ${school.activities.map(activity => `
                        <li><i class="fas fa-star" style="color: #ff9800; margin-right: 10px;"></i>${activity}</li>
                    `).join('')}
                </ul>
            </div>
            
            <!-- Photo Gallery Placeholder -->
            <div class="info-section">
                <h3><i class="fas fa-images"></i> Photo Gallery | फोटो गैलरी</h3>
                <div style="text-align: center; padding: 40px; background: #f5f5f5; border-radius: 10px;">
                    <i class="fas fa-camera" style="font-size: 60px; color: #ccc; margin-bottom: 15px;"></i>
                    <p style="color: #999; font-size: 16px;">School photos will be added soon</p>
                    <p style="color: #999; font-size: 14px;">विद्यालय की तस्वीरें जल्द ही जोड़ी जाएंगी</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Setup modals
function setupModals() {
    const modal = document.getElementById('schoolModal');
    const closeButton = document.querySelector('.close-modal');
    
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Make function globally available
window.showSchoolDetails = showSchoolDetails;
