'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Badge } from '../ui/Badge';

const experiences = [
  {
    role: 'AI App Developer Intern',
    company: 'MindMatrix.io',
    period: 'Feb 2026 - May 2026',
    description: 'Developed and optimized AI-driven features for core applications, improving response accuracy and user engagement.',
    tags: ['Python', 'AI/ML', 'FastAPI'],
  },
  {
    role: 'Cyber & AI Workforce Intern',
    company: 'NIIT Foundation | Cisco CSR',
    period: 'Jun 2026 - Sep 2026',
    description: 'Participated in comprehensive cybersecurity assessments and implemented AI workforce automation scripts.',
    tags: ['Cybersecurity', 'Automation', 'Networking'],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="cat experience.log" className="mb-16" />
        </RevealOnScroll>

        <StaggerChildren className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <StaggerItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-black text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xs">
                {index + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border border-gray-900 bg-[#0a0a0a] group-hover:border-gray-700 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="font-mono text-xs text-gray-500 mb-1">{exp.period}</span>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-gray-400 font-mono text-sm">{exp.company}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ExperienceSection;
