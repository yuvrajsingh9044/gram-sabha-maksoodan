// Sports Page JavaScript

// Sample Players Data
const playersData = [
    {
        id: 1,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'maksoodan',
        sport: 'cricket',
        position: 'Batsman',
        achievements: 'Scored 500+ runs in village tournaments, Best Batsman Award 2025',
        photo: '../images/players/player1.jpg'
    },
    {
        id: 2,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'jafarapur',
        sport: 'cricket',
        position: 'Bowler',
        achievements: 'Took 30+ wickets in inter-village matches',
        photo: '../images/players/player2.jpg'
    },
    {
        id: 3,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'maksoodan',
        sport: 'volleyball',
        position: 'Spiker',
        achievements: 'District level player, represented Sultanpur in state championship',
        photo: '../images/players/player3.jpg'
    },
    {
        id: 4,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'kharahna',
        sport: 'kabaddi',
        position: 'Raider',
        achievements: 'Block level kabaddi champion 2024, 50+ successful raids',
        photo: '../images/players/player4.jpg'
    },
    {
        id: 5,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'jiyanpur',
        sport: 'badminton',
        position: 'Singles Player',
        achievements: 'Won 5 inter-village badminton tournaments',
        photo: '../images/players/player5.jpg'
    },
    {
        id: 6,
        name: '[Player Name]',
        fatherName: 'S/o [Father Name]',
        area: 'barraiya',
        sport: 'cricket',
        position: 'All-rounder',
        achievements: 'Man of the Match in Village Premier League 2025',
        photo: '../images/players/player6.jpg'
    }
];

// Sample Tournaments Data
const tournamentsData = [
    {
        id: 1,
        name: 'Village Premier League 2025',
        year: 2025,
        sport: 'Cricket',
        winner: 'Maksoodan Warriors',
        runnerUp: 'Jafarapur Strikers',
        venue: 'Maksoodan Cricket Ground',
        photos: ['../images/tournaments/vpl2025.jpg']
    },
    {
        id: 2,
        name: 'Inter-Village Volleyball Championship',
        year: 2024,
        sport: 'Volleyball',
        winner: 'Maksoodan Volleyball Team',
        runnerUp: 'Neighboring Village Team',
        venue: 'School Playground',
        photos: ['../images/tournaments/volleyball2024.jpg']
    },
    {
        id: 3,
        name: 'Block Level Kabaddi Tournament',
        year: 2024,
        sport: 'Kabaddi',
        winner: 'Runner-up',
        runnerUp: 'Maksoodan Kabaddi Team',
        venue: 'Block Sports Complex',
        photos: ['../images/tournaments/kabaddi2024.jpg']
    },
    {
        id: 4,
        name: 'Annual Sports Day 2025',
        year: 2025,
        sport: 'Multiple Sports',
        winner: 'Various Winners',
        runnerUp: 'Various Participants',
        venue: 'School Playground',
        photos: ['../images/tournaments/sportsday2025.jpg']
    }
];

// Sample Gallery Data
const galleryData = [
    { category: 'matches', image: '../images/gallery/match1.jpg', caption: 'Cricket Match - Village Premier League' },
    { category: 'matches', image: '../images/gallery/match2.jpg', caption: 'Volleyball Championship Final' },
    { category: 'practice', image: '../images/gallery/practice1.jpg', caption: 'Cricket Practice Session' },
    { category: 'practice', image: '../images/gallery/practice2.jpg', caption: 'Kabaddi Training' },
    { category: 'ceremonies', image: '../images/gallery/trophy1.jpg', caption: 'Trophy Distribution Ceremony' },
    { category: 'ceremonies', image: '../images/gallery/trophy2.jpg', caption: 'Award Ceremony 2025' },
    { category: 'events', image: '../images/gallery/event1.jpg', caption: 'Annual Sports Day Opening' },
    { category: 'events', image: '../images/gallery/event2.jpg', caption: 'Youth Sports Festival' }
];

