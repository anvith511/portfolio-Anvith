export interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface SkillEvidenceItem {
  name: string;
  category: string;
  usedIn: string[];
  context: string;
  concepts: string[];
  level?: number;
}

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core languages utilized for algorithmic problem solving, backend systems, and scripting.',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C/C++'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Modern, reactive UI development with strong design system discipline and mobile support.',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'High-throughput APIs, asynchronous event processing, and microservice architectures.',
    skills: ['Node.js', 'FastAPI', 'Express', 'Flask', 'REST APIs', 'JWT / Auth'],
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Data persistence, schema design, geospatial spatial indexing, and caching.',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'Redis', '2dsphere Indexing'],
  },
  {
    id: 'ai-ml',
    name: 'AI / ML',
    description: 'Integration of LLMs, prompt engineering, structured model evaluation, and inference pipelines.',
    skills: ['Google Gemini API', 'Prompt Engineering', 'RAG Fundamentals', 'Model Evaluation', 'AI Agents'],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Practical security engineering, cryptographic protections, access control, and network defense.',
    skills: ['AES-256 Cryptography', 'RBAC', 'Network Defense', 'Threat Analysis', 'Vulnerability Assessment'],
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Version control, developer environments, data analysis, and deployment workflows.',
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Linux / Unix', 'Tableau', 'Snowflake', 'Android Studio'],
  },
  {
    id: 'core-cs',
    name: 'Core CS',
    description: 'Foundational computer science principles forming the baseline for scalable software engineering.',
    skills: ['Data Structures & Algorithms', 'System Design', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
  },
];

