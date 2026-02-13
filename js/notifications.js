// Notifications Page JavaScript

// Sample notifications data
const notificationsData = [
    {
        id: 1,
        title: 'Gram Sabha Meeting - February 2026',
        titleHindi: 'ग्राम सभा बैठक - फरवरी 2026',
        category: 'meetings',
        description: 'General Gram Sabha meeting scheduled for discussion on village development projects and budget allocation for FY 2026-27.',
        issueDate: '2026-02-10',
        lastDate: '2026-02-20',
        issuedBy: 'Gram Pradhan',
        attachment: 'meeting-notice-feb-2026.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'All villagers are requested to attend the Gram Sabha meeting on 20th February 2026 at 10:00 AM at the Community Hall. Agenda includes discussion on ongoing development projects, budget approval, and new scheme implementations.'
    },
    {
        id: 2,
        title: 'PMAY Housing Scheme - New Applications',
        titleHindi: 'पीएमएवाई आवास योजना - नए आवेदन',
        category: 'schemes',
        description: 'Applications invited for Pradhan Mantri Awas Yojana (PMAY) housing scheme. Eligible families can apply before the deadline.',
        issueDate: '2026-02-05',
        lastDate: '2026-02-28',
        issuedBy: 'Block Development Office',
        attachment: 'pmay-application-form.pdf',
        status: 'closing-soon',
        isUrgent: false,
        fullDetails: 'Eligible families without pucca houses can apply for PMAY scheme. Required documents: Aadhaar card, income certificate, land documents. Submit applications at Gram Panchayat office.'
    },
    {
        id: 3,
        title: 'Emergency Alert - Flood Warning',
        titleHindi: 'आपातकालीन चेतावनी - बाढ़ की चेतावनी',
        category: 'emergency',
        description: 'Heavy rainfall expected in the region. Villagers near Gomti River are advised to take necessary precautions.',
        issueDate: '2026-02-12',
        lastDate: '2026-02-15',
        issuedBy: 'District Administration',
        attachment: 'flood-advisory.pdf',
        status: 'urgent',
        isUrgent: true,
        fullDetails: 'Due to heavy rainfall forecast, water level in Gomti River may rise. Residents of Kodadiya Ghat, Baniyavta Ghat, Nisad Ghat, and Anemau Ghat areas should remain alert. Emergency helpline: 1077'
    },
    {
        id: 4,
        title: 'Road Construction Tender Notice',
        titleHindi: 'सड़क निर्माण टेंडर नोटिस',
        category: 'tenders',
        description: 'Tender invited for construction of CC road from Maksoodan to Kharahna (2.5 km). Interested contractors may submit bids.',
        issueDate: '2026-02-01',
        lastDate: '2026-02-25',
        issuedBy: 'Gram Panchayat',
        attachment: 'tender-road-construction.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Estimated cost: ₹18 Lakh. Technical and financial bids to be submitted separately. Site visit on 15th February 2026. Contact Panchayat Secretary for tender documents.'
    },
    {
        id: 5,
        title: 'Vaccination Camp - Polio & Measles',
        titleHindi: 'टीकाकरण शिविर - पोलियो और खसरा',
        category: 'health',
        description: 'Free vaccination camp for children (0-5 years) organized by Health Department at Primary Health Center.',
        issueDate: '2026-02-08',
        lastDate: '2026-02-18',
        issuedBy: 'Health Department',
        attachment: 'vaccination-schedule.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Date: 18th February 2026, Time: 9:00 AM to 4:00 PM, Venue: Primary Health Center, Maksoodan. Parents should bring child health cards. Free vaccines for Polio, Measles, and other routine immunizations.'
    },
    {
        id: 6,
        title: 'Scholarship Applications - SC/ST Students',
        titleHindi: 'छात्रवृत्ति आवेदन - एससी/एसटी छात्र',
        category: 'education',
        description: 'Pre-matric and post-matric scholarship applications open for SC/ST students. Apply online before deadline.',
        issueDate: '2026-01-25',
        lastDate: '2026-02-28',
        issuedBy: 'Education Department',
        attachment: 'scholarship-guidelines.pdf',
        status: 'closing-soon',
        isUrgent: false,
        fullDetails: 'Eligible students studying in class 9th to post-graduation can apply. Required documents: caste certificate, income certificate, previous year marksheet, bank account details. Apply at: scholarship.up.gov.in'
    },
    {
        id: 7,
        title: 'Panchayat Election Notice - 2026',
        titleHindi: 'पंचायत चुनाव सूचना - 2026',
        category: 'election',
        description: 'Gram Panchayat elections scheduled for April 2026. Voter list verification in progress.',
        issueDate: '2026-02-01',
        lastDate: '2026-02-20',
        issuedBy: 'State Election Commission',
        attachment: 'election-schedule.pdf',
        status: 'new',
        isUrgent: true,
        fullDetails: 'Panchayat elections will be held in April 2026. Voter list displayed at Panchayat office. Claims and objections can be filed till 20th February 2026. Contact: District Election Officer'
    },
    {
        id: 8,
        title: 'MNREGA Work Allocation - March 2026',
        titleHindi: 'मनरेगा कार्य आवंटन - मार्च 2026',
        category: 'schemes',
        description: 'New MNREGA works sanctioned for March 2026. Job card holders can register for work at Panchayat office.',
        issueDate: '2026-02-10',
        lastDate: '2026-03-01',
        issuedBy: 'MNREGA Department',
        attachment: 'mnrega-work-list.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Works include: pond excavation, drainage construction, plantation. Wage rate: ₹221 per day. Registration open from 13th to 28th February 2026. Bring job card and Aadhaar card.'
    },
    {
        id: 9,
        title: 'Community Hall Inauguration',
        titleHindi: 'सामुदायिक भवन का उद्घाटन',
        category: 'panchayat',
        description: 'Newly constructed Community Hall will be inaugurated by District Magistrate on 25th February 2026.',
        issueDate: '2026-02-11',
        lastDate: '2026-02-25',
        issuedBy: 'Gram Pradhan',
        attachment: 'inauguration-invite.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'The new Community Hall built under Gram Panchayat development fund will be inaugurated on 25th February 2026 at 11:00 AM. All villagers are invited to attend the ceremony.'
    },
    {
        id: 10,
        title: 'Drainage System Development Project',
        titleHindi: 'जल निकासी प्रणाली विकास परियोजना',
        category: 'development',
        description: 'New drainage system project approved for Jiyanpur and Jhaliya hamlets. Work to commence in March 2026.',
        issueDate: '2026-02-05',
        lastDate: null,
        issuedBy: 'Gram Panchayat',
        attachment: 'drainage-project-details.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Budget: ₹12 Lakh. Project includes construction of 3 km drainage line covering Jiyanpur and Jhaliya areas. Expected completion: June 2026. Contractor: XYZ Constructions.'
    },
    {
        id: 11,
        title: 'Ration Card Verification Drive',
        titleHindi: 'राशन कार्ड सत्यापन अभियान',
        category: 'panchayat',
        description: 'Ration card verification and updation drive. All cardholders must verify their details at Fair Price Shop.',
        issueDate: '2026-01-20',
        lastDate: '2026-02-28',
        issuedBy: 'Food & Supply Department',
        attachment: 'ration-card-verification.pdf',
        status: 'closing-soon',
        isUrgent: false,
        fullDetails: 'Mandatory verification for all ration cardholders. Bring original ration card, Aadhaar card, and address proof. Unverified cards will be suspended. Verification at Fair Price Shop, Maksoodan.'
    },
    {
        id: 12,
        title: 'Solar Street Light Installation - Jafarapur',
        titleHindi: 'सोलर स्ट्रीट लाइट स्थापना - जाफरापुर',
        category: 'development',
        description: 'Installation of 45 solar street lights in Jafarapur area under renewable energy initiative.',
        issueDate: '2026-02-08',
        lastDate: null,
        issuedBy: 'Energy Department',
        attachment: 'solar-light-project.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Project cost: ₹12 Lakh. Installation work started on 1st February 2026. Expected completion: March 2026. This will provide better lighting and safety in Jafarapur hamlet.'
    },
    {
        id: 13,
        title: 'Kisan Credit Card Camp',
        titleHindi: 'किसान क्रेडिट कार्ड शिविर',
        category: 'schemes',
        description: 'Special camp for Kisan Credit Card applications and renewals organized by Agriculture Department.',
        issueDate: '2026-02-09',
        lastDate: '2026-02-22',
        issuedBy: 'Agriculture Department',
        attachment: 'kcc-camp-details.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Date: 22nd February 2026, Venue: Panchayat Bhawan. Farmers can apply for new KCC or renew existing cards. Required documents: land records, Aadhaar, bank passbook. Bank officials will be present.'
    },
    {
        id: 14,
        title: 'Primary School Renovation Tender',
        titleHindi: 'प्राथमिक विद्यालय नवीनीकरण टेंडर',
        category: 'tenders',
        description: 'Tender notice for renovation and repair work of Primary School building in Maksoodan.',
        issueDate: '2026-01-28',
        lastDate: '2026-02-20',
        issuedBy: 'Education Department',
        attachment: 'school-renovation-tender.pdf',
        status: 'closing-soon',
        isUrgent: false,
        fullDetails: 'Estimated cost: ₹18 Lakh. Scope of work: roof repair, painting, toilet renovation, electrical work. Pre-bid meeting: 15th February 2026. Submit bids at District Education Office.'
    },
    {
        id: 15,
        title: 'Ayushman Bharat Health Card Camp',
        titleHindi: 'आयुष्मान भारत स्वास्थ्य कार्ड शिविर',
        category: 'health',
        description: 'Free health card registration camp under Ayushman Bharat scheme for eligible families.',
        issueDate: '2026-02-07',
        lastDate: '2026-02-24',
        issuedBy: 'Health Department',
        attachment: 'ayushman-camp-schedule.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Date: 24th February 2026, Time: 10:00 AM to 5:00 PM, Venue: Primary Health Center. Eligible families can get free health cards for cashless treatment up to ₹5 Lakh. Bring ration card and Aadhaar.'
    },
    {
        id: 16,
        title: 'Water Quality Testing Report',
        titleHindi: 'जल गुणवत्ता परीक्षण रिपोर्ट',
        category: 'panchayat',
        description: 'Water quality testing completed for all tubewells. Report available at Panchayat office.',
        issueDate: '2026-02-06',
        lastDate: null,
        issuedBy: 'Public Health Engineering',
        attachment: 'water-quality-report.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'All 12 tubewells in the village have been tested for water quality. Results show safe drinking water standards. Detailed report available for public viewing at Panchayat office.'
    },
    {
        id: 17,
        title: 'Swachh Bharat Mission - Cleanliness Drive',
        titleHindi: 'स्वच्छ भारत मिशन - स्वच्छता अभियान',
        category: 'schemes',
        description: 'Village-wide cleanliness drive on 28th February 2026. All residents requested to participate.',
        issueDate: '2026-02-12',
        lastDate: '2026-02-28',
        issuedBy: 'Gram Panchayat',
        attachment: 'cleanliness-drive-plan.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Mass cleanliness drive under Swachh Bharat Mission. Activities: waste collection, drain cleaning, plantation. Assemble at 7:00 AM at Panchayat Bhawan. Refreshments will be provided.'
    },
    {
        id: 18,
        title: 'Birth & Death Registration Notice',
        titleHindi: 'जन्म और मृत्यु पंजीकरण सूचना',
        category: 'panchayat',
        description: 'Mandatory registration of births and deaths within 21 days. Register at Panchayat office.',
        issueDate: '2026-01-15',
        lastDate: null,
        issuedBy: 'Gram Panchayat',
        attachment: 'registration-guidelines.pdf',
        status: 'closed',
        isUrgent: false,
        fullDetails: 'As per government regulations, all births and deaths must be registered within 21 days. Late registration attracts penalty. Required documents: hospital certificate or affidavit. Free registration at Panchayat office.'
    },
    {
        id: 19,
        title: 'Pension Distribution - February 2026',
        titleHindi: 'पेंशन वितरण - फरवरी 2026',
        category: 'schemes',
        description: 'Old age, widow, and disability pension distribution on 15th February 2026 at Panchayat office.',
        issueDate: '2026-02-10',
        lastDate: '2026-02-15',
        issuedBy: 'Social Welfare Department',
        attachment: 'pension-list.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Pension distribution for all beneficiaries on 15th February 2026 from 10:00 AM to 4:00 PM. Beneficiaries must bring Aadhaar card and pension passbook. Authorized person can collect with proper documents.'
    },
    {
        id: 20,
        title: 'Tubewell Installation - Kharahna',
        titleHindi: 'ट्यूबवेल स्थापना - खरहना',
        category: 'development',
        description: 'New tubewell installation approved for Kharahna hamlet under Jal Jeevan Mission.',
        issueDate: '2026-02-11',
        lastDate: null,
        issuedBy: 'Jal Jeevan Mission',
        attachment: 'tubewell-project.pdf',
        status: 'new',
        isUrgent: false,
        fullDetails: 'Budget: ₹5 Lakh. Installation of 1 new tubewell with overhead tank in Kharahna area. Work to start in May 2026. This will provide clean drinking water to 80 families.'
    }
];

