'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';

const logs = [
  { hash: 'a1b2c3d', date: 'Sep 28', message: 'Updated HelpMate documentation and CI/CD pipeline' },
  { hash: 'e4f5g6h', date: 'Sep 26', message: 'Solved 5 Hard DSA problems on LeetCode' },
  { hash: 'i7j8k9l', date: 'Sep 24', message: 'Refactored AI Code Assistant inference module' },
  { hash: 'm0n1o2p', date: 'Sep 20', message: 'Initial commit: Portfolio v1.0 architecture' },
];

export const ActivitySection = () => {
  return (
    <section className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="git log --oneline" className="mb-12" />
        </RevealOnScroll>

        <div className="font-mono text-sm md:text-base space-y-4">
          <StaggerChildren>
            {logs.map((log, index) => (
              <StaggerItem key={index} className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-900 hover:bg-[#0a0a0a] transition-colors">
                <span className="text-yellow-600/70 mr-4 shrink-0 w-20">{log.hash}</span>
                <span className="text-gray-500 mr-4 shrink-0 w-24">({log.date})</span>
                <span className="text-gray-300 truncate">{log.message}</span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
