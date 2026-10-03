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

import { personalData } from '@/data/personal';
import { projectsData } from '@/data/projects';
import { experiencesData, educationData } from '@/data/experience';
import { certificationsData } from '@/data/certifications';
import { achievementsData } from '@/data/achievements';
import { skillCategoriesData } from '@/data/skills';

export { personalData, projectsData, experiencesData, educationData, certificationsData, achievementsData, skillCategoriesData };

export const fallbackHeroContent = {
  id: '1',
  greeting: 'whoami',
  name_line1: 'ANVITH',
  name_line2: 'KUMAR_',
  title: 'Computer Engineering',
  subtitle: 'Software | Data | AI | Security',
  description: personalData.tagline,
  cta_primary_text: 'View Projects',
  cta_primary_link: '#projects',
  cta_secondary_text: 'About Me',
  cta_secondary_link: '#about',
  cta_tertiary_text: 'View Resume',
  cta_tertiary_link: '/resume',
  terminal_prefix: personalData.terminalPrefix,
} as unknown as HeroContent;

export const fallbackAboutContent = {
  id: '1',
  heading: 'about.md',
  content: personalData.fullBio,
} as unknown as AboutContent;

export const fallbackStatistics = [
  { id: '1', label: 'LeetCode Solved', value: personalData.stats.leetcodeSolved, order_index: 1 },
  { id: '2', label: 'Engineering Projects', value: personalData.stats.projects, order_index: 2 },
  { id: '3', label: 'Industry Internships', value: personalData.stats.internships, order_index: 3 },
  { id: '4', label: 'Degree CGPA', value: personalData.stats.cgpa, order_index: 4 },
] as unknown as Statistic[];

export const fallbackProjects = projectsData.map((p, idx) => ({
  ...p,
  created_at: new Date().toISOString(),
  order_index: idx + 1,
})) as unknown as Project[];

export const fallbackExperience = experiencesData.map((e, idx) => ({
  ...e,
  order_index: idx + 1,
})) as unknown as Experience[];

export const fallbackEducation = educationData.map((ed, idx) => ({
  ...ed,
  description: `Degree in ${ed.field} with ${ed.gpa} CGPA. Comprehensive coursework in systems engineering, algorithms, networks, and databases.`,
  order_index: idx + 1,
})) as unknown as Education[];

export const fallbackSkillCategories = skillCategoriesData.map((catGroup, catIdx) => ({
  category: {
    id: String(catIdx + 1),
    name: catGroup.name.toUpperCase(),
    order_index: catIdx + 1,
  } as unknown as SkillCategory,
  skills: catGroup.skills.map((skillName, sIdx) => ({
    id: `${catIdx + 1}-${sIdx + 1}`,
    name: skillName,
    category_id: String(catIdx + 1),
    level: 85,
    order_index: sIdx + 1,
  })) as unknown as Skill[],
}));

export const fallbackAchievements = achievementsData.map((a, idx) => ({
  id: a.id,
  title: a.title,
  description: a.description,
  badge: a.badge,
  category: a.category,
  order_index: idx + 1,
})) as unknown as Achievement[];

export const fallbackCertifications = certificationsData.map((c, idx) => ({
  id: c.id,
  name: c.name,
  issuer: c.issuer,
  date: c.date,
  order_index: idx + 1,
})) as unknown as Certification[];

export const fallbackTimelineEvents = [
  { id: '1', year: '2022', title: 'Admitted to New Horizon College of Engineering (B.E. Computer Engineering)', order_index: 1 },
  { id: '2', year: '2023', title: 'Google Cybersecurity & IBM Cloud Foundations Certified', order_index: 2 },
  { id: '3', year: '2024', title: 'Built HelpMate & Time Capsule; Surpassed 200+ LeetCode problems', order_index: 3 },
  { id: '4', year: '2025', title: 'VTU Handball Nationals; 100-Day DSA Streak; Built AI Code Review Extension', order_index: 4 },
  { id: '5', year: '2026', title: 'MindMatrix.io & Cisco CSR Internships; 370+ DSA Solved; Graduating with 9.11 CGPA', order_index: 5 },
] as unknown as TimelineEvent[];

