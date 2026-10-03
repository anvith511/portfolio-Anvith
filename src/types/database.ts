export interface Profile {
  id: string;
  full_name: string;
  email: string;
  title: string;
  subtitle: string;
  location: string;
  bio: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface SiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  site_url: string;
  og_image: string | null;
  favicon: string | null;
  analytics_id: string | null;
  maintenance_mode: boolean;
  created_at: string;
  updated_at: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: string | null;
  order: number;
  visible: boolean;
  created_at: string;
}

export interface Section {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  terminal_command: string | null;
  enabled: boolean;
  order: number;
  type: 'hero' | 'about' | 'stats' | 'projects' | 'experience' | 'skills' | 'timeline' | 'achievements' | 'certifications' | 'blog' | 'contact' | 'github' | 'custom';
  content: string | null;
  created_at: string;
  updated_at: string;
}

export interface HeroContent {
  id: string;
  greeting: string;
  name_line1: string;
  name_line2: string;
  title: string;
  subtitle: string;
  description: string;
  cta_primary_text: string;
  cta_primary_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  cta_tertiary_text: string;
  cta_tertiary_link: string;
  terminal_prefix: string;
  created_at: string;
  updated_at: string;
}

export interface AboutContent {
  id: string;
  heading: string;
  content: string;
  image_url: string | null;
  terminal_command: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string | null;
  cover_image: string | null;
  category: string | null;
  github_url: string | null;
  live_url: string | null;
  featured: boolean;
  published: boolean;
  order: number;
  problem: string | null;
  solution: string | null;
  architecture: string | null;
  architecture_image: string | null;
  challenges: string | null;
  impact: string | null;
  lessons_learned: string | null;
  behind_the_build: Record<string, unknown>[] | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectTechnology {
  id: string;
  project_id: string;
  name: string;
  order: number;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  url: string;
  alt: string;
  caption: string | null;
  order: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  company_url: string | null;
  location: string | null;
  start_date: string;
  end_date: string | null;
  current: boolean;
  description: string;
  technologies: string[];
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
  gpa: string | null;
  description: string | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  slug: string;
  order: number;
  visible: boolean;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category_id: string;
  proficiency: number | null;
  description: string | null;
  icon: string | null;
  related_projects: string[] | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  date: string | null;
  link: string | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string | null;
  credential_url: string | null;
  credential_id: string | null;
  image_url: string | null;
  description: string | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  suffix: string | null;
  prefix: string | null;
  description: string | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string | null;
  category: string | null;
  icon: string | null;
  link: string | null;
  technologies: string[] | null;
  image_url: string | null;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string | null;
  date: string;
  icon: string | null;
  link: string | null;
  order: number;
  visible: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string | null;
  tags: string[] | null;
  published: boolean;
  featured: boolean;
  reading_time: number | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string | null;
  label: string | null;
  order: number;
  visible: boolean;
  created_at: string;
}

export interface ResumeFile {
  id: string;
  file_name: string;
  file_url: string;
  file_size: number;
  active: boolean;
  uploaded_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}
