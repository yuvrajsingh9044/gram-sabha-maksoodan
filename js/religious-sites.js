// Religious Sites JavaScript

// Site data structure
const sitesData = {
    'hanuman-mandir': {
        name: 'Hanuman Mandir',
        nameHindi: 'हनुमान मंदिर',
        category: 'Temple',
        location: 'Maksoodan Main Area',
        deity: 'Lord Hanuman | भगवान हनुमान',
        image: '../images/sites/temple2.jpg',
        history: `The Hanuman Mandir has been a cornerstone of spiritual life in Maksoodan for generations. 
                 This ancient temple, dedicated to Lord Hanuman, stands as a testament to the unwavering devotion 
                 of the village community. The temple has witnessed countless prayers, celebrations, and moments 
                 of divine connection.`,
        renovation: `The temple has undergone several renovations over the years to preserve its sanctity and 
                    improve facilities for devotees. The most recent renovation was completed in [Year], which 
                    included structural improvements and beautification of the temple premises.`,
        festivals: [
            {
                name: 'Hanuman Jayanti',
                description: 'Grand celebration of Lord Hanuman\'s birth with special puja, bhajans, and prasad distribution'
            },
            {
                name: 'Tuesday Worship',
                description: 'Weekly special prayers every Tuesday, considered auspicious for Hanuman worship'
            },
            {
                name: 'Ram Navami',
                description: 'Celebration of Lord Rama\'s birth, as Hanuman is the greatest devotee of Lord Rama'
            }
        ],
        gallery: [
            '../images/sites/hanuman-mandir-1.jpg',
            '../images/sites/hanuman-mandir-2.jpg',
            '../images/sites/hanuman-mandir-3.jpg'
        ]
    },
    'ram-mandir': {
        name: 'Ram Mandir',
        nameHindi: 'राम मंदिर',
        category: 'Temple',
        location: 'Near Village Center, Jafarapur Road',
        deity: 'Lord Shri Ram | भगवान श्री राम',
        image: '../images/sites/temple1.jpg',
        history: `The Ram Mandir is a sacred shrine dedicated to Lord Rama, the seventh avatar of Lord Vishnu. 
                 This temple holds immense significance for the village community and serves as a center for 
                 religious and cultural activities. The temple architecture reflects traditional Hindu temple design.`,
        renovation: `The temple has been maintained with great care by the community. Regular upkeep and periodic 
                    renovations ensure that the temple remains a beautiful and welcoming place of worship.`,
        festivals: [
            {
                name: 'Ram Navami',
                description: 'Nine-day celebration culminating in Lord Rama\'s birth anniversary with Ramayan recitation'
            },
            {
                name: 'Ramayan Path',
                description: 'Regular recitation of the Ramayana, especially during auspicious occasions'
            },
            {
                name: 'Diwali',
                description: 'Celebration of Lord Rama\'s return to Ayodhya with lights and festivities'
            }
        ],
        culturalPrograms: `The temple organizes various cultural programs including Ramayan recitations, bhajan 
                          sandhyas, and religious discourses that bring the community together.`,
        gallery: []
    },
    'durga-mandir': {
        name: 'Durga Mandir',
        nameHindi: 'दुर्गा मंदिर',
        category: 'Temple',
        location: 'Maksoodan Village',
        deity: 'Goddess Durga | माता दुर्गा',
        image: '../images/sites/Shrine.jpg',
        history: `The Durga Mandir is a revered shrine dedicated to Goddess Durga, the divine mother and 
                 embodiment of Shakti. This temple is particularly significant during Navratri when devotees 
                 gather in large numbers to seek the blessings of the goddess.`,
        renovation: `The temple premises have been developed to accommodate the large gatherings during festivals. 
                    Modern facilities have been added while maintaining the traditional sanctity of the shrine.`,
        festivals: [
            {
                name: 'Navratri',
                description: 'Nine nights of worship with special puja, garba, and cultural programs'
            },
            {
                name: 'Durga Puja',
                description: 'Grand celebration with elaborate decorations and community participation'
            },
            {
                name: 'Jagran',
                description: 'All-night devotional singing and worship sessions'
            }
        ],
        annualFair: `An annual fair is organized during Navratri, featuring cultural performances, food stalls, 
                    and community gatherings that strengthen social bonds.`,
        gallery: []
    },
    'kodadiya-ghat': {
        name: 'Kodadiya Ghat',
        nameHindi: 'कोड़दिया घाट',
        category: 'Ghat',
        location: 'West Gomti Bank, Maksoodan Side',
        river: 'River Gomti',
        image: '../images/sites/kodadiya-ghat.jpg',
        description: `Kodadiya Ghat is one of the most important ghats on the Gomti river, serving as a sacred 
                     site for cremation rituals and religious ceremonies. The ghat holds deep spiritual significance 
                     for the community and has been used for generations for performing last rites.`,
        uses: [
            'Cremation Rituals - Final rites for the departed',
            'Religious Bathing - Holy dips during auspicious occasions',
            'Pind Daan - Ancestral offerings and rituals',
            'Shraddh Ceremonies - Annual remembrance rituals for ancestors'
        ],
        facilities: `The ghat is equipped with basic facilities for conducting rituals. The riverbank is accessible 
                    and maintained by the community for religious purposes.`,
        significance: `As per Hindu traditions, performing last rites on the banks of a holy river like Gomti 
                      ensures peace for the departed soul. The ghat serves this sacred purpose for the village.`,
        gallery: []
    },
    'baniyavta-ghat': {
        name: 'Baniyavta Ghat',
        nameHindi: 'बनियावता घाट',
        category: 'Ghat',
        location: 'Gomti Riverbank, Near Baniyavta Locality',
        river: 'River Gomti',
        image: '../images/sites/baniyavta-ghat.jpg',
        description: `Baniyavta Ghat serves the local community for various religious and ritual activities. 
                     The ghat is well-maintained and provides a serene environment for spiritual practices.`,
        uses: [
            'Ritual Activities - Various religious ceremonies',
            'Community Usage - Accessible for all community members',
            'Religious Ceremonies - Festivals and special occasions'
        ],
        accessibility: `The ghat is easily accessible from the Baniyavta locality and surrounding areas. 
                       The approach path is maintained for convenient access.`,
        gallery: []
    },
    'nisad-ghat': {
        name: 'Nisad Ghat',
        nameHindi: 'निषाद घाट',
        category: 'Ghat',
        location: 'Nishad Community Locality, Gomti Bank',
        river: 'River Gomti',
        image: '../images/sites/nisad-ghat.jpg',
        description: `Nisad Ghat holds special cultural significance as it is associated with the Nishad community, 
                     traditionally connected with river-based livelihoods. The ghat represents the deep bond between 
                     the community and the river.`,
        culturalSignificance: `The Nishad community has historically been associated with river navigation, fishing, 
                              and water-based activities. This ghat symbolizes their cultural heritage and traditional 
                              connection with River Gomti.`,
        uses: [
            'Cultural Significance - Heritage of Nishad community',
            'River Livelihood - Traditional fishing and water activities',
            'Community Rituals - Religious and social ceremonies'
        ],
        heritage: `The ghat preserves the cultural identity of the Nishad community and their ancestral relationship 
                  with the river, which has sustained them for generations.`,
        gallery: []
    },
    'anemau-ghat': {
        name: 'Anemau Ghat',
        nameHindi: 'अनेमऊ घाट',
        category: 'Ghat',
        location: 'Gomti Riverbank, Anemau Area',
        river: 'River Gomti',
        image: '../images/sites/anemau-ghat.jpg',
        description: `Anemau Ghat is a sacred site used primarily for funeral rites and religious immersion ceremonies. 
                     The location provides a peaceful setting for performing final rites and spiritual observances.`,
        uses: [
            'Funeral Rites - Cremation and last rites ceremonies',
            'Religious Immersion - Immersion of holy items and ashes',
            'Ceremonial Activities - Various religious rituals'
        ],
        environment: `The ghat is situated in a serene location along the Gomti river, providing an appropriate 
                     atmosphere for solemn religious ceremonies and rituals.`,
        gallery: []
    },
    'madina-masjid': {
        name: 'Madina Masjid',
        nameHindi: 'मदीना मस्जिद',
        category: 'Mosque',
        location: 'Jafarapur / Maksoodan Bazar Area',
        religion: 'Islam',
        image: '../images/sites/madina-masjid.jpg',
        description: `Madina Masjid is the central mosque serving the Muslim community of Gram Sabha Maksoodan. 
                     The mosque is a place of daily prayers, religious education, and community gathering.`,
        established: '[Year if known] - The mosque has been serving the community for many years',
        prayerTimes: `Five daily prayers (Namaz) are offered:
                     - Fajr (Dawn)
                     - Dhuhr (Noon)
                     - Asr (Afternoon)
                     - Maghrib (Sunset)
                     - Isha (Night)
                     
                     Special Jummah (Friday) prayers are held weekly.`,
        occasions: [
            {
                name: 'Eid-ul-Fitr',
                description: 'Celebration marking the end of Ramadan with special prayers and community feast'
            },
            {
                name: 'Eid-ul-Adha',
                description: 'Festival of sacrifice with prayers and distribution of meat to the needy'
            },
            {
                name: 'Ramadan',
                description: 'Holy month of fasting with Taraweeh prayers and community iftars'
            },
            {
                name: 'Jummah Prayer',
                description: 'Weekly congregational Friday prayers with sermon'
            }
        ],
        communityRole: `The mosque serves multiple roles beyond worship:
                       - Islamic education for children and adults
                       - Community gathering space for important discussions
                       - Social welfare activities and charity distribution
                       - Conflict resolution and community guidance
                       - Promoting peace and harmony in the village`,
        harmony: `Madina Masjid stands as a symbol of religious harmony in Maksoodan. The mosque and its community 
                 actively participate in village affairs and maintain cordial relations with people of all faiths.`,
        gallery: []
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    setupModal();
    setupSmoothScroll();
});

