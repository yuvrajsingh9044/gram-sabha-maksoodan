# Education Page Guide - Gram Sabha Maksoodan

## Overview
The Education Infrastructure page presents comprehensive information about educational facilities within Gram Sabha Maksoodan and nearby accessible institutions.

## Page Structure

### 1. Header Banner
- **Title**: Education Infrastructure – Maksoodan
- **Subtitle**: Empowering Future Generations Through Learning
- **Design**: Clean institutional blue theme with graduation cap icon
- **Background**: Educational imagery (classroom/school building)

### 2. Overview Statistics
Five key metrics displayed in animated cards:
- **Village Schools**: 3 schools
- **Total Students**: 450+ students
- **Teaching Staff**: 15 teachers
- **Anganwadi Centers**: 1 center
- **Nearby Institutes**: 5 accessible institutions

### 3. Village Schools Section

#### Primary School Maksoodan
- **Classes**: 1-5
- **Location**: Maksoodan
- **Board**: UP Basic Education Board
- **Medium**: Hindi
- **Staff**:
  - Headmaster: Jay Kumar Srivastava
  - Assistant Teacher: Abhishek Singh
  - Assistant Teacher: [Yadav - Full Name to be added]
- **Shiksha Mitra**:
  - Mithilesh Singh
  - Shiv Prasad Shankar
  - Nirmala Gupta
- **Student Strength**: 180 students
  - Class 1: 35 students
  - Class 2: 38 students
  - Class 3: 32 students
  - Class 4: 40 students
  - Class 5: 35 students
- **Facilities**:
  - Classrooms
  - Drinking water
  - Toilets
  - Playground
  - Mid-Day Meal
  - Electricity
  - Smart class (if available)
- **Activities**:
  - Independence Day
  - Republic Day
  - Sports Day
  - Cultural programs
  - Annual Function

#### Upper Primary School Maksoodan
- **Classes**: 6-8
- **Location**: Mishrapur, Maksoodan
- **Board**: UP Board
- **Medium**: Hindi
- **Student Strength**: 150 students
  - Class 6: 55 students
  - Class 7: 50 students
  - Class 8: 45 students
- **Facilities**:
  - Classrooms
  - Science Lab (if available)
  - Computer Lab (if available)
  - Library
  - Drinking water
  - Toilets
  - Playground
  - Mid-Day Meal
  - Electricity

#### Primary School Jafarapur
- **Classes**: 1-5
- **Location**: Jafarapur, Maksoodan Gram Sabha
- **Board**: UP Basic Education Board
- **Medium**: Hindi
- **Student Strength**: 120 students
  - Class 1: 25 students
  - Class 2: 24 students
  - Class 3: 22 students
  - Class 4: 26 students
  - Class 5: 23 students

### 4. Pre-Primary Education

#### Anganwadi Kendra
- **Location**: Gram Sabha Maksoodan
- **Workers**:
  - Pushpa Singh
  - Geeta Singh
- **Services**:
  - Early childhood education
  - Nutrition programs
  - Health checkups
  - Vaccination support

### 5. Nearby Educational Institutes

#### 1. Saraswati Vidya Mandir Sr. Sec. School
- **Location**: Vivekanand Nagar, Sultanpur
- **Distance**: ~25 km
- **Board**: CBSE
- **Medium**: English
- **Level**: Senior Secondary
- **Note**: Top school in district

#### 2. S N Convent Sr. Sec. School
- **Location**: Lambhua
- **Distance**: ~5 km
- **Board**: CBSE
- **Medium**: English
- **Level**: Senior Secondary

#### 3. All Saints Public School
- **Location**: Lambhua
- **Distance**: ~5 km
- **Board**: CBSE
- **Medium**: English
- **Level**: Secondary / Sr. Secondary

#### 4. Sarvodaya Inter College
- **Location**: Lambhua
- **Distance**: ~5 km
- **Board**: UP Board
- **Medium**: English & Hindi
- **Level**: Intermediate

#### 5. Swami Vivekanand Inter College
- **Location**: Gopalpur Madaiya, Lambhua
- **Distance**: ~9 km
- **Board**: UP Board
- **Medium**: English & Hindi
- **Level**: Intermediate

### 6. Accessibility & Transport
Three key aspects:
- **Road Connectivity**: Well-connected roads to Lambhua and Sultanpur
- **Bus Availability**: Regular bus services to nearby educational hubs
- **Private Transport**: Auto-rickshaw and private vehicles available