// Team Details Data
const teamsData = {
    cricket: {
        name: 'Cricket Team – Maksoodan',
        captain: '[Captain Name]',
        viceCaptain: '[Vice-Captain Name]',
        players: [
            { name: '[Player 1]', role: 'Batsman' },
            { name: '[Player 2]', role: 'Bowler' },
            { name: '[Player 3]', role: 'All-rounder' },
            { name: '[Player 4]', role: 'Wicket Keeper' },
            { name: '[Player 5]', role: 'Batsman' },
            { name: '[Player 6]', role: 'Bowler' },
            { name: '[Player 7]', role: 'All-rounder' },
            { name: '[Player 8]', role: 'Batsman' },
            { name: '[Player 9]', role: 'Bowler' },
            { name: '[Player 10]', role: 'Batsman' },
            { name: '[Player 11]', role: 'Bowler' }
        ],
        achievements: [
            'Village Premier League Champions 2025',
            'Inter-Village Tournament Winners 2024',
            'Block Level Runners-up 2024'
        ]
    },
    volleyball: {
        name: 'Volleyball Team – Maksoodan',
        captain: '[Captain Name]',
        players: [
            { name: '[Player 1]', role: 'Spiker' },
            { name: '[Player 2]', role: 'Setter' },
            { name: '[Player 3]', role: 'Blocker' },
            { name: '[Player 4]', role: 'Libero' },
            { name: '[Player 5]', role: 'Spiker' },
            { name: '[Player 6]', role: 'Setter' }
        ],
        achievements: [
            'Inter-Village Champions 2024',
            'District Level Participation 2024',
            'Best Team Award 2023'
        ]
    },
    kabaddi: {
        name: 'Kabaddi Team – Maksoodan',
        captain: '[Captain Name]',
        players: [
            { name: '[Player 1]', role: 'Raider' },
            { name: '[Player 2]', role: 'Defender' },
            { name: '[Player 3]', role: 'All-rounder' },
            { name: '[Player 4]', role: 'Raider' },
            { name: '[Player 5]', role: 'Defender' },
            { name: '[Player 6]', role: 'All-rounder' },
            { name: '[Player 7]', role: 'Raider' }
        ],
        achievements: [
            'Block Level Runners-up 2024',
            'Inter-Village Tournament Winners 2023',
            'Best Raider Award 2024'
        ]
    },
    badminton: {
        name: 'Badminton Team – Maksoodan',
        captain: '[Captain Name]',
        players: [
            { name: '[Player 1]', role: 'Singles' },
            { name: '[Player 2]', role: 'Singles' },
            { name: '[Player 3]', role: 'Doubles' },
            { name: '[Player 4]', role: 'Doubles' },
            { name: '[Player 5]', role: 'Mixed Doubles' },
            { name: '[Player 6]', role: 'Mixed Doubles' }
        ],
        achievements: [
            'Inter-Village Singles Champion 2025',
            'Doubles Tournament Winners 2024',
            'District Level Participation'
        ]
    },
    traditional: {
        name: 'Traditional Games – Bolli Ball',
        captain: '[Captain Name]',
        players: [
            { name: '[Player 1]', role: 'Player' },
            { name: '[Player 2]', role: 'Player' },
            { name: '[Player 3]', role: 'Player' },
            { name: '[Player 4]', role: 'Player' },
            { name: '[Player 5]', role: 'Player' }
        ],
        achievements: [
            'Village Festival Champions',
            'Traditional Games Preservation Award',
            'Cultural Sports Promotion'
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    animateCounters();
    renderPlayers();
    renderTournaments();
    renderGallery();
    setupFilters();
    setupGalleryTabs();
    setupModals();
    setupForm();
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

// Render players
function renderPlayers() {
    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';
    
    playersData.forEach(player => {
        const card = createPlayerCard(player);
        grid.appendChild(card);
    });
}

// Create player card
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.dataset.sport = player.sport;
    card.dataset.name = player.name.toLowerCase();
    card.onclick = () => showPlayerProfile(player.id);
    
    card.innerHTML = `
        <img src="${player.photo}" alt="${player.name}" class="player-photo" 
             onerror="this.src='../images/placeholder-player.jpg'">
        <div class="player-info">
            <div class="player-name">${player.name}</div>
            <div class="player-father">${player.fatherName}</div>
            <span class="player-sport">${getSportName(player.sport)}</span>
            <div class="player-area"><i class="fas fa-map-marker-alt"></i> ${formatArea(player.area)}</div>
            <div class="player-achievements">${player.achievements}</div>
        </div>
    `;
    
    return card;
}

// Render tournaments
function renderTournaments() {
    const container = document.getElementById('tournamentsContainer');
    container.innerHTML = '';
    
    tournamentsData.forEach(tournament => {
        const card = createTournamentCard(tournament);
        container.appendChild(card);
    });
}

// Create tournament card
function createTournamentCard(tournament) {
    const card = document.createElement('div');
    card.className = 'tournament-card';
    
    card.innerHTML = `
        <div class="tournament-header">
            <div class="tournament-name">${tournament.name}</div>
            <div class="tournament-year">${tournament.year}</div>
        </div>
        <div class="tournament-details">
            <div class="tournament-detail">
                <strong>Sport:</strong> ${tournament.sport}
            </div>
            <div class="tournament-detail">
                <strong>Winner:</strong> ${tournament.winner}
            </div>
            <div class="tournament-detail">
                <strong>Runner-up:</strong> ${tournament.runnerUp}
            </div>
            <div class="tournament-detail">
                <strong>Venue:</strong> ${tournament.venue}
            </div>
        </div>
    `;
    
    return card;
}

// Render gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    
    galleryData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.dataset.category = item.category;
        
        div.innerHTML = `
            <img src="${item.image}" alt="${item.caption}" 
                 onerror="this.src='../images/placeholder-gallery.jpg'">
            <div class="gallery-caption">${item.caption}</div>
        `;
        
        grid.appendChild(div);
    });
}

