'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { ExternalLink, Award, Flame, Code2, CheckCircle2 } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

const defaultStats: StatItem[] = [
  { value: '370+', label: 'LeetCode Solved', detail: 'Consistent algorithmic problem solving' },
  { value: '6+', label: 'Production Projects', detail: 'Full-stack, Mobile, AI & Security' },
  { value: '2', label: 'Internships', detail: 'MindMatrix.io & NIIT/Cisco CSR' },
  { value: '9.11', label: 'Degree CGPA', detail: 'New Horizon College of Engineering' },
];

const dsaTopics = [
  { name: 'Arrays & Two Pointers', level: 'Advanced' },
  { name: 'Binary Search & Sliding Window', level: 'Advanced' },
  { name: 'Trees & Graph Traversal (DFS/BFS)', level: 'Proficient' },
  { name: 'Dynamic Programming & Memoization', level: 'Proficient' },
  { name: 'Recursion & Backtracking', level: 'Proficient' },
  { name: 'System Design & Object-Oriented Design', level: 'Core' },
];

export const StatsSection = ({ customStats }: { customStats?: StatItem[] }) => {
  const stats = customStats || defaultStats;

  return (
    <section id="stats" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="./stats --proof-of-work" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Proof of Work
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Verified metrics reflecting academic rigor, consistent problem-solving discipline, and practical software engineering.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Big Metrics */}
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
          {stats.map((stat, index) => (
            <StaggerItem 
              key={index} 
              className="flex flex-col space-y-3 border-l-2 border-[var(--foreground)] pl-6 py-2 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[var(--foreground)]">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-[var(--foreground)] font-mono font-medium uppercase tracking-wider">
                {stat.label}
              </span>
              {stat.detail && (
                <span className="text-xs text-[var(--muted-foreground)] leading-relaxed font-sans">
                  {stat.detail}
                </span>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* DSA / LeetCode Deep-Dive Terminal Card */}
        <RevealOnScroll>
          <div className="border border-[var(--border-light)] bg-[var(--muted)] p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-[var(--foreground)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[var(--border-light)] gap-4">
              <div className="flex items-center gap-3">
                <Code2 className="text-[var(--foreground)]" size={24} />
                <div>
                  <h3 className="font-mono text-base font-bold uppercase tracking-wider text-[var(--foreground)]">
                    LeetCode & Algorithmic Discipline
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] font-mono mt-0.5">
                    Data Structures & Algorithms Repository
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground)] bg-[var(--background)] px-3 py-1.5 border border-[var(--border-light)]">
                  <Flame size={14} className="text-[var(--foreground)]" />
                  <span>100-Day Streak Badge</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground)] bg-[var(--background)] px-3 py-1.5 border border-[var(--border-light)]">
                  <Award size={14} className="text-[var(--foreground)]" />
                  <span>370+ Solved</span>
                </div>
                <a
                  href="https://leetcode.com/u/anvithkumar511/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--foreground)] hover:underline flex items-center gap-1.5 ml-2"
                >
                  <span>Verify Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dsaTopics.map((topic, i) => (
                <div 
                  key={i}
                  className="p-4 bg-[var(--background)] border border-[var(--border-light)] flex items-start gap-3 transition-colors hover:border-[var(--foreground)]"
                >
                  <CheckCircle2 size={16} className="text-[var(--foreground)] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold text-[var(--foreground)]">
                      {topic.name}
                    </div>
                    <div className="text-[11px] text-[var(--muted-foreground)] font-mono mt-1">
                      Proficiency: {topic.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default StatsSection;