// Show site details in modal
function showSiteDetails(siteId) {
    const site = sitesData[siteId];
    if (!site) return;
    
    const modal = document.getElementById('siteModal');
    const modalBody = document.getElementById('modalBody');
    
    let content = `
        <div class="modal-header" style="background: linear-gradient(135deg, #1a237e, #283593); color: white; padding: 40px; border-radius: 15px 15px 0 0;">
            <img src="${site.image}" alt="${site.name}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;" 
                 onerror="this.style.display='none'">
            <h2 style="font-size: 32px; margin-bottom: 10px;">${site.name}</h2>
            <h3 style="font-size: 24px; opacity: 0.9;">${site.nameHindi}</h3>
            <p style="margin-top: 15px; font-size: 18px;"><i class="fas fa-map-marker-alt"></i> ${site.location}</p>
        </div>
        
        <div style="padding: 40px;">
    `;
    
    // Category-specific content
    if (site.category === 'Temple') {
        content += `
            <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #ff9933;">
                <h3 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-om"></i> Deity | देवता</h3>
                <p style="font-size: 18px; color: #555;">${site.deity}</p>
            </div>
            
            ${site.history ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #ff9933; padding-bottom: 10px;">
                        <i class="fas fa-book"></i> Historical Background | ऐतिहासिक पृष्ठभूमि
                    </h3>
                    <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: justify;">${site.history}</p>
                </div>
            ` : ''}
            
            ${site.renovation ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #ff9933; padding-bottom: 10px;">
                        <i class="fas fa-tools"></i> Renovation History | नवीनीकरण इतिहास
                    </h3>
                    <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: justify;">${site.renovation}</p>
                </div>
            ` : ''}
            
            ${site.festivals && site.festivals.length > 0 ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #ff9933; padding-bottom: 10px;">
                        <i class="fas fa-calendar-alt"></i> Festivals Celebrated | मनाए जाने वाले त्योहार
                    </h3>
                    ${site.festivals.map(festival => `
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid #ff9933;">
                            <h4 style="color: #d84315; margin-bottom: 8px;">${festival.name}</h4>
                            <p style="color: #555; line-height: 1.7;">${festival.description}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${site.culturalPrograms ? `
                <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
                    <h4 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-music"></i> Cultural Programs</h4>
                    <p style="color: #555; line-height: 1.7;">${site.culturalPrograms}</p>
                </div>
            ` : ''}
        `;
    } else if (site.category === 'Ghat') {
        content += `
            <div style="background: #e1f5fe; padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #2196f3;">
                <h3 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-water"></i> River | नदी</h3>
                <p style="font-size: 18px; color: #555;">${site.river}</p>
            </div>
            
            ${site.description ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #2196f3; padding-bottom: 10px;">
                        <i class="fas fa-info-circle"></i> Description | विवरण
                    </h3>
                    <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: justify;">${site.description}</p>
                </div>
            ` : ''}
            
            ${site.uses && site.uses.length > 0 ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #2196f3; padding-bottom: 10px;">
                        <i class="fas fa-list"></i> Primary Uses | प्राथमिक उपयोग
                    </h3>
                    <ul style="list-style: none; padding: 0;">
                        ${site.uses.map(use => `
                            <li style="background: #f9f9f9; padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid #2196f3;">
                                <i class="fas fa-check-circle" style="color: #2196f3; margin-right: 10px;"></i>${use}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${site.culturalSignificance ? `
                <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #ff9800;">
                    <h4 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-star"></i> Cultural Significance</h4>
                    <p style="color: #555; line-height: 1.7;">${site.culturalSignificance}</p>
                </div>
            ` : ''}
            
            ${site.significance ? `
                <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
                    <h4 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-praying-hands"></i> Spiritual Significance</h4>
                    <p style="color: #555; line-height: 1.7;">${site.significance}</p>
                </div>
            ` : ''}
        `;
    } else if (site.category === 'Mosque') {
        content += `
            ${site.description ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">
                        <i class="fas fa-info-circle"></i> About | विवरण
                    </h3>
                    <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: justify;">${site.description}</p>
                </div>
            ` : ''}
            
            ${site.prayerTimes ? `
                <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #4caf50;">
                    <h3 style="color: #1a237e; margin-bottom: 15px;"><i class="fas fa-clock"></i> Prayer Times | नमाज़ का समय</h3>
                    <p style="color: #555; line-height: 1.8; white-space: pre-line;">${site.prayerTimes}</p>
                </div>
            ` : ''}
            
            ${site.occasions && site.occasions.length > 0 ? `
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1a237e; margin-bottom: 15px; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">
                        <i class="fas fa-calendar-alt"></i> Major Occasions | प्रमुख अवसर
                    </h3>
                    ${site.occasions.map(occasion => `
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid #4caf50;">
                            <h4 style="color: #2e7d32; margin-bottom: 8px;">${occasion.name}</h4>
                            <p style="color: #555; line-height: 1.7;">${occasion.description}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${site.communityRole ? `
                <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #ff9800;">
                    <h3 style="color: #1a237e; margin-bottom: 15px;"><i class="fas fa-users"></i> Community Role | सामुदायिक भूमिका</h3>
                    <p style="color: #555; line-height: 1.8; white-space: pre-line;">${site.communityRole}</p>
                </div>
            ` : ''}
            
            ${site.harmony ? `
                <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
                    <h4 style="color: #1a237e; margin-bottom: 10px;"><i class="fas fa-hands-helping"></i> Religious Harmony</h4>
                    <p style="color: #555; line-height: 1.7;">${site.harmony}</p>
                </div>
            ` : ''}
        `;
    }
    
    content += `
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('siteModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
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

// Make showSiteDetails available globally
window.showSiteDetails = showSiteDetails;
