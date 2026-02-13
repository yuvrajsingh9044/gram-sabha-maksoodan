// Development Dashboard JavaScript

// Data structures
const developmentIndicators = [
    { name: 'Electrification Coverage', nameHindi: 'विद्युतीकरण', icon: 'fa-lightbulb', percentage: 100, status: 'achieved' },
    { name: 'Household Toilet Coverage', nameHindi: 'शौचालय कवरेज', icon: 'fa-toilet', percentage: 95, status: 'achieved' },
    { name: 'Tap Water Supply', nameHindi: 'नल जल आपूर्ति', icon: 'fa-faucet', percentage: 90, status: 'achieved' },
    { name: 'Road Connectivity', nameHindi: 'सड़क संपर्क', icon: 'fa-road', percentage: 80, status: 'in-progress' },
    { name: 'Drainage Coverage', nameHindi: 'जल निकासी', icon: 'fa-water', percentage: 60, status: 'needs-attention' },
    { name: 'Street Light Coverage', nameHindi: 'स्ट्रीट लाइट', icon: 'fa-street-view', percentage: 92, status: 'achieved' },
    { name: 'Solar Light Coverage', nameHindi: 'सोलर लाइट', icon: 'fa-solar-panel', percentage: 85, status: 'achieved' },
    { name: 'PMAY Housing Coverage', nameHindi: 'पीएमएवाई आवास', icon: 'fa-home', percentage: 70, status: 'in-progress' },
    { name: 'MNREGA Job Card Coverage', nameHindi: 'मनरेगा जॉब कार्ड', icon: 'fa-id-card', percentage: 88, status: 'achieved' },
    { name: 'Internet / Digital Access', nameHindi: 'इंटरनेट पहुंच', icon: 'fa-wifi', percentage: 55, status: 'needs-attention' }
];

const completedProjects = [
    {
        name: 'CC Road Construction - Maksoodan',
        category: 'Road',
        location: 'Maksoodan Main Area',
        completionDate: 'March 2025',
        budget: '₹15 Lakh',
        agency: 'PMGSY',
        beneficiaries: 450,
        image: '../images/projects/road1.jpg'
    },
    {
        name: 'Drainage Line - Jiyanpur',
        category: 'Drainage',
        location: 'Jiyanpur Hamlet',
        completionDate: 'January 2025',
        budget: '₹8 Lakh',
        agency: 'Gram Panchayat',
        beneficiaries: 120,
        image: '../images/projects/drainage1.jpg'
    },
    {
        name: 'PMAY Houses - Barraiya',
        category: 'Housing',
        location: 'Barraiya Hamlet',
        completionDate: 'December 2024',
        budget: '₹30 Lakh',
        agency: 'PMAY',
        beneficiaries: 25,
        image: '../images/projects/housing1.jpg'
    }
];

const ongoingProjects = [
    {
        name: 'Community Hall Construction',
        category: 'Infrastructure',
        location: 'Maksoodan',
        startDate: 'November 2025',
        expectedCompletion: 'May 2026',
        budget: '₹20 Lakh',
        progress: 65,
        contractor: 'ABC Constructions',
        image: '../images/projects/hall1.jpg'
    },
    {
        name: 'Solar Street Lights Installation',
        category: 'Electricity',
        location: 'Jafarapur',
        startDate: 'December 2025',
        expectedCompletion: 'March 2026',
        budget: '₹12 Lakh',
        progress: 45,
        contractor: 'Solar Energy Dept',
        image: '../images/projects/solar1.jpg'
    }
];

const upcomingProjects = [
    {
        name: 'Primary School Renovation',
        category: 'Education',
        location: 'Maksoodan',
        proposedBudget: '₹18 Lakh',
        approvalStatus: 'Approved',
        expectedStart: 'April 2026',
        department: 'Education Department'
    },
    {
        name: 'Tubewell Installation',
        category: 'Water',
        location: 'Kharahna',
        proposedBudget: '₹5 Lakh',
        approvalStatus: 'Pending',
        expectedStart: 'May 2026',
        department: 'Jal Jeevan Mission'
    }
];

