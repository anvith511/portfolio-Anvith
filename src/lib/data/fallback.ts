import { 
  HeroContent, 
  AboutContent, 
  Section, 
  Project, 
  Experience, 
  Education, 
  SkillCategory, 
  Skill, 
  Achievement, 
  Certification, 
  Statistic, 
  TimelineEvent, 
  Activity, 
  BlogPost, 
  SocialLink, 
  ResumeFile 
} from '@/types/database';

export const fallbackHeroContent = {
  id: '1',
  greeting: 'whoami',
  name_line1: 'ANVITH',
  name_line2: 'KUMAR_',
  title: 'Computer Engineering',
  subtitle: 'Software | Data | AI',
  description: 'I build software that solves real problems.',
  cta_primary_text: 'View Projects',
  cta_primary_link: '#projects',
  cta_secondary_text: 'About Me',
  cta_secondary_link: '#about',
  cta_tertiary_text: 'Download Resume',
  cta_tertiary_link: '/resume',
  terminal_prefix: 'anvith@portfolio:~$'
} as unknown as HeroContent;

export const fallbackAboutContent = {
  id: '1',
  heading: 'about.md',
  content: "Computer Engineering student at New Horizon College of Engineering (CGPA: 9.11) with a strong foundation in Software Engineering, Data, AI, and Cybersecurity. Experienced in full-stack development, distributed systems concepts, and machine learning integration. Proven problem-solving ability with 370+ LeetCode problems solved. Passionate about building robust, scalable applications that solve real-world problems."
} as unknown as AboutContent;

export const fallbackStatistics = [
  { id: '1', label: 'LeetCode Problems', value: '370+', order_index: 1 },
  { id: '2', label: 'Major Projects', value: '6+', order_index: 2 },
  { id: '3', label: 'Internships', value: '2', order_index: 3 },
  { id: '4', label: 'CGPA', value: '9.11', order_index: 4 },
] as unknown as Statistic[];

export const fallbackProjects = [
  {
    id: '1',
    slug: 'helpmate',
    title: 'HelpMate',
    short_description: 'Community Volunteer Coordination Platform',
    full_description: 'A cross-platform application connecting communities with volunteers using proximity-based geospatial matching. Features real-time location matching, volunteer coordination, and seamless communication.',
    technologies: ['React Native', 'FastAPI', 'MongoDB', 'Clerk', 'Stripe', 'Leaflet'],
    category: 'Full Stack / Mobile',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'Traditional volunteering lacks efficient local discovery and real-time coordination, leading to low participation and delayed responses.',
    solution: 'Built a cross-platform mobile application with geospatial matching that connects volunteers with nearby community needs in real-time.',
    architecture: 'React Native frontend communicating via REST API with FastAPI backend. MongoDB with 2dsphere indexing for geospatial queries. Clerk for authentication, Stripe for donation processing, Leaflet for map visualizations.',
    challenges: 'Real-world location matching required efficient geospatial queries without scanning the entire database. Solved with MongoDB 2dsphere indexing and bounding box queries.',
    impact: 'Reduced volunteer-to-need matching time. Architecture scales horizontally to support multi-city deployment.',
    lessons_learned: 'Mastered geospatial indexing patterns, asynchronous request handling in FastAPI, and cross-platform mobile state management.',
    order_index: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    slug: 'time-capsule',
    title: 'Time Capsule',
    short_description: 'Encrypted Media Storage App',
    full_description: 'A secure digital time capsule platform with AES-256 encryption for storing and scheduling personal messages, photos, and media to be unlocked at designated future dates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AES Encryption', 'NodeMailer', 'Cloudinary'],
    category: 'Full Stack / Security',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'People want to preserve digital memories and schedule messages for future delivery, but existing cloud storage lacks time-locked access and client-side encryption.',
    solution: 'Created an encrypted media storage platform where messages and media are cryptographically locked until a specified future unlock date.',
    architecture: 'MERN stack architecture with AES-256 encryption. Client encrypts sensitive data before upload. Scheduled background jobs check unlock dates and trigger email notifications via NodeMailer. Media stored securely in Cloudinary.',
    challenges: 'Ensuring cryptographic security of scheduled data while allowing server-side unlock date verification without decrypting the payload.',
    impact: 'Zero-knowledge encryption ensures user privacy even in the event of database access.',
    lessons_learned: 'Deepened understanding of cryptographic primitives, key derivation functions, and secure background job scheduling.',
    order_index: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    slug: 'ai-code',
    title: 'AI Code',
    short_description: 'AI-Powered Code Review Extension',
    full_description: 'A browser extension that provides intelligent code reviews, security vulnerability scanning, and performance suggestions directly within the browser using Google Gemini AI.',
    technologies: ['React', 'Tailwind CSS', 'Flask', 'SQLite', 'Chrome Extension API', 'Gemini'],
    category: 'AI / Developer Tools',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'Developers often miss subtle security issues, edge cases, and performance bottlenecks during early code development.',
    solution: 'Built a lightweight Chrome extension that integrates directly into web-based code editors and GitHub PRs to provide instant, contextual AI code reviews.',
    architecture: 'Chrome Extension content script captures selected code and sends it to a Python Flask backend. The backend constructs structured prompts for the Gemini API, processes the analysis, and caches results in SQLite.',
    challenges: 'Minimizing latency for real-time reviews while maintaining prompt quality and context awareness.',
    impact: 'Provides actionable code improvements in seconds, catching common vulnerabilities before code review.',
    lessons_learned: 'Prompt engineering for code analysis, Chrome Extension manifest V3 lifecycle, and streaming AI responses.',
    order_index: 3,
    created_at: new Date().toISOString(),
  }
] as unknown as Project[];

