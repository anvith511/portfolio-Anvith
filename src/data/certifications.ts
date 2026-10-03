export interface CertificationItem {
  id: string;
  name: string;
  title: string;
  issuer: string;
  date: string;
  skills_covered: string[];
  description: string;
  credential_url?: string;
  order_index: number;
}

export const certificationsData: CertificationItem[] = [
  {
    id: '1',
    name: 'Foundations of Cybersecurity',
    title: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: '2023',
    skills_covered: ['Threat Modeling', 'Network Defense', 'Security Operations', 'Vulnerability Assessment', 'CIA Triad'],
    description: 'Core principles of cybersecurity operations, threat modeling frameworks, security compliance, and practical vulnerability assessment methods.',
    credential_url: 'https://coursera.org/verify/professional-cert',
    order_index: 1,
  },
  {
    id: '2',
    name: 'Cloud Computing Fundamentals',
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM',
    date: '2023',
    skills_covered: ['Cloud Architecture', 'IaaS / PaaS / SaaS', 'Virtualization', 'Microservices', 'Hybrid Cloud'],
    description: 'Foundations of distributed cloud computing architecture, containerization concepts, service models, and enterprise virtualization.',
    credential_url: 'https://www.credly.com',
    order_index: 2,
  },
  {
    id: '3',
    name: 'Data Analyst 101',
    title: 'Data Analyst 101',
    issuer: 'Microsoft',
    date: '2024',
    skills_covered: ['Data Modeling', 'Relational Query Analysis', 'ETL Pipelines', 'Power BI / Excel', 'SQL Optimization'],
    description: 'Data transformation workflows, exploratory query analysis, relational schema normalization, and business intelligence metrics.',
    credential_url: 'https://learn.microsoft.com',
    order_index: 3,
  },
  {
    id: '4',
    name: 'Introduction to Tableau',
    title: 'Introduction to Tableau',
    issuer: 'Simplilearn',
    date: '2024',
    skills_covered: ['Data Visualization', 'Interactive Dashboards', 'Metric Tracking', 'Calculated Fields', 'Business Analytics'],
    description: 'Designing high-impact analytical dashboards, visual aggregation of large datasets, and KPI tracking for engineering and product metrics.',
    credential_url: 'https://simplilearn.com',
    order_index: 4,
  },
];
