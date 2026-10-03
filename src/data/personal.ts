export interface PersonalData {
  name: string;
  fullName: string;
  role: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  email: string;
  college: string;
  degree: string;
  cgpa: string;
  graduationYear: string;
  resume: {
    viewUrl: string;
    downloadUrl: string;
    fileName: string;
  };
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  terminalPrefix: string;
  stats: {
    leetcodeSolved: string;
    leetcodeStreak: string;
    cgpa: string;
    internships: string;
    projects: string;
  };
}

export const personalData: PersonalData = {
  name: 'Anvith Kumar',
  fullName: 'Anvith Kumar',
  role: 'Software Engineer',
  title: 'Computer Engineering Graduate | Software, Data, AI & Security',
  tagline: 'I build software that solves real problems.',
  shortBio: 'Computer Engineering graduate from New Horizon College of Engineering (CGPA 9.11). Focused on scalable backend systems, applied AI tooling, database optimization, and practical cybersecurity.',
  fullBio: `I am a Computer Engineering graduate from New Horizon College of Engineering (NHCE) with a 9.11 CGPA, based in Bengaluru, India. My engineering work is grounded in clean backend architecture, applied artificial intelligence, and rock-solid algorithmic problem solving.

Having solved over 370+ algorithmic problems on LeetCode with a 100-day consistency streak, I combine strong analytical rigor with practical full-stack execution. Through internships at MindMatrix.io (AI App Development) and the NIIT Foundation / Cisco CSR (Cyber & AI Workforce), I have worked on production-oriented AI inference workflows, security operations, and scalable REST services.

Whether designing geospatial query optimizations in MongoDB, architecting AES-256 encrypted media storage, or implementing browser-level AI code review extensions, my focus is delivering software that is fast, resilient, and directly useful.`,
  location: 'Bengaluru, India',
  email: 'anvithkumar511@gmail.com',
  college: 'New Horizon College of Engineering',
  degree: 'Bachelor of Engineering in Computer Engineering',
  cgpa: '9.11',
  graduationYear: '2026',
  resume: {
    viewUrl: '/resume',
    downloadUrl: '/api/resume',
    fileName: 'Anvith_Kumar_Resume.pdf',
  },
  socials: {
    github: 'https://github.com/anvith511',
    linkedin: 'https://linkedin.com/in/anvith-kumar-7313a8220',
    leetcode: 'https://leetcode.com/u/anvithkumar511/',
    email: 'mailto:anvithkumar511@gmail.com',
  },
  terminalPrefix: 'anvith@portfolio:~$',
  stats: {
    leetcodeSolved: '370+',
    leetcodeStreak: '100-Day',
    cgpa: '9.11',
    internships: '2',
    projects: '6+',
  },
};
