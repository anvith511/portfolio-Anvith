'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { GitCommit, Milestone } from 'lucide-react';

const journeyMilestones = [
  { 
    year: '2022', 
    title: 'Commenced Computer Engineering',
    institution: 'New Horizon College of Engineering (NHCE)',
    description: 'Built deep foundations in Data Structures, Discrete Mathematics, Computer Systems Architecture, and Low-Level Programming in C/C++.',
    tag: 'Academic Foundation'
  },
  { 
    year: '2024', 
    title: 'Software Systems & Algorithmic Discipline',
    institution: 'Independent & Academic Projects',
    description: 'Began systematic LeetCode DSA practice achieving 370+ problems solved. Engineered HelpMate volunteer matching platform with MongoDB geospatial 2dsphere indexes.',
    tag: 'Algorithms & Full Stack'
  },
  { 
    year: '2025', 
    title: 'AI Systems & Applied Cryptography',
    institution: 'Full-Stack & Security Engineering',
    description: 'Developed Time Capsule utilizing AES-256 encryption for time-locked preservation. Built AI Code Companion extension integrating Google Gemini API with Flask backend.',
    tag: 'AI & Security'
  },
  { 
    year: '2026', 
    title: 'MindMatrix.io & Cisco CSR Internships',
    institution: 'Industry Production Systems',
    description: 'Joined MindMatrix.io as AI App Developer Intern optimizing inference workflows. Completed Cisco CSR / NIIT Foundation Cyber & AI Workforce Internship. Graduating with 9.11 CGPA.',
    tag: 'Professional Practice'
  },
];

export const TimelineSection = () => {
  return (
    <section id="journey" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="cat journey.txt --graph" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Engineering Journey
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              A continuous timeline of academic discipline, algorithmic mastery, security engineering, and production AI experience.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-4xl border border-[var(--border-light)] p-6 md:p-8 bg-[var(--muted)] shadow-[6px_6px_0px_var(--border-light)]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider pb-3 mb-6 border-b border-[var(--border-light)]">
            <Milestone size={14} className="text-[var(--foreground)]" />
            <span>PROGRESSION_GRAPH // 2022 - 2026</span>
          </div>

          <StaggerChildren className="space-y-10">
            {journeyMilestones.map((item, index) => {
              const isLast = index === journeyMilestones.length - 1;
              return (
                <StaggerItem key={item.year} className="flex items-start group">
                  <div className="w-20 sm:w-24 shrink-0 font-mono text-xl sm:text-2xl font-black text-[var(--foreground)] tracking-tight">
                    {item.year}
                  </div>

                  {/* Terminal ASCII connector */}
                  <div className="flex flex-col items-center mr-4 sm:mr-6 self-stretch">
                    <div className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)] bg-[var(--background)] group-hover:bg-[var(--foreground)] transition-colors mt-1.5" />
                    {!isLast && <div className="w-px flex-1 bg-[var(--border-light)] my-1" />}
                  </div>

                  {/* Content body */}
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="font-mono text-base sm:text-lg font-bold text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--background)] uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-[var(--muted-foreground)] mb-2">
                      {item.institution}
                    </div>

                    <p className="text-sm text-[var(--foreground)] font-light leading-relaxed font-sans max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <div className="mt-8 pt-4 border-t border-[var(--border-light)] flex items-center justify-between font-mono text-xs text-[var(--muted-foreground)]">
            <div className="flex items-center gap-2">
              <GitCommit size={14} className="text-[var(--foreground)]" />
              <span>HEAD -&gt; main (production-ready)</span>
            </div>
            <span>STATUS: GRADUATING_2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