export const fallbackExperience = [
  {
    id: '1',
    company: 'MindMatrix.io',
    position: 'AI App Developer Intern',
    start_date: '2026-02-01',
    end_date: '2026-05-31',
    current: false,
    description: 'Developing AI-powered applications and integrating machine learning models into production systems. Working on prompt engineering, model evaluation, and backend service optimization.',
    technologies: ['Python', 'FastAPI', 'Machine Learning', 'API Development'],
    order_index: 1,
  },
  {
    id: '2',
    company: 'NIIT Foundation | Cisco CSR',
    position: 'Cyber & AI Workforce Intern',
    start_date: '2026-06-01',
    end_date: '2026-09-30',
    current: false,
    description: 'Specialized training and practical work in cybersecurity fundamentals, network defense, threat analysis, and AI-driven security operations through Cisco CSR initiative.',
    technologies: ['Cybersecurity', 'Network Defense', 'Threat Analysis', 'Cisco Security'],
    order_index: 2,
  }
] as unknown as Experience[];

export const fallbackEducation = [
  {
    id: '1',
    institution: 'New Horizon College of Engineering',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    start_date: '2022-08-01',
    end_date: '2026-06-30',
    current: true,
    gpa: '9.11',
    description: 'Focused on Computer Engineering core curriculum, data structures, algorithms, system architecture, database management, and cybersecurity.',
    order_index: 1,
  }
] as unknown as Education[];

export const fallbackSkillCategories = [
  {
    category: { id: '1', name: 'PROGRAMMING', order_index: 1 } as unknown as SkillCategory,
    skills: [
      { id: '1', name: 'Java', category_id: '1', level: 90, order_index: 1 },
      { id: '2', name: 'Python', category_id: '1', level: 85, order_index: 2 },
      { id: '3', name: 'JavaScript', category_id: '1', level: 85, order_index: 3 },
      { id: '4', name: 'SQL', category_id: '1', level: 80, order_index: 4 },
    ] as unknown as Skill[]
  },
  {
    category: { id: '2', name: 'DEVELOPMENT', order_index: 2 } as unknown as SkillCategory,
    skills: [
      { id: '5', name: 'React', category_id: '2', level: 85, order_index: 1 },
      { id: '6', name: 'React Native', category_id: '2', level: 80, order_index: 2 },
      { id: '7', name: 'Node.js', category_id: '2', level: 80, order_index: 3 },
      { id: '8', name: 'FastAPI', category_id: '2', level: 75, order_index: 4 },
      { id: '9', name: 'Flask', category_id: '2', level: 75, order_index: 5 },
      { id: '10', name: 'HTML', category_id: '2', level: 90, order_index: 6 },
      { id: '11', name: 'CSS', category_id: '2', level: 90, order_index: 7 },
    ] as unknown as Skill[]
  },
  {
    category: { id: '3', name: 'DATABASE', order_index: 3 } as unknown as SkillCategory,
    skills: [
      { id: '12', name: 'MongoDB', category_id: '3', level: 80, order_index: 1 },
      { id: '13', name: 'SQL', category_id: '3', level: 85, order_index: 2 },
      { id: '14', name: 'SQLite', category_id: '3', level: 80, order_index: 3 },
    ] as unknown as Skill[]
  },
  {
    category: { id: '4', name: 'CONCEPTS', order_index: 4 } as unknown as SkillCategory,
    skills: [
      { id: '15', name: 'DSA', category_id: '4', level: 90, order_index: 1 },
      { id: '16', name: 'OOP', category_id: '4', level: 85, order_index: 2 },
      { id: '17', name: 'DBMS', category_id: '4', level: 85, order_index: 3 },
      { id: '18', name: 'Operating Systems', category_id: '4', level: 80, order_index: 4 },
      { id: '19', name: 'Computer Networks', category_id: '4', level: 80, order_index: 5 },
      { id: '20', name: 'System Design', category_id: '4', level: 75, order_index: 6 },
    ] as unknown as Skill[]
  },
  {
    category: { id: '5', name: 'SECURITY', order_index: 5 } as unknown as SkillCategory,
    skills: [
      { id: '21', name: 'Cryptography', category_id: '5', level: 80, order_index: 1 },
      { id: '22', name: 'RBAC', category_id: '5', level: 75, order_index: 2 },
      { id: '23', name: 'Digital Forensics', category_id: '5', level: 70, order_index: 3 },
      { id: '24', name: 'Vulnerability Assessment', category_id: '5', level: 75, order_index: 4 },
      { id: '25', name: 'Cybersecurity', category_id: '5', level: 80, order_index: 5 },
    ] as unknown as Skill[]
  },
  {
    category: { id: '6', name: 'TOOLS', order_index: 6 } as unknown as SkillCategory,
    skills: [
      { id: '26', name: 'GitHub', category_id: '6', level: 90, order_index: 1 },
      { id: '27', name: 'Postman', category_id: '6', level: 85, order_index: 2 },
      { id: '28', name: 'Tableau', category_id: '6', level: 75, order_index: 3 },
      { id: '29', name: 'Snowflake', category_id: '6', level: 70, order_index: 4 },
      { id: '30', name: 'Android Studio', category_id: '6', level: 80, order_index: 5 },
      { id: '31', name: 'VS Code', category_id: '6', level: 95, order_index: 6 },
    ] as unknown as Skill[]
  }
];

