export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  start_date: string;
  end_date: string;
  current: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  measurable_achievements: string[];
  technologies: string[];
  order_index: number;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  start_date: string;
  end_date: string;
  current: boolean;
  gpa: string;
  highlights: string[];
  coursework: string[];
  order_index: number;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: '1',
    company: 'MindMatrix.io',
    position: 'AI App Developer Intern',
    location: 'Bengaluru, India',
    period: 'Feb 2026 - Present',
    start_date: '2026-02-01',
    end_date: '2026-05-31',
    current: true,
    type: 'Internship',
    description: 'Developing AI-powered applications, designing prompt evaluation frameworks, and integrating large language models into production backend pipelines.',
    responsibilities: [
      'Engineered asynchronous REST APIs in FastAPI for real-time model inference and response parsing.',
      'Constructed prompt engineering pipelines with strict schema validation to eliminate hallucinations.',
      'Optimized backend response latency by implementing request batching and caching strategies.',
      'Collaborated with senior engineers on microservice deployment and monitoring.'
    ],
    measurable_achievements: [
      'Reduced API latency by 35% using asynchronous request queuing and memory caching in Redis.',
      'Achieved 98% prompt validation pass rate on production structured outputs.',
      'Integrated automated integration tests covering 85%+ of core AI application endpoints.'
    ],
    technologies: ['Python', 'FastAPI', 'Machine Learning', 'API Development', 'Prompt Engineering', 'Git'],
    order_index: 1,
  },
  {
    id: '2',
    company: 'NIIT Foundation | Cisco CSR',
    position: 'Cyber & AI Workforce Intern',
    location: 'Bengaluru, India',
    period: 'Jan 2026 - Mar 2026',
    start_date: '2026-01-01',
    end_date: '2026-03-31',
    current: false,
    type: 'Internship',
    description: 'Practical training and simulation work in cybersecurity fundamentals, network defense architectures, threat analysis, and AI-driven security operations.',
    responsibilities: [
      'Analyzed simulated enterprise network traffic logs for anomaly detection and vulnerability identification.',
      'Configured defensive perimeter rules, firewall policies, and role-based access control (RBAC) lists.',
      'Conducted security audits and vulnerability assessments on test web application endpoints.',
      'Applied machine learning classification models to categorize phishing and malicious traffic patterns.'
    ],
    measurable_achievements: [
      'Identified and remediated 15+ simulated network vulnerabilities in hands-on lab defense drills.',
      'Earned Cisco CSR training distinction for incident response and threat modeling simulations.',
      'Delivered technical presentation on AI-augmented Security Operations Center (SOC) workflows.'
    ],
    technologies: ['Cybersecurity', 'Network Defense', 'Threat Analysis', 'Cisco Packet Tracer', 'Wireshark', 'Python'],
    order_index: 2,
  },
];

export const educationData: EducationItem[] = [
  {
    id: '1',
    institution: 'New Horizon College of Engineering (NHCE)',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Engineering',
    location: 'Bengaluru, India',
    period: '2022 - 2026',
    start_date: '2022-08-01',
    end_date: '2026-06-30',
    current: true,
    gpa: '9.11 / 10.0',
    highlights: [
      'Consistent Top Academic Performer with CGPA 9.11 in Computer Engineering.',
      'Represented Visvesvaraya Technological University (VTU) in Inter-University Handball Nationals.',
      'Active contributor to technical clubs, coding hackathons, and sports tournaments.'
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java/C++)',
      'Database Management Systems (DBMS)',
      'Operating Systems & Systems Programming',
      'Computer Networks & Protocols',
      'Cybersecurity & Network Defense',
      'Software Engineering & System Design'
    ],
    order_index: 1,
  },
];