// Setup filters
function setupFilters() {
    const searchInput = document.getElementById('playerSearch');
    const sportFilter = document.getElementById('sportFilter');
    
    searchInput.addEventListener('input', applyFilters);
    sportFilter.addEventListener('change', applyFilters);
}

// Apply filters
function applyFilters() {
    const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
    const sportValue = document.getElementById('sportFilter').value;
    
    const allCards = document.querySelectorAll('.player-card');
    
    allCards.forEach(card => {
        const matchesSearch = card.dataset.name.includes(searchTerm);
        const matchesSport = sportValue === 'all' || card.dataset.sport === sportValue;
        
        if (matchesSearch && matchesSport) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
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

// Show team details
function showTeamDetails(teamType) {
    const team = teamsData[teamType];
    if (!team) return;
    
    const modal = document.getElementById('teamModal');
    const modalBody = document.getElementById('teamModalBody');
    
    modalBody.innerHTML = `
        <div style="padding: 40px;">
            <h2 style="color: #1a237e; font-size: 32px; text-align: center; margin-bottom: 30px;">
                ${team.name}
            </h2>
            
            <div style="background: #f5f5f5; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="color: #1a237e; margin-bottom: 15px;">Team Leadership</h3>
                <p style="font-size: 16px; margin-bottom: 10px;">
                    <strong>Captain:</strong> ${team.captain}
                </p>
                ${team.viceCaptain ? `
                    <p style="font-size: 16px;">
                        <strong>Vice-Captain:</strong> ${team.viceCaptain}
                    </p>
                ` : ''}
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #ff9800; padding-bottom: 10px;">
                    Team Players
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
                    ${team.players.map(player => `
                        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                            <strong>${player.name}</strong><br>
                            <span style="color: #666; font-size: 14px;">${player.role}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #ff9800; padding-bottom: 10px;">
                    Achievements
                </h3>
                <ul style="list-style: none; padding: 0;">
                    ${team.achievements.map(achievement => `
                        <li style="padding: 10px; background: #fff3e0; margin-bottom: 10px; border-radius: 6px; border-left: 4px solid #ff9800;">
                            <i class="fas fa-trophy" style="color: #ff9800; margin-right: 10px;"></i>
                            ${achievement}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Show player profile
function showPlayerProfile(playerId) {
    const player = playersData.find(p => p.id === playerId);
    if (!player) return;
    
    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('playerModalBody');
    
    modalBody.innerHTML = `
        <div style="padding: 40px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="${player.photo}" alt="${player.name}" 
                     style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 5px solid #ff9800; margin-bottom: 20px;"
                     onerror="this.src='../images/placeholder-player.jpg'">
                <h2 style="color: #1a237e; font-size: 28px; margin-bottom: 10px;">${player.name}</h2>
                <p style="color: #666; font-size: 16px; margin-bottom: 15px;">${player.fatherName}</p>
                <span style="display: inline-block; padding: 8px 20px; background: #e3f2fd; color: #1976d2; border-radius: 20px; font-weight: bold;">
                    ${getSportName(player.sport)}
                </span>
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div>
                        <strong style="color: #666;">Position:</strong><br>
                        <span style="font-size: 16px;">${player.position}</span>
                    </div>
                    <div>
                        <strong style="color: #666;">Area:</strong><br>
                        <span style="font-size: 16px;">${formatArea(player.area)}</span>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 style="color: #1a237e; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #ff9800; padding-bottom: 10px;">
                    <i class="fas fa-trophy"></i> Achievements
                </h4>
                <p style="font-size: 16px; line-height: 1.8; color: #555;">${player.achievements}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Setup modals
function setupModals() {
    const teamModal = document.getElementById('teamModal');
    const playerModal = document.getElementById('playerModal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    closeButtons.forEach(btn => {
        btn.onclick = function() {
            teamModal.style.display = 'none';
            playerModal.style.display = 'none';
        };
    });
    
    window.onclick = function(event) {
        if (event.target === teamModal) {
            teamModal.style.display = 'none';
        }
        if (event.target === playerModal) {
            playerModal.style.display = 'none';
        }
    };
}

// Setup form
function setupForm() {
    const form = document.getElementById('sportsRegistrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('playerName').value,
            fatherName: document.getElementById('fatherName').value,
            age: document.getElementById('age').value,
            mobile: document.getElementById('mobile').value,
            area: document.getElementById('area').value,
            sport: document.getElementById('sport').value,
            experience: document.getElementById('experience').value
        };
        
        // Validate mobile number
        if (!/^[0-9]{10}$/.test(formData.mobile)) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        
        alert('Registration Successful!\n\nThank you for registering. Our team will contact you soon.\n\nधन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।');
        form.reset();
    });
}

// Helper functions
function getSportName(sport) {
    const sportNames = {
        'cricket': 'Cricket',
        'volleyball': 'Volleyball',
        'kabaddi': 'Kabaddi',
        'badminton': 'Badminton',
        'traditional': 'Traditional Games'
    };
    return sportNames[sport] || sport;
}

function formatArea(area) {
    const areaNames = {
        'maksoodan': 'Maksoodan',
        'jafarapur': 'Jafarapur',
        'mishrapur': 'Mishrapur',
        'kharahna': 'Kharahna',
        'jiyanpur': 'Jiyanpur',
        'jhaliya': 'Jhaliya',
        'barraiya': 'Barraiya'
    };
    return areaNames[area] || area;
}

// Make functions globally available
window.showTeamDetails = showTeamDetails;
window.showPlayerProfile = showPlayerProfile;