export const fallbackAchievements = [
  { id: '1', title: '370+ LeetCode problems solved with consistent problem solving', order_index: 1 },
  { id: '2', title: '100-day streak badge on LeetCode', order_index: 2 },
  { id: '3', title: 'State-level athletics / handball participant', order_index: 3 },
  { id: '4', title: 'VTU Handball Nationals representative', order_index: 4 },
] as unknown as Achievement[];

export const fallbackCertifications = [
  { id: '1', name: 'Foundations of Cybersecurity', issuer: 'Google', order_index: 1 },
  { id: '2', name: 'Cloud Computing', issuer: 'IBM', order_index: 2 },
  { id: '3', name: 'Data Analyst 101', issuer: 'Microsoft', order_index: 3 },
  { id: '4', name: 'Introduction to Tableau', issuer: 'Simplilearn', order_index: 4 },
] as unknown as Certification[];

export const fallbackTimelineEvents = [
  { id: '1', year: '2022', title: 'Started Computer Engineering at NHCE', order_index: 1 },
  { id: '2', year: '2024', title: 'Software Projects & DSA Practice', order_index: 2 },
  { id: '3', year: '2025', title: 'AI Projects & Full-stack Development', order_index: 3 },
  { id: '4', year: '2026', title: 'MindMatrix.io, NIIT/Cisco, Graduation', order_index: 4 },
] as unknown as TimelineEvent[];

export const fallbackSections = [
  { id: '1', section_id: 'hero', name: 'Hero', is_enabled: true, order_index: 1 },
  { id: '2', section_id: 'about', name: 'About', is_enabled: true, order_index: 2 },
  { id: '3', section_id: 'skills', name: 'Skills', is_enabled: true, order_index: 3 },
  { id: '4', section_id: 'projects', name: 'Projects', is_enabled: true, order_index: 4 },
  { id: '5', section_id: 'experience', name: 'Experience', is_enabled: true, order_index: 5 },
  { id: '6', section_id: 'education', name: 'Education', is_enabled: true, order_index: 6 },
  { id: '7', section_id: 'achievements', name: 'Achievements', is_enabled: true, order_index: 7 },
  { id: '8', section_id: 'certifications', name: 'Certifications', is_enabled: true, order_index: 8 },
  { id: '9', section_id: 'timeline', name: 'Timeline', is_enabled: true, order_index: 9 },
  { id: '10', section_id: 'blog', name: 'Blog', is_enabled: true, order_index: 10 },
  { id: '11', section_id: 'activities', name: 'Activities', is_enabled: true, order_index: 11 },
  { id: '12', section_id: 'contact', name: 'Contact', is_enabled: true, order_index: 12 },
] as unknown as Section[];

export const fallbackSocialLinks = [
  { id: '1', platform: 'GitHub', url: 'https://github.com/anvith511', is_active: true, order_index: 1 },
  { id: '2', platform: 'LinkedIn', url: 'https://linkedin.com/in/anvith-kumar', is_active: true, order_index: 2 },
  { id: '3', platform: 'LeetCode', url: 'https://leetcode.com/anvith', is_active: true, order_index: 3 },
  { id: '4', platform: 'Email', url: 'mailto:anvith511@example.com', is_active: true, order_index: 4 },
] as unknown as SocialLink[];

export const fallbackActivities = [
  { id: '1', date: '2026-09-28', description: 'Updated HelpMate architecture and documentation', type: 'commit' },
  { id: '2', date: '2026-09-26', description: 'Solved advanced DSA problems on LeetCode', type: 'commit' },
  { id: '3', date: '2026-09-24', description: 'Worked on AI Code review extension features', type: 'commit' },
  { id: '4', date: '2026-09-20', description: 'Optimized portfolio performance and accessibility', type: 'commit' },
] as unknown as Activity[];

export const fallbackResumeFile = {
  id: '1',
  file_url: '/resume.pdf',
  file_name: 'Anvith_Kumar_Resume.pdf',
  uploaded_at: '2026-09-30T00:00:00Z',
  is_active: true,
} as unknown as ResumeFile;

export const fallbackBlogPosts = [] as unknown as BlogPost[];