export const skillEvidenceMap: Record<string, SkillEvidenceItem> = {
  Java: {
    name: 'Java',
    category: 'Programming',
    usedIn: ['370+ LeetCode DSA Solutions', 'Core CS Coursework at NHCE'],
    context: 'Extensive use in solving algorithmic challenges, object-oriented system design, and competitive programming.',
    concepts: ['Object-Oriented Programming', 'Memory Management', 'Data Structures', 'Multithreading'],
    level: 90,
  },
  Python: {
    name: 'Python',
    category: 'Programming',
    usedIn: ['MindMatrix.io Internship', 'AI Code Review Tool', 'FastAPI Microservices'],
    context: 'Primary language for AI/ML inference workflows, FastAPI REST services, and backend automation scripts.',
    concepts: ['Asyncio', 'FastAPI', 'Flask', 'Data Processing'],
    level: 88,
  },
  JavaScript: {
    name: 'JavaScript',
    category: 'Programming',
    usedIn: ['Time Capsule App', 'Web Applications', 'DOM Scripting'],
    context: 'Built full-stack web and Node.js backend services, handling asynchronous event loops and RESTful APIs.',
    concepts: ['ES6+', 'Event Loop', 'Promises', 'Functional Programming'],
    level: 88,
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'Programming',
    usedIn: ['Portfolio Architecture', 'HelpMate Frontends', 'Next.js App Router'],
    context: 'Standard language for typed frontend and server architectures, preventing runtime type errors.',
    concepts: ['Strict Typing', 'Generics', 'Utility Types', 'Interface Contracts'],
    level: 90,
  },
  SQL: {
    name: 'SQL',
    category: 'Programming',
    usedIn: ['Relational Database Systems', 'NHCE Database Coursework'],
    context: 'Designing normalized schemas, complex joins, indexing strategies, and ACID transaction guarantees.',
    concepts: ['Schema Normalization', 'Indexing', 'Query Optimization', 'Transactions'],
    level: 85,
  },
  'C/C++': {
    name: 'C/C++',
    category: 'Programming',
    usedIn: ['Operating Systems Labs', 'Computer Architecture'],
    context: 'Low-level memory management, pointers, and foundational computer systems coursework.',
    concepts: ['Pointers', 'Dynamic Allocation', 'Process Management'],
    level: 78,
  },
  React: {
    name: 'React',
    category: 'Frontend',
    usedIn: ['HelpMate', 'AI Code Review Extension', 'Portfolio Platform'],
    context: 'Creating modular, component-driven reactive user interfaces with optimized state transitions.',
    concepts: ['Hooks Lifecycle', 'Virtual DOM', 'State Management', 'Server Components'],
    level: 90,
  },
  'Next.js': {
    name: 'Next.js',
    category: 'Frontend',
    usedIn: ['Personal Portfolio Engine', 'Time Capsule'],
    context: 'Production App Router implementation with Server Components, SSR, dynamic caching, and API routes.',
    concepts: ['App Router', 'Server Components', 'Streaming SSR', 'Static Generation'],
    level: 88,
  },
  'React Native': {
    name: 'React Native',
    category: 'Frontend',
    usedIn: ['HelpMate Volunteer App'],
    context: 'Engineered cross-platform mobile interface connecting volunteers using real-time geospatial Leaflet maps.',
    concepts: ['Mobile UI Lifecycles', 'Geospatial Location Services', 'AsyncStorage', 'Native Bridges'],
    level: 82,
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    category: 'Frontend',
    usedIn: ['Portfolio Design System', 'AI Code Extension'],
    context: 'Constructing minimalist monochrome design systems, responsive layouts, and typographic rhythm.',
    concepts: ['Utility Architecture', 'CSS Variables', 'Responsive Grid', 'Design Tokens'],
    level: 92,
  },
  'Node.js': {
    name: 'Node.js',
    category: 'Backend',
    usedIn: ['Time Capsule Server', 'Microservices'],
    context: 'Engineered event-driven backend services handling scheduled cryptographic unlock dates and notifications.',
    concepts: ['Event Loop', 'NodeMailer', 'Crypto API', 'Middleware Architecture'],
    level: 84,
  },
  FastAPI: {
    name: 'FastAPI',
    category: 'Backend',
    usedIn: ['HelpMate Core API', 'MindMatrix.io Workflows'],
    context: 'Designed high-throughput asynchronous REST APIs with Pydantic validation and auto-generated OpenAPI docs.',
    concepts: ['Asynchronous Routing', 'Pydantic Schemas', 'Dependency Injection', 'CORS'],
    level: 85,
  },
  MongoDB: {
    name: 'MongoDB',
    category: 'Databases',
    usedIn: ['HelpMate Volunteer Matching', 'Time Capsule'],
    context: 'Utilized 2dsphere indexing for efficient spatial proximity queries and document schema design.',
    concepts: ['2dsphere Geospatial Indexing', 'Aggregation Pipelines', 'BSON', 'Replica Sets'],
    level: 84,
  },
  'Google Gemini API': {
    name: 'Google Gemini API',
    category: 'AI / ML',
    usedIn: ['AI Code Review Extension', 'Portfolio Assistant API'],
    context: 'Engineered structured prompt pipelines, contextual code refactoring suggestions, and AI evaluation.',
    concepts: ['Prompt Engineering', 'Structured JSON Output', 'Context Windows', 'Model Evaluation'],
    level: 86,
  },
  'AES-256 Cryptography': {
    name: 'AES-256 Cryptography',
    category: 'Cybersecurity',
    usedIn: ['Time Capsule Encrypted Vault', 'Security Coursework'],
    context: 'Client-side AES-256 encryption ensuring zero-knowledge preservation of sensitive media and messages.',
    concepts: ['AES-256 Symmetric Encryption', 'Key Derivation (PBKDF2)', 'Hashing', 'Data Integrity'],
    level: 82,
  },
  RBAC: {
    name: 'RBAC',
    category: 'Cybersecurity',
    usedIn: ['HelpMate Administration', 'Secure Endpoints'],
    context: 'Designed role-based access control protecting administrative endpoints, user assets, and session verification.',
    concepts: ['Role-Based Access Control', 'JWT Verification', 'Least Privilege Principle', 'Session Security'],
    level: 80,
  },
  'Data Structures & Algorithms': {
    name: 'Data Structures & Algorithms',
    category: 'Core CS',
    usedIn: ['370+ LeetCode Solutions', 'System Optimization'],
    context: 'Deep problem-solving mastery in graph traversals, memoization, tree traversals, and dynamic programming.',
    concepts: ['Time & Space Complexity', 'Sliding Window', 'Dynamic Programming', 'Graph Theory'],
    level: 92,
  },
  'System Design': {
    name: 'System Design',
    category: 'Core CS',
    usedIn: ['HelpMate Architecture', 'Time Capsule Platform'],
    context: 'Architecting scalable microservices, horizontal scaling, caching layers, and decoupled storage.',
    concepts: ['Microservices', 'Load Balancing', 'Caching Strategies', 'Database Sharding'],
    level: 80,
  },
};