// Global variables
let currentCategory = 'all';
let currentYear = '2026';
let currentSort = 'date-desc';
let filteredNotifications = [...notificationsData];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderNotifications();
    renderUrgentNotices();
    setupCategoryFilters();
    setupModal();
    startTicker();
});

// Render all notifications
function renderNotifications() {
    const container = document.getElementById('notificationsList');
    container.innerHTML = '';
    
    // Apply filters
    let filtered = notificationsData.filter(n => {
        const matchesCategory = currentCategory === 'all' || n.category === currentCategory;
        const matchesYear = n.issueDate.startsWith(currentYear);
        return matchesCategory && matchesYear;
    });
    
    // Apply sorting
    filtered = sortNotificationsArray(filtered, currentSort);
    
    filteredNotifications = filtered;
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No notifications found</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(notification => {
        container.appendChild(createNotificationCard(notification));
    });
}

// Create notification card
function createNotificationCard(notification) {
    const card = document.createElement('div');
    card.className = `notification-card ${notification.category}`;
    card.onclick = () => showNotificationDetail(notification.id);
    
    // Determine status badge
    let statusBadge = '';
    let statusClass = notification.status;
    
    if (notification.status === 'urgent' || notification.isUrgent) {
        statusBadge = '<span class="status-badge urgent">URGENT</span>';
    } else if (notification.status === 'new') {
        statusBadge = '<span class="status-badge new">NEW</span>';
    } else if (notification.status === 'closing-soon') {
        statusBadge = '<span class="status-badge closing-soon">CLOSING SOON</span>';
    } else if (notification.status === 'closed') {
        statusBadge = '<span class="status-badge closed">CLOSED</span>';
    }
    
    card.innerHTML = `
        <div class="notification-header">
            <div class="notification-title">
                <h3>${notification.title}</h3>
                <h4>${notification.titleHindi}</h4>
            </div>
            ${statusBadge}
        </div>
        <div class="notification-meta">
            <span><i class="fas fa-calendar"></i> Issue Date: ${formatDate(notification.issueDate)}</span>
            ${notification.lastDate ? `<span><i class="fas fa-clock"></i> Last Date: ${formatDate(notification.lastDate)}</span>` : ''}
            <span><i class="fas fa-user"></i> ${notification.issuedBy}</span>
        </div>
        <div class="notification-description">
            ${notification.description}
        </div>
        <div class="notification-footer">
            <span class="category-tag">${getCategoryName(notification.category)}</span>
            ${notification.attachment ? `
                <button class="download-btn" onclick="event.stopPropagation(); downloadAttachment('${notification.attachment}')">
                    <i class="fas fa-download"></i> Download
                </button>
            ` : ''}
        </div>
    `;
    
    return card;
}

