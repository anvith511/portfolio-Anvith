'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';

const stats = [
  { value: '370+', label: 'LeetCode Problems' },
  { value: '6+', label: 'Major Projects' },
  { value: '2', label: 'Internship Experiences' },
  { value: '9.11', label: 'CGPA' },
];

export const StatsSection = () => {
  return (
    <section className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="./stats" className="mb-12" />
        </RevealOnScroll>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="flex flex-col space-y-2 border-l border-gray-800 pl-6">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-gray-400 font-mono uppercase tracking-widest">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default StatsSection;
