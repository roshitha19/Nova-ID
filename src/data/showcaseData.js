/**
 * Default initial form values and showcase profile data for NOVA ID.
 * Showcases the academic concepts: Controlled Forms, Props, State, Reusable Components, Dynamic Rendering.
 */

export const EMPTY_PROFILE = {
  fullName: '',
  studentId: '',
  role: 'Student',
  dob: '',
  bloodGroup: 'O+',
  photoUrl: '',
  tagline: '',
  collegeName: 'Nova Institute of Technology',
  department: 'Computer Science & Engineering',
  year: '1st Year',
  section: 'A',
  skills: '',
  email: '',
  phone: '',
  city: '',
};

export const SHOWCASE_PROFILE = {
  fullName: 'Roshitha Gandla',
  studentId: 'VU26CSE1042',
  role: 'Student',
  dob: '2004-06-18',
  bloodGroup: 'O+',
  // Clean SVG portrait representation for zero external broken links
  photoUrl: '',
  tagline: 'Create. Explore. Impact.',
  collegeName: 'Nova Institute of Technology',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  section: 'A',
  skills: 'React, JavaScript, AI, UI/UX, Distributed Systems',
  email: 'roshitha.gandla@novatech.edu',
  phone: '+1 (555) 234-8901',
  city: 'Campus Metro / Innovation Hub',
};

export const ROLE_OPTIONS = [
  'Student',
  'Graduate Scholar',
  'Research Fellow',
  'Teaching Assistant',
  'Lab Investigator'
];

export const BLOOD_GROUPS = [
  'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'
];

export const DEPARTMENT_OPTIONS = [
  'Computer Science & Engineering',
  'Artificial Intelligence & Data',
  'Electronics & Communication',
  'Cyber-Physical Systems',
  'Interaction & Industrial Design',
  'Applied Quantum Computing',
  'Biotechnology & Bioengineering'
];

export const YEAR_OPTIONS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  'Post-Graduate'
];

export const SECTION_OPTIONS = ['A', 'B', 'C', 'Honors'];

export const THEMES = [
  {
    id: 'aurora',
    name: 'Aurora',
    subtitle: 'Jade & Subtle Cyan',
    description: 'Deep charcoal, muted jade micro-grid, and soft cyan refraction.',
    colorPreview: 'linear-gradient(90deg, #86A897, #8FC8C1)'
  },
  {
    id: 'archive',
    name: 'Archive',
    subtitle: 'Antique Metallic Gold',
    description: 'Graphite base, antique gold accents, and museum archival geometry.',
    colorPreview: 'linear-gradient(90deg, #D6A85F, #F4F0E6)'
  },
  {
    id: 'ember',
    name: 'Ember',
    subtitle: 'Dusty Coral & Copper',
    description: 'Deep charcoal, dusty coral glow, and burnished copper foil details.',
    colorPreview: 'linear-gradient(90deg, #D78C78, #C67D5A)'
  }
];
