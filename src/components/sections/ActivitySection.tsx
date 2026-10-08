'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { GitCommit, Terminal } from 'lucide-react';

const logs = [
  { hash: 'a1b2c3d', date: 'Sep 28', message: 'Updated HelpMate geospatial query index and documentation', tag: 'perf' },
  { hash: 'e4f5g6h', date: 'Sep 26', message: 'Solved 5 advanced Graph and Tree problems on LeetCode', tag: 'dsa' },
  { hash: 'i7j8k9l', date: 'Sep 24', message: 'Refactored AI Code Companion Chrome extension inference module', tag: 'feat' },
  { hash: 'm0n1o2p', date: 'Sep 20', message: 'Engineered AES-256 client-side payload encryption for Time Capsule', tag: 'sec' },
  { hash: 'q3r4s5t', date: 'Sep 15', message: 'Implemented Next.js App Router performance optimizations & audit', tag: 'build' },
];

export const ActivitySection = () => {
  return (
    <section id="activity" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="git log --oneline --graph -n 5" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Recent Activity
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Chronological log of recent development sprints, code optimizations, and engineering commits.
            </p>
          </div>
        </RevealOnScroll>

        <div className="border border-[var(--border-light)] p-6 md:p-8 bg-[var(--muted)] shadow-[4px_4px_0px_var(--border-light)] font-mono text-xs md:text-sm">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[var(--border-light)] text-xs text-[var(--muted-foreground)]">
            <Terminal size={14} className="text-[var(--foreground)]" />
            <span>COMMIT_HISTORY // repository activity</span>
          </div>

          <StaggerChildren className="space-y-3">
            {logs.map((log, index) => (
              <StaggerItem key={index} className="flex flex-col sm:flex-row sm:items-center py-2.5 px-3 border border-transparent hover:border-[var(--border-light)] hover:bg-[var(--background)] transition-colors">
                <div className="flex items-center gap-3 shrink-0 sm:w-44 mb-1 sm:mb-0">
                  <GitCommit size={14} className="text-[var(--foreground)]" />
                  <span className="font-bold text-[var(--foreground)]">{log.hash}</span>
                  <span className="text-[var(--muted-foreground)] text-xs">({log.date})</span>
                </div>

                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[10px] px-1.5 py-0.5 border border-[var(--border-light)] bg-[var(--muted)] text-[var(--muted-foreground)] uppercase">
                    {log.tag}
                  </span>
                  <span className="text-[var(--foreground)] truncate text-xs sm:text-sm">
                    {log.message}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