const schemes = [
    { name: 'Pradhan Mantri Awas Yojana (PMAY)', sanctioned: 50, completed: 35, pending: 15 },
    { name: 'Jal Jeevan Mission', sanctioned: 700, completed: 630, pending: 70 },
    { name: 'Swachh Bharat Mission', sanctioned: 750, completed: 712, pending: 38 },
    { name: 'MNREGA Works', sanctioned: 650, completed: 572, pending: 78 },
    { name: 'PMGSY Roads', sanctioned: 8, completed: 6, pending: 2 },
    { name: 'Saubhagya Electrification', sanctioned: 750, completed: 750, pending: 0 }
];

const areaWiseDevelopment = [
    {
        area: 'Maksoodan Area',
        developments: [
            'CC Roads: 5 km constructed',
            'Primary & Junior Schools upgraded',
            'PMAY Houses: 35 completed',
            'Tubewells: 8 installed',
            'Street Lights: 120 installed'
        ]
    },
    {
        area: 'Jafarapur Area',
        developments: [
            'Road connectivity improved',
            'Drainage system: 2 km',
            'Solar lights: 45 installed',
            'Community water tank',
            'PMAY Houses: 15 completed'
        ]
    }
];

const infrastructureHighlights = [
    { name: 'Roads Constructed', icon: 'fa-road', count: '12 km', unit: 'kilometers' },
    { name: 'Drains Built', icon: 'fa-water', count: '8 km', unit: 'kilometers' },
    { name: 'Street Lights Installed', icon: 'fa-lightbulb', count: 165, unit: 'units' },
    { name: 'Tubewells Installed', icon: 'fa-tint', count: 12, unit: 'units' },
    { name: 'Community Halls Built', icon: 'fa-building', count: 2, unit: 'buildings' },
    { name: 'PMAY Houses', icon: 'fa-home', count: 50, unit: 'houses' }
];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    animateCounters();
    renderIndicators();
    renderProjects();
    renderSchemes();
    renderAreaDevelopment();
    renderInfrastructure();
    renderGallery();
    setupTabs();
    setupGalleryTabs();
    createFinancialChart();
});

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number [data-target]');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
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
        
        observer.observe(counter.parentElement);
    });
}

