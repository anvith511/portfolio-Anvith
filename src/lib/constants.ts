export const SITE_CONFIG = {
  name: 'Anvith Kumar',
  title: 'Anvith Kumar — Software Engineer',
  description: 'Computer Engineering graduate focused on Software Engineering, Data, AI, and Cybersecurity. Building software that solves real problems.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://anvithkumar.dev',
  github: 'https://github.com/anvith511',
  location: 'Bengaluru, India',
} as const;

export const TERMINAL_PREFIX = 'anvith@portfolio:~$';

export const NAV_ITEMS = [
  { label: 'home', href: '/', number: '01' },
  { label: 'about', href: '/about', number: '02' },
  { label: 'skills', href: '/skills', number: '03' },
  { label: 'projects', href: '/projects', number: '04' },
  { label: 'experience', href: '/experience', number: '05' },
  { label: 'achievements', href: '/achievements', number: '06' },
  { label: 'blog', href: '/blog', number: '07' },
  { label: 'contact', href: '/contact', number: '08' },
] as const;
