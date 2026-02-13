// Notable People Data Structure
const notablePeople = [
    // Defense Services - Heroes/Martyrs
    {
        id: 1,
        name: "Subedar Major Satya Narayan Singh",
        fatherName: "S/o Bhagwti deen Singh",
        area: "maksoodan",
        category: "defense",
        role: "Indian Army - 20Lancers, Armerd Core",
        achievements: "Served in Kargil War, awarded for bravery in counter-insurgency operations",
        awards: "Sena Medal, Mentioned in Dispatches",
        serviceYears: "1961-1975",
        status: "late",
        isHero: false,
        photo: "../images/people/person1.jpg",
        biography: "Detailed biography of the person...",
        earlyLife: "Born and raised in Maksoodan...",
        career: "Joined Indian Army in 1961...",
        contributions: "Significant contributions to village development..."
    },
    {
        id: 2,
        name: "Lakshmi Singh",
        fatherName: "S/o Krishn Kumar Singh",
        area: "maksoodan",
        category: "defense",
        role: "Indian Air Force - Agni Veer",
        serviceYears: "2024-present",
        status: "living",
        isHero: false,
        isMartyr: false,
        photo: "../images/people/lakshmi.jpg",
        earlyLife: "Born in Jafarapur hamlet...",
        career: "Enlisted in Indian Army in 2026...",
    },
    {
        id: 3,
        name: "Ankit Mishra",
        fatherName: "S/o Anil Mishra",
        area: "maksoodan",
        category: "defense",
        role: "Indian Army - Agni Veer",
        serviceYears: "2026-present",
        status: "living",
        isHero: false,
        isMartyr: false,
        photo: "../images/people/ankit.jpg",
        earlyLife: "Born in Jafarapur hamlet...",
        career: "Enlisted in Indian Army in 2026...",
    },
    
    // Education & Teaching
    {
        id: 3,
        name: "Pt. Ram Sirnet Mishra",
        fatherName: "S/o [Father Name]",
        area: "maksoodan",
        category: "education",
        role: "Profrssor-Chemistry, Janta Inter College Belahri",
        achievements: "40 years of dedicated service in education, mentored thousands of students",
        awards: "Best Teacher Award (State Level)",
        serviceYears: "1980-2000",
        status: "living",
        isHero: false,
        photo: "../images/people/person3.jpg",
        biography: "A dedicated educator who transformed lives through education...",
        earlyLife: "Completed education from local schools...",
        career: "Started teaching career in 1980...",
        contributions: "Established scholarship fund for poor students..."
    },
    
    // Politics & Governance
    {
        id: 4,
        name: "[Name]",
        fatherName: "S/o [Father Name]",
        area: "maksoodan",
        category: "politics",
        role: "Former MLA, Sultanpur",
        achievements: "Served 3 terms as MLA, instrumental in village development projects",
        awards: "Outstanding Legislator Award",
        serviceYears: "2000-2015",
        status: "living",
        isHero: false,
        photo: "../images/people/person4.jpg",
        biography: "A people's representative who worked tirelessly for rural development...",
        earlyLife: "Started political career from grassroots...",
        career: "Elected as MLA in 2000...",
        contributions: "Brought road connectivity and electricity to remote hamlets..."
    },
    
    // Social Workers
    {
        id: 5,
        name: "[Name]",
        fatherName: "D/o [Father Name]",
        area: "jafarapur",
        category: "social",
        role: "Social Activist & Women Empowerment",
        achievements: "Founded women's self-help groups, promoted education for girls",
        awards: "Nari Shakti Puraskar",
        serviceYears: "2005-Present",
        status: "living",
        isHero: false,
        photo: "../images/people/person5.jpg",
        biography: "A champion of women's rights and rural empowerment...",
        earlyLife: "Overcame social barriers to pursue education...",
        career: "Started social work in 2005...",
        contributions: "Established 15 self-help groups benefiting 500+ women..."
    },
    
    // Sports
    {
        id: 6,
        name: "[Name]",
        fatherName: "S/o [Father Name]",
        area: "maksoodan",
        category: "sports",
        role: "National Level Kabaddi Player",
        achievements: "Represented Uttar Pradesh in National Championships, won multiple medals",
        awards: "Gold Medal - National Kabaddi Championship 2018",
        serviceYears: "2010-Present",
        status: "living",
        isHero: false,
        photo: "../images/people/person6.jpg",
        biography: "A sports icon who brought glory to the village...",
        earlyLife: "Started playing kabaddi in village tournaments...",
        career: "Selected for state team in 2010...",
        contributions: "Trains young players free of cost..."
    },
    
    // Freedom Fighters
    {
        id: 7,
        name: "Late [Name]",
        fatherName: "S/o [Father Name]",
        area: "maksoodan",
        category: "freedom",
        role: "Freedom Fighter",
        achievements: "Participated in Quit India Movement, imprisoned for 2 years",
        awards: "Tamra Patra, Freedom Fighter Pension",
        serviceYears: "1942-1947",
        status: "deceased",
        isHero: false,
        photo: "../images/people/person7.jpg",
        biography: "A brave freedom fighter who fought for India's independence...",
        earlyLife: "Inspired by Mahatma Gandhi's call...",
        career: "Joined freedom movement in 1942...",
        contributions: "His sacrifice paved the way for free India..."
    },
    
    // Religious Leaders
    {
        id: 8,
        name: "Pandit [Name]",
        fatherName: "S/o [Father Name]",
        area: "maksoodan",
        category: "religious",
        role: "Temple Priest & Spiritual Guide",
        achievements: "50 years of spiritual service, organized religious and cultural events",
        awards: "Community Service Award",
        serviceYears: "1970-Present",
        status: "living",
        isHero: false,
        photo: "../images/people/person8.jpg",
        biography: "A spiritual guide who preserved cultural heritage...",
        earlyLife: "Learned Sanskrit and Vedic scriptures...",
        career: "Became temple priest in 1970...",
        contributions: "Organized annual religious festivals bringing community together..."
    },
    
    // Other Distinguished
    {
        id: 9,
        name: "Dr. [Name]",
        fatherName: "S/o [Father Name]",
        area: "jafarapur",
        category: "other",
        role: "Medical Doctor - Community Health",
        achievements: "Provided free medical services to villagers for 30 years",
        awards: "Best Rural Doctor Award",
        serviceYears: "1990-Present",
        status: "living",
        isHero: false,
        photo: "../images/people/person9.jpg",
        biography: "A compassionate doctor who served the community selflessly...",
        earlyLife: "First doctor from the village...",
        career: "Established free clinic in 1990...",
        contributions: "Treated thousands of patients free of cost..."
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderAllPeople();
    setupFilters();
    setupModal();
});