### 7. Footer Message
"Education is the foundation of Gram Sabha Maksoodan's social and economic development, nurturing young minds for a brighter future."

## Features

### Interactive Elements
1. **Animated Statistics**: Counter animation on scroll
2. **School Detail Modals**: Click "View Full Details" to see comprehensive school information
3. **Responsive Design**: Mobile-friendly layout
4. **Bilingual Content**: Hindi and English throughout

### Modal Content
Each school modal displays:
- Complete school profile
- Staff details with roles
- Shiksha Mitra information (for primary schools)
- Class-wise student strength with visual charts
- Comprehensive facilities list
- Activities and events calendar
- Photo gallery placeholder

## Design Guidelines

### Color Scheme
- **Primary**: Blue (#1565c0, #1976d2, #42a5f5) - Institutional theme
- **Secondary**: Orange (#ff9800) - Highlights
- **Accent**: Red (#d84315) - Hindi text
- **Success**: Green (#4caf50) - Facilities
- **Background**: Light gray (#f5f5f5)

### Typography
- **Headers**: Bold, large fonts for visibility
- **Body**: Clear, readable fonts
- **Bilingual**: Hindi and English side by side

### Card Styles
- **School Cards**: Blue gradient headers with white body
- **Institute Cards**: Purple gradient with badge indicators
- **Anganwadi Card**: Pink gradient for distinction
- **Accessibility Cards**: Orange icons with white background

## File Structure
```
pages/education.html       - Main HTML page
css/education.css          - Dedicated stylesheet
js/education.js            - Interactive functionality
```

## How to Update

### Adding New Schools
1. Open `js/education.js`
2. Add new school object to `schoolsData`
3. Add corresponding card in HTML
4. Update statistics in overview section

### Updating Staff Information
1. Locate school in `schoolsData` object
2. Update `staff` or `shikshamitra` arrays
3. Changes reflect automatically in modal

### Adding Photos
1. Place school photos in `images/schools/` directory
2. Update photo gallery section in modal
3. Replace placeholder with actual images

### Modifying Facilities
1. Edit `facilities` array in school data
2. Add/remove items as needed
3. Icons update automatically

## Best Practices

1. **Keep Data Current**: Update student numbers annually
2. **Verify Staff**: Confirm teacher names and roles
3. **Add Photos**: Include actual school building and event photos
4. **Update Achievements**: Add recent awards and recognitions
5. **Maintain Bilingual**: Always provide Hindi translations
6. **Test Modals**: Ensure all school details display correctly
7. **Mobile Testing**: Verify responsive design on various devices

## Future Enhancements

### Suggested Additions
1. **Student Performance**: Add academic achievement data
2. **Admission Process**: Include enrollment procedures
3. **Fee Structure**: Display fee information for nearby schools
4. **Transport Details**: Add school bus routes and timings
5. **Teacher Profiles**: Detailed staff biographies
6. **Photo Galleries**: Actual school event photos
7. **Download Section**: Admission forms, circulars
8. **Contact Forms**: Direct inquiry submission
9. **Calendar**: Academic calendar and important dates
10. **Alumni Section**: Notable alumni achievements

## Technical Notes

### JavaScript Functions
- `animateCounters()`: Animates statistics on scroll
- `showSchoolDetails(schoolId)`: Opens school detail modal
- `setupModals()`: Initializes modal functionality

### CSS Classes
- `.school-card`: Individual school display
- `.institute-card`: Nearby institution display
- `.modal`: Popup detail view
- `.stat-card`: Statistics display

### Responsive Breakpoints
- Desktop: > 768px
- Tablet: 768px
- Mobile: < 768px

## Maintenance Checklist

### Monthly
- [ ] Update notification section
- [ ] Verify contact information
- [ ] Check for broken links

### Quarterly
- [ ] Update student strength numbers
- [ ] Review staff information
- [ ] Add new photos

### Annually
- [ ] Update academic achievements
- [ ] Refresh facility information
- [ ] Review nearby institutes list
- [ ] Update establishment years

## Support

For technical issues or content updates, contact:
- **Gram Sachiv**: Pawan Kumar Chaurasia
- **Phone**: +91-6306462522
- **Email**: maksoodan@up.gov.in

---

**Last Updated**: February 13, 2026
**Version**: 1.0
**Status**: Active