export const fallbackSections = [
  { id: 'hero', section_id: 'hero', slug: 'hero', type: 'hero', name: 'Hero', title: 'Hero', enabled: true, is_enabled: true, order: 1, order_index: 1 },
  { id: 'stats', section_id: 'stats', slug: 'stats', type: 'stats', name: 'Stats', title: 'Proof of Work & DSA', enabled: true, is_enabled: true, order: 2, order_index: 2 },
  { id: 'projects', section_id: 'projects', slug: 'projects', type: 'projects', name: 'Projects', title: 'Featured Projects', enabled: true, is_enabled: true, order: 3, order_index: 3 },
  { id: 'skills', section_id: 'skills', slug: 'skills', type: 'skills', name: 'Skills', title: 'Technical Stack', enabled: true, is_enabled: true, order: 4, order_index: 4 },
  { id: 'experience', section_id: 'experience', slug: 'experience', type: 'experience', name: 'Experience', title: 'Experience', enabled: true, is_enabled: true, order: 5, order_index: 5 },
  { id: 'timeline', section_id: 'timeline', slug: 'timeline', type: 'timeline', name: 'Timeline', title: 'Engineering Journey', enabled: true, is_enabled: true, order: 6, order_index: 6 },
  { id: 'achievements', section_id: 'achievements', slug: 'achievements', type: 'achievements', name: 'Achievements', title: 'Achievements', enabled: true, is_enabled: true, order: 7, order_index: 7 },
  { id: 'certifications', section_id: 'certifications', slug: 'certifications', type: 'certifications', name: 'Certifications', title: 'Certifications', enabled: true, is_enabled: true, order: 8, order_index: 8 },
  { id: 'github', section_id: 'github', slug: 'github', type: 'github', name: 'GitHub', title: 'GitHub Metrics', enabled: true, is_enabled: true, order: 9, order_index: 9 },
  { id: 'activity', section_id: 'activity', slug: 'activity', type: 'activity', name: 'Activity', title: 'Recent Activity', enabled: true, is_enabled: true, order: 10, order_index: 10 },
  { id: 'about', section_id: 'about', slug: 'about', type: 'about', name: 'About', title: 'About Anvith', enabled: true, is_enabled: true, order: 11, order_index: 11 },
  { id: 'contact', section_id: 'contact', slug: 'contact', type: 'contact', name: 'Contact', title: 'Get in Touch', enabled: true, is_enabled: true, order: 12, order_index: 12 },
] as unknown as Section[];

export const fallbackSocialLinks = [
  { id: '1', platform: 'GitHub', url: personalData.socials.github, is_active: true, order_index: 1 },
  { id: '2', platform: 'LinkedIn', url: personalData.socials.linkedin, is_active: true, order_index: 2 },
  { id: '3', platform: 'LeetCode', url: personalData.socials.leetcode, is_active: true, order_index: 3 },
  { id: '4', platform: 'Email', url: personalData.socials.email, is_active: true, order_index: 4 },
] as unknown as SocialLink[];

export const fallbackActivities = [
  { id: '1', date: '2026-03-28', description: 'Engineered Redis caching layer for FastAPI inference endpoints', type: 'commit' },
  { id: '2', date: '2026-03-24', description: 'Solved Hard Graph Dynamic Programming problem on LeetCode', type: 'commit' },
  { id: '3', date: '2026-03-20', description: 'Optimized MongoDB 2dsphere proximity query latency in HelpMate', type: 'commit' },
  { id: '4', date: '2026-03-15', description: 'Published Chrome Extension v1.2 for AI Code Review scanner', type: 'commit' },
] as unknown as Activity[];

export const fallbackResumeFile = {
  id: '1',
  file_url: '/Anvith_Kumar_Resume.pdf',
  file_name: 'Anvith_Kumar_Resume.pdf',
  uploaded_at: '2026-03-30T00:00:00Z',
  is_active: true,
} as unknown as ResumeFile;

export const fallbackBlogPosts = [] as unknown as BlogPost[];