// Render all people in their respective categories
function renderAllPeople() {
    // Clear all grids
    document.getElementById('heroesGrid').innerHTML = '';
    document.getElementById('defenseGrid').innerHTML = '';
    document.getElementById('educationGrid').innerHTML = '';
    document.getElementById('politicsGrid').innerHTML = '';
    document.getElementById('socialGrid').innerHTML = '';
    document.getElementById('sportsGrid').innerHTML = '';
    document.getElementById('freedomGrid').innerHTML = '';
    document.getElementById('religiousGrid').innerHTML = '';
    document.getElementById('otherGrid').innerHTML = '';
    
    // Render heroes first
    const heroes = notablePeople.filter(p => p.isHero);
    heroes.forEach(person => {
        document.getElementById('heroesGrid').appendChild(createProfileCard(person, true));
    });
    
    // Render by category
    notablePeople.forEach(person => {
        const gridId = person.category + 'Grid';
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.appendChild(createProfileCard(person, false));
        }
    });
    
    // Show empty state if no people in category
    checkEmptyCategories();
}

// Create profile card
function createProfileCard(person, isHeroSection) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.dataset.id = person.id;
    card.dataset.category = person.category;
    card.dataset.area = person.area;
    card.dataset.status = person.status;
    card.dataset.name = person.name.toLowerCase();
    
    if (person.isHero && isHeroSection) {
        card.classList.add('hero-card');
    }
    
    let statusBadge = '';
    if (person.status === 'living') {
        statusBadge = '<span class="status-badge living">Living</span>';
    } else {
        statusBadge = '<span class="status-badge deceased">Late</span><div class="tribute-ribbon">श्रद्धांजलि</div>';
    }
    
    let heroBadge = '';
    if (person.isMartyr) {
        heroBadge = '<span class="hero-badge"><i class="fas fa-medal"></i> Martyr</span>';
    } else if (person.isHero && isHeroSection) {
        heroBadge = '<span class="hero-badge"><i class="fas fa-star"></i> Hero</span>';
    }
    
    card.innerHTML = `
        <div class="profile-photo-container">
            <img src="${person.photo}" alt="${person.name}" class="profile-photo" 
                 onerror="this.src='../images/placeholder-person.jpg'">
            ${statusBadge}
            ${heroBadge}
        </div>
        <div class="profile-info">
            <div class="profile-name">${person.name}</div>
            <div class="profile-father">${person.fatherName}</div>
            <span class="profile-area">${formatArea(person.area)}</span>
            <div class="profile-role">${person.role}</div>
            <div class="profile-achievements">${person.achievements}</div>
            ${person.awards ? `<div class="profile-awards"><i class="fas fa-award"></i> ${person.awards}</div>` : ''}
            <div class="profile-service"><i class="fas fa-calendar"></i> ${person.serviceYears}</div>
            <button class="view-details-btn" onclick="showProfile(${person.id})">
                <i class="fas fa-eye"></i> View Full Profile
            </button>
        </div>
    `;
    
    return card;
}

