export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  technologies: string[];
  category: string;
  github_url: string;
  live_url: string | null;
  featured: boolean;
  problem: string;
  solution: string;
  key_features: string[];
  architecture: string;
  challenges: string;
  impact: string;
  lessons_learned: string;
  order_index: number;
}

export const projectsData: ProjectItem[] = [
  {
    id: '1',
    slug: 'helpmate',
    title: 'HelpMate',
    short_description: 'Community Volunteer Coordination Platform with Geospatial Matching',
    full_description: 'A cross-platform mobile and web application connecting communities with volunteers using proximity-based geospatial matching. Features real-time location matching, volunteer coordination, donation processing, and automated emergency task dispatch.',
    technologies: ['React Native', 'FastAPI', 'MongoDB', 'Clerk', 'Stripe', 'Leaflet', 'Python', 'TypeScript'],
    category: 'Full Stack / Mobile',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'Traditional volunteering lacks efficient local discovery and real-time coordination, leading to low participation and delayed responses during local community initiatives.',
    solution: 'Built a cross-platform mobile application with geospatial matching that connects volunteers with nearby community needs within defined radial zones in real-time.',
    key_features: [
      'Proximity-based volunteer dispatch using 2dsphere indexing',
      'Real-time interactive interactive map UI with Leaflet',
      'Secure identity & session management via Clerk',
      'Integrated donor processing and fund transfers via Stripe',
      'Task status lifecycle tracking: Open, Assigned, Completed'
    ],
    architecture: 'React Native frontend communicating via REST API with FastAPI backend. MongoDB with 2dsphere indexing for geospatial queries. Clerk for authentication, Stripe for donation processing, and Leaflet for map visualizations.',
    challenges: 'Real-world location matching required efficient geospatial queries without scanning the entire database. Solved with MongoDB 2dsphere indexing and bounding box queries with indexing optimization.',
    impact: 'Reduced volunteer-to-need matching time substantially. Architecture scales horizontally to support multi-city deployment.',
    lessons_learned: 'Mastered geospatial indexing patterns, asynchronous request handling in FastAPI, and cross-platform mobile state management.',
    order_index: 1,
  },
  {
    id: '2',
    slug: 'time-capsule',
    title: 'Time Capsule',
    short_description: 'Cryptographically Encrypted Media Storage Platform with Scheduled Unlocks',
    full_description: 'A secure digital time capsule platform featuring client-side AES-256 encryption for storing and scheduling personal messages, photos, and media to be unlocked strictly at designated future dates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AES-256', 'NodeMailer', 'Cloudinary', 'JavaScript'],
    category: 'Full Stack / Security',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'People want to preserve digital memories and schedule messages for future delivery, but existing cloud storage lacks time-locked access and client-side zero-knowledge encryption.',
    solution: 'Created an encrypted media storage platform where messages and media are cryptographically locked until a specified future unlock date, guarded by client-side key derivation.',
    key_features: [
      'Client-side AES-256 encryption before payload dispatch',
      'Time-locked cryptographic unlock dates with cron scheduling',
      'Automated recipient notification system powered by NodeMailer',
      'Cloud-backed encrypted binary storage via Cloudinary',
      'Zero-knowledge access model ensuring total privacy'
    ],
    architecture: 'MERN stack architecture with AES-256 encryption. Client encrypts sensitive data before upload. Scheduled background jobs check unlock dates and trigger email notifications via NodeMailer. Media stored securely in Cloudinary.',
    challenges: 'Ensuring cryptographic security of scheduled data while allowing server-side unlock date verification without decrypting the payload or leaking user contents.',
    impact: 'Zero-knowledge encryption ensures user privacy even in the event of database access or server inspection.',
    lessons_learned: 'Deepened understanding of cryptographic primitives, key derivation functions (PBKDF2), and secure background job scheduling.',
    order_index: 2,
  },
  {
    id: '3',
    slug: 'ai-code',
    title: 'AI Code Reviewer',
    short_description: 'Contextual AI-Powered Code Review & Vulnerability Scanner Extension',
    full_description: 'A developer browser extension that provides intelligent real-time code reviews, security vulnerability scanning, and performance suggestions directly within web code editors and GitHub PRs using Google Gemini AI.',
    technologies: ['React', 'Tailwind CSS', 'Flask', 'SQLite', 'Chrome Extension API', 'Google Gemini API', 'Python'],
    category: 'AI / Developer Tools',
    github_url: 'https://github.com/anvith511',
    live_url: null,
    featured: true,
    problem: 'Developers often miss subtle security issues, edge cases, and performance bottlenecks during early code development and pull request reviews.',
    solution: 'Built a lightweight Chrome extension that integrates directly into web-based code editors and GitHub PRs to provide instant, contextual AI code reviews and automated refactoring suggestions.',
    key_features: [
      'Inline code selection and instant contextual audit',
      'Automated Common Weakness Enumeration (CWE) security scans',
      'Time and space complexity analysis on functions',
      'Local caching in SQLite to prevent redundant API queries',
      'One-click refactoring diff generator'
    ],
    architecture: 'Chrome Extension content script captures selected code and sends it to a Python Flask backend. The backend constructs structured prompts for the Gemini API, processes the analysis, and caches results in SQLite.',
    challenges: 'Minimizing latency for real-time reviews while maintaining prompt quality, token limits, and context awareness.',
    impact: 'Provides actionable code improvements in seconds, catching common vulnerabilities before code review stages.',
    lessons_learned: 'Prompt engineering for code analysis, Chrome Extension manifest V3 lifecycle, and streaming AI responses.',
    order_index: 3,
  },
  {
    id: '4',
    slug: 'portfolio-engine',
    title: 'Developer Terminal Portfolio',
    short_description: 'Minimalist Monochrome Portfolio with Interactive Terminal & AI Assistant',
    full_description: 'A high-performance personal portfolio built for software engineering recruiters and engineers, featuring a monochrome terminal design language, recruiter speed mode, AI query engine, and interactive CLI.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Three.js', 'Google GenAI'],
    category: 'Full Stack / Systems',
    github_url: 'https://github.com/anvith511',
    live_url: 'https://anvithkumar.dev',
    featured: true,
    problem: 'Standard developer portfolios often rely on excessive gradients, bloated templates, and slow animations that frustrate technical recruiters.',
    solution: 'Engineered an accessible, high-contrast black-and-white portfolio with terminal efficiency, 20-second recruiter mode, verified proof-of-work metrics, and sub-second load times.',
    key_features: [
      'Interactive command-line interface with custom commands',
      'Recruiter 20-second overview mode with single-click actions',
      'Context-aware AI Q&A assistant powered by Gemini API',
      'Zero-layout-shift responsive design across mobile and desktop',
      'Clean PDF resume preview and direct download'
    ],
    architecture: 'Next.js App Router with Server Components for fast initial paint, Three.js wireframe backdrop with reduced-motion respect, client-side interactive terminals, and server-side Gemini API endpoints.',
    challenges: 'Combining rich terminal interactivity and 3D visual geometry without hurting lighthouse performance or accessibility.',
    impact: 'Recruiter-focused navigation with direct access to code repositories, proof-of-work statistics, and downloadable credentials.',
    lessons_learned: 'Deepened skills in modern Next.js App Router patterns, accessibility (WCAG AA), and performance optimization.',
    order_index: 4,
  }
];
