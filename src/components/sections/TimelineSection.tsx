'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';

const journey = [
  { year: '2022', text: 'Started Computer Engineering (NHCE)' },
  { year: '2024', text: 'Software Projects & DSA Practice' },
  { year: '2025', text: 'AI Projects & Full-stack Development' },
  { year: '2026', text: 'MindMatrix.io, NIIT/Cisco, Graduation' },
];

export const TimelineSection = () => {
  return (
    <section className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="cat journey.txt" className="mb-16" />
        </RevealOnScroll>

        <div className="font-mono text-sm md:text-base text-gray-300 max-w-2xl bg-[#0a0a0a] p-8 border border-gray-900 rounded-sm">
          <StaggerChildren className="space-y-2">
            {journey.map((item, index) => (
              <StaggerItem key={index} className="flex">
                <div className="w-16 shrink-0 text-white font-bold">{item.year}</div>
                <div className="flex flex-col items-center mr-4">
                  <div className="w-px h-full bg-gray-800" />
                  {index === journey.length - 1 ? (
                    <div className="text-gray-600 leading-none">└──</div>
                  ) : (
                    <div className="text-gray-600 leading-none">├──</div>
                  )}
                </div>
                <div className="pb-8 text-gray-400 pt-1">{item.text}</div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
