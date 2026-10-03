export interface AchievementItem {
  id: string;
  title: string;
  category: 'DSA & Algorithms' | 'Engineering Discipline' | 'Competitive Sports' | 'Academic Rigor';
  badge: string;
  description: string;
  metrics?: string;
  order_index: number;
}

export const achievementsData: AchievementItem[] = [
  {
    id: '1',
    title: '370+ LeetCode Problems Solved',
    category: 'DSA & Algorithms',
    badge: 'LEETCODE',
    description: 'Systematic problem solving across arrays, two pointers, sliding window, binary search, trees, graphs, and dynamic programming.',
    metrics: '370+ Solved',
    order_index: 1,
  },
  {
    id: '2',
    title: '100-Day Streak Consistency Badge',
    category: 'Engineering Discipline',
    badge: 'CONSISTENCY',
    description: 'Maintained an unbroken daily algorithmic streak on LeetCode, solving algorithmic challenges every single day.',
    metrics: '100 Days Unbroken',
    order_index: 2,
  },
  {
    id: '3',
    title: 'VTU Inter-University Handball Nationals',
    category: 'Competitive Sports',
    badge: 'NATIONALS',
    description: 'Selected to represent Visvesvaraya Technological University (VTU) at the All India Inter-University National Championship.',
    metrics: 'University Representative',
    order_index: 3,
  },
  {
    id: '4',
    title: 'State-Level Athletics & Handball Competitor',
    category: 'Competitive Sports',
    badge: 'STATE LEVEL',
    description: 'Competed at Karnataka state level representing school and collegiate teams in competitive handball and track athletics.',
    metrics: 'Podium Finishes',
    order_index: 4,
  },
  {
    id: '5',
    title: 'Academic Distinction — 9.11 CGPA',
    category: 'Academic Rigor',
    badge: 'TOP PERCENTILE',
    description: 'Consistently ranked in the top percentile of the Computer Engineering department across 8 rigorous semesters of coursework.',
    metrics: '9.11 / 10.0 CGPA',
    order_index: 5,
  },
];