// Render indicators
function renderIndicators() {
    const grid = document.getElementById('indicatorsGrid');
    
    developmentIndicators.forEach(indicator => {
        const card = document.createElement('div');
        card.className = `indicator-card ${indicator.status}`;
        card.innerHTML = `
            <div class="indicator-header">
                <div class="indicator-icon"><i class="fas ${indicator.icon}"></i></div>
                <div class="indicator-title">
                    <h4>${indicator.name}</h4>
                    <span>${indicator.nameHindi}</span>
                </div>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${indicator.percentage}%"></div>
            </div>
            <div class="indicator-percentage">${indicator.percentage}%</div>
            <div class="indicator-status">
                ${indicator.status === 'achieved' ? 'Achieved | पूर्ण' : 
                  indicator.status === 'in-progress' ? 'In Progress | प्रगति में' : 
                  'Needs Attention | ध्यान चाहिए'}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render projects
function renderProjects() {
    renderProjectList('completedProjects', completedProjects, 'completed');
    renderProjectList('ongoingProjects', ongoingProjects, 'ongoing');
    renderProjectList('upcomingProjects', upcomingProjects, 'upcoming');
}

function renderProjectList(containerId, projects, type) {
    const container = document.getElementById(containerId);
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        if (type === 'completed') {
            card.innerHTML = `
                <div class="project-image" style="position: relative;">
                    <img src="${project.image}" alt="${project.name}" onerror="this.src='../images/placeholder-project.jpg'">
                    <div class="project-badge completed">Completed</div>
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <div class="project-meta">
                        <span><i class="fas fa-tag"></i> ${project.category}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                        <span><i class="fas fa-calendar"></i> ${project.completionDate}</span>
                    </div>
                    <div class="project-meta">
                        <span><i class="fas fa-rupee-sign"></i> ${project.budget}</span>
                        <span><i class="fas fa-building"></i> ${project.agency}</span>
                        <span><i class="fas fa-users"></i> ${project.beneficiaries} families</span>
                    </div>
                </div>
            `;
        } else if (type === 'ongoing') {
            card.innerHTML = `
                <div class="project-image" style="position: relative;">
                    <img src="${project.image}" alt="${project.name}" onerror="this.src='../images/placeholder-project.jpg'">
                    <div class="project-badge ongoing">Ongoing</div>
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <div class="project-meta">
                        <span><i class="fas fa-tag"></i> ${project.category}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                    </div>
                    <div class="project-meta">
                        <span><i class="fas fa-calendar"></i> Started: ${project.startDate}</span>
                        <span><i class="fas fa-clock"></i> Expected: ${project.expectedCompletion}</span>
                    </div>
                    <div class="project-meta">
                        <span><i class="fas fa-rupee-sign"></i> ${project.budget}</span>
                        <span><i class="fas fa-hard-hat"></i> ${project.contractor}</span>
                    </div>
                    <div class="project-progress">
                        <strong>Progress: ${project.progress}%</strong>
                        <div class="project-progress-bar">
                            <div class="project-progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="project-content">
                    <div class="project-badge upcoming" style="position: relative; display: inline-block; margin-bottom: 10px;">Upcoming</div>
                    <h3>${project.name}</h3>
                    <div class="project-meta">
                        <span><i class="fas fa-tag"></i> ${project.category}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                    </div>
                    <div class="project-meta">
                        <span><i class="fas fa-rupee-sign"></i> ${project.proposedBudget}</span>
                        <span><i class="fas fa-building"></i> ${project.department}</span>
                    </div>
                    <div class="project-meta">
                        <span><i class="fas fa-check-circle"></i> Status: ${project.approvalStatus}</span>
                        <span><i class="fas fa-calendar"></i> Start: ${project.expectedStart}</span>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
}

// Render schemes
function renderSchemes() {
    const grid = document.getElementById('schemesGrid');
    
    schemes.forEach(scheme => {
        const card = document.createElement('div');
        card.className = 'scheme-card';
        card.innerHTML = `
            <h4>${scheme.name}</h4>
            <div class="scheme-stats">
                <div class="scheme-stat sanctioned">
                    <span>Sanctioned | स्वीकृत</span>
                    <strong>${scheme.sanctioned}</strong>
                </div>
                <div class="scheme-stat completed">
                    <span>Completed | पूर्ण</span>
                    <strong>${scheme.completed}</strong>
                </div>
                <div class="scheme-stat pending">
                    <span>Pending | लंबित</span>
                    <strong>${scheme.pending}</strong>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render area development
function renderAreaDevelopment() {
    const grid = document.getElementById('areaGrid');
    
    areaWiseDevelopment.forEach(area => {
        const card = document.createElement('div');
        card.className = 'area-card';
        card.innerHTML = `
            <h3><i class="fas fa-map-marker-alt"></i> ${area.area}</h3>
            <ul class="area-list">
                ${area.developments.map(dev => `
                    <li><i class="fas fa-check-circle"></i> ${dev}</li>
                `).join('')}
            </ul>
        `;
        grid.appendChild(card);
    });
}

// Render infrastructure
function renderInfrastructure() {
    const grid = document.getElementById('infraGrid');
    
    infrastructureHighlights.forEach(infra => {
        const card = document.createElement('div');
        card.className = 'infra-card';
        card.innerHTML = `
            <i class="fas ${infra.icon}"></i>
            <h4>${infra.name}</h4>
            <div class="infra-number">${infra.count}</div>
            <span>${infra.unit}</span>
        `;
        grid.appendChild(card);
    });
}

// Render gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const galleryItems = [
        { category: 'roads', image: '../images/gallery/road-before-after.jpg', caption: 'Road Construction - Before & After' },
        { category: 'housing', image: '../images/gallery/house-before-after.jpg', caption: 'PMAY Housing - Before & After' },
        { category: 'water', image: '../images/gallery/water-before-after.jpg', caption: 'Water Supply - Before & After' },
        { category: 'schools', image: '../images/gallery/school-before-after.jpg', caption: 'School Renovation - Before & After' }
    ];
    
    galleryItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.dataset.category = item.category;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.caption}" onerror="this.src='../images/placeholder-gallery.jpg'">
            <div class="gallery-caption">${item.caption}</div>
        `;
        grid.appendChild(div);
    });
}

// Setup tabs
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Setup gallery tabs
function setupGalleryTabs() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-item');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Create financial chart
function createFinancialChart() {
    const ctx = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Funds Utilized', 'Balance Funds'],
            datasets: [{
                data: [2.5, 0.7],
                backgroundColor: ['#4caf50', '#ff9800'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Fund Utilization (in Crores)',
                    font: { size: 18 }
                }
            }
        }
    });
}