// Format area name
function formatArea(area) {
    const areaNames = {
        'maksoodan': 'Maksoodan',
        'jafarapur': 'Jafarapur',
        'misgrapur': 'Misgrapur',
        'kharahna': 'Kharahna',
        'rallhikapura': 'Rallhikapura',
        'jiyanpur': 'Jiyanpur',
        'jhaliya': 'Jhaliya',
        'barraiya': 'Barraiya'
    };
    return areaNames[area] || area;
}

// Setup filters
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const areaFilter = document.getElementById('areaFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    areaFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
}

// Apply filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryValue = document.getElementById('categoryFilter').value;
    const areaValue = document.getElementById('areaFilter').value;
    const statusValue = document.getElementById('statusFilter').value;
    
    const allCards = document.querySelectorAll('.profile-card');
    const allSections = document.querySelectorAll('.category-section');
    
    // Hide all sections first
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const matchesSearch = card.dataset.name.includes(searchTerm);
        const matchesCategory = categoryValue === 'all' || card.dataset.category === categoryValue;
        const matchesArea = areaValue === 'all' || card.dataset.area === areaValue;
        const matchesStatus = statusValue === 'all' || card.dataset.status === statusValue;
        
        if (matchesSearch && matchesCategory && matchesArea && matchesStatus) {
            card.style.display = 'block';
            // Show parent section
            const parentSection = card.closest('.category-section');
            if (parentSection) {
                parentSection.style.display = 'block';
            }
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Check empty categories after filtering
    checkEmptyCategories();
}

// Check and show empty state for categories
function checkEmptyCategories() {
    const categories = ['defense', 'education', 'politics', 'social', 'sports', 'freedom', 'religious', 'other'];
    
    categories.forEach(cat => {
        const grid = document.getElementById(cat + 'Grid');
        const visibleCards = grid.querySelectorAll('.profile-card[style="display: block;"], .profile-card:not([style*="display: none"])');
        
        if (visibleCards.length === 0) {
            if (!grid.querySelector('.empty-state')) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-user-slash"></i>
                        <p>No people found in this category</p>
                    </div>
                `;
            }
        } else {
            const emptyState = grid.querySelector('.empty-state');
            if (emptyState) {
                emptyState.remove();
            }
        }
    });
    
    // Check heroes grid
    const heroesGrid = document.getElementById('heroesGrid');
    const visibleHeroes = heroesGrid.querySelectorAll('.profile-card[style="display: block;"], .profile-card:not([style*="display: none"])');
    if (visibleHeroes.length === 0) {
        heroesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-medal"></i>
                <p>No heroes/martyrs to display</p>
            </div>
        `;
    }
}

// Show profile modal
function showProfile(personId) {
    const person = notablePeople.find(p => p.id === personId);
    if (!person) return;
    
    const modal = document.getElementById('profileModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${person.photo}" alt="${person.name}" class="modal-photo" 
                 onerror="this.src='../images/placeholder-person.jpg'">
            <div class="modal-name">${person.name}</div>
            <div class="modal-role">${person.role}</div>
            ${person.status === 'deceased' ? '<p style="margin-top: 10px; font-size: 16px;">🙏 श्रद्धांजलि | Tribute 🙏</p>' : ''}
        </div>
        <div class="modal-body">
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Father's Name</div>
                    <div class="detail-value">${person.fatherName}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Area</div>
                    <div class="detail-value">${formatArea(person.area)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Service Years</div>
                    <div class="detail-value">${person.serviceYears}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">${person.status === 'living' ? 'Living' : 'Late'}</div>
                </div>
            </div>
            
            ${person.biography ? `
                <div class="detail-section">
                    <h3><i class="fas fa-book"></i> Biography | जीवनी</h3>
                    <p>${person.biography}</p>
                </div>
            ` : ''}
            
            ${person.earlyLife ? `
                <div class="detail-section">
                    <h3><i class="fas fa-child"></i> Early Life | प्रारंभिक जीवन</h3>
                    <p>${person.earlyLife}</p>
                </div>
            ` : ''}
            
            ${person.career ? `
                <div class="detail-section">
                    <h3><i class="fas fa-briefcase"></i> Career Journey | करियर यात्रा</h3>
                    <p>${person.career}</p>
                </div>
            ` : ''}
            
            <div class="detail-section">
                <h3><i class="fas fa-star"></i> Achievements | उपलब्धियां</h3>
                <p>${person.achievements}</p>
            </div>
            
            ${person.awards ? `
                <div class="detail-section">
                    <h3><i class="fas fa-award"></i> Awards & Honors | पुरस्कार और सम्मान</h3>
                    <p>${person.awards}</p>
                </div>
            ` : ''}
            
            ${person.contributions ? `
                <div class="detail-section">
                    <h3><i class="fas fa-hands-helping"></i> Contributions | योगदान</h3>
                    <p>${person.contributions}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('profileModal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Make showProfile available globally
window.showProfile = showProfile;