// Render urgent notices
function renderUrgentNotices() {
    const container = document.getElementById('urgentNotices');
    const urgentNotices = notificationsData.filter(n => n.isUrgent || n.status === 'urgent');
    
    if (urgentNotices.length === 0) {
        document.getElementById('urgentSection').style.display = 'none';
        return;
    }
    
    container.innerHTML = '';
    urgentNotices.forEach(notification => {
        const card = createNotificationCard(notification);
        container.appendChild(card);
    });
}

// Setup category filters
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.getAttribute('data-category');
            renderNotifications();
        });
    });
}

// Search notifications
function searchNotices() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        renderNotifications();
        return;
    }
    
    const container = document.getElementById('notificationsList');
    container.innerHTML = '';
    
    const results = notificationsData.filter(n => {
        return n.title.toLowerCase().includes(searchTerm) ||
               n.titleHindi.includes(searchTerm) ||
               n.description.toLowerCase().includes(searchTerm) ||
               n.issuedBy.toLowerCase().includes(searchTerm) ||
               n.category.toLowerCase().includes(searchTerm);
    });
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No results found for "${searchTerm}"</p>
            </div>
        `;
        return;
    }
    
    results.forEach(notification => {
        container.appendChild(createNotificationCard(notification));
    });
}

// Sort notifications
function sortNotifications(sortValue) {
    currentSort = sortValue;
    renderNotifications();
}

function sortNotificationsArray(notifications, sortValue) {
    const sorted = [...notifications];
    
    switch(sortValue) {
        case 'date-desc':
            return sorted.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
        case 'date-asc':
            return sorted.sort((a, b) => new Date(a.issueDate) - new Date(b.issueDate));
        case 'title':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return sorted;
    }
}

// Filter by year
function filterByYear(year) {
    currentYear = year;
    renderNotifications();
}

// Show notification detail modal
function showNotificationDetail(notificationId) {
    const notification = notificationsData.find(n => n.id === notificationId);
    if (!notification) return;
    
    const modal = document.getElementById('notificationModal');
    const modalBody = document.getElementById('modalBody');
    
    let statusBadge = '';
    if (notification.status === 'urgent' || notification.isUrgent) {
        statusBadge = '<span class="status-badge urgent">URGENT</span>';
    } else if (notification.status === 'new') {
        statusBadge = '<span class="status-badge new">NEW</span>';
    } else if (notification.status === 'closing-soon') {
        statusBadge = '<span class="status-badge closing-soon">CLOSING SOON</span>';
    } else if (notification.status === 'closed') {
        statusBadge = '<span class="status-badge closed">CLOSED</span>';
    }
    
    modalBody.innerHTML = `
        <div style="padding: 40px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; margin-bottom: 15px;">
                    ${statusBadge}
                </div>
                <h2 style="color: #1a237e; font-size: 28px; margin-bottom: 10px;">${notification.title}</h2>
                <h3 style="color: #d84315; font-size: 22px; margin-bottom: 20px;">${notification.titleHindi}</h3>
                <div style="display: inline-block; padding: 8px 20px; background: #e3f2fd; color: #1976d2; border-radius: 20px; font-weight: bold;">
                    ${getCategoryName(notification.category)}
                </div>
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div>
                        <strong style="color: #666;">Issue Date:</strong><br>
                        <span style="font-size: 16px;">${formatDate(notification.issueDate)}</span>
                    </div>
                    ${notification.lastDate ? `
                        <div>
                            <strong style="color: #666;">Last Date:</strong><br>
                            <span style="font-size: 16px; color: #f44336;">${formatDate(notification.lastDate)}</span>
                        </div>
                    ` : ''}
                    <div>
                        <strong style="color: #666;">Issued By:</strong><br>
                        <span style="font-size: 16px;">${notification.issuedBy}</span>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h4 style="color: #1a237e; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #d84315; padding-bottom: 10px;">
                    <i class="fas fa-info-circle"></i> Description | विवरण
                </h4>
                <p style="font-size: 16px; line-height: 1.8; color: #555;">${notification.description}</p>
            </div>
            
            ${notification.fullDetails ? `
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #1a237e; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #d84315; padding-bottom: 10px;">
                        <i class="fas fa-file-alt"></i> Full Details | पूर्ण विवरण
                    </h4>
                    <p style="font-size: 16px; line-height: 1.8; color: #555;">${notification.fullDetails}</p>
                </div>
            ` : ''}
            
            ${notification.attachment ? `
                <div style="text-align: center; margin-top: 30px;">
                    <button class="download-btn" onclick="downloadAttachment('${notification.attachment}')" 
                            style="padding: 15px 30px; font-size: 16px;">
                        <i class="fas fa-download"></i> Download Attachment
                    </button>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('notificationModal');
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

// Start ticker animation
function startTicker() {
    const tickerText = document.getElementById('tickerText');
    const latestNotices = notificationsData
        .filter(n => n.status === 'new' || n.status === 'urgent')
        .slice(0, 5);
    
    if (latestNotices.length === 0) {
        tickerText.innerHTML = 'No new announcements at this time | इस समय कोई नई घोषणा नहीं';
        return;
    }
    
    const tickerContent = latestNotices.map(n => 
        `<span style="margin-right: 50px;">📢 ${n.title} - ${n.titleHindi}</span>`
    ).join('');
    
    tickerText.innerHTML = tickerContent + tickerContent; // Duplicate for seamless loop
}

// Download attachment
function downloadAttachment(filename) {
    alert(`Downloading: ${filename}\n\nNote: This is a demo. In production, this would download the actual PDF file.`);
    // In production: window.location.href = `/downloads/${filename}`;
}

// Get category name
function getCategoryName(category) {
    const categoryNames = {
        'panchayat': 'Panchayat Notices',
        'schemes': 'Scheme Updates',
        'development': 'Development Projects',
        'meetings': 'Meeting Announcements',
        'tenders': 'Tender Notices',
        'election': 'Election Notices',
        'education': 'Education',
        'health': 'Health & Vaccination',
        'emergency': 'Emergency Alerts'
    };
    return categoryNames[category] || category;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// Make functions globally available
window.searchNotices = searchNotices;
window.sortNotifications = sortNotifications;
window.filterByYear = filterByYear;
window.showNotificationDetail = showNotificationDetail;
window.downloadAttachment = downloadAttachment;
