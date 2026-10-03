'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardContent } from '../ui/Card';
import { Trophy, Flame, Code2, Medal, GraduationCap, CheckCircle2 } from 'lucide-react';

const achievementsList = [
  {
    title: '370+ LeetCode Problems',
    category: 'Algorithms & Problem Solving',
    description: 'Systematic practice across arrays, binary search, tree structures, dynamic programming, and graphs.',
    icon: Code2,
    badge: 'LEETCODE'
  },
  {
    title: '100-Day Streak Badge',
    category: 'Engineering Discipline',
    description: 'Awarded for uninterrupted daily problem solving and algorithmic consistency.',
    icon: Flame,
    badge: 'CONSISTENCY'
  },
  {
    title: 'State-Level Handball & Athletics',
    category: 'Competitive Sports',
    description: 'Competed at state level representing institutions in competitive handball and track athletics.',
    icon: Medal,
    badge: 'STATE LEVEL'
  },
  {
    title: 'VTU Handball Nationals',
    category: 'National Tournament',
    description: 'Selected to represent Visvesvaraya Technological University (VTU) in the Inter-University Handball Nationals.',
    icon: Trophy,
    badge: 'NATIONALS'
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <TerminalPrompt command="./achievements --all" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Key Achievements
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Demonstrated competitive spirit, athletic resilience, and consistent algorithmic problem solving.
            </p>
          </div>
        </RevealOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={index}>
                <Card className="h-full border-[var(--border-light)] bg-[var(--background)] hover:border-[var(--foreground)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[4px_4px_0px_var(--border-light)] hover:shadow-[6px_6px_0px_var(--foreground)]">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--muted)] flex items-center justify-center">
                        <Icon size={18} className="text-[var(--foreground)]" />
                      </div>
                      <span className="font-mono text-[10px] text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border-light)] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[var(--foreground)] tracking-tight">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[11px] text-[var(--muted-foreground)] block mt-0.5">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--foreground)] font-light leading-relaxed font-sans pt-2 border-t border-[var(--border-light)]">
                      {item.description}
                    </p>
                  </CardContent>

                  <div className="mt-6 pt-3 border-t border-[var(--border-light)] flex items-center gap-1.5 font-mono text-[10px] text-[var(--muted-foreground)]">
                    <CheckCircle2 size={12} className="text-[var(--foreground)]" />
                    <span>VERIFIED MILESTONE</span>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default AchievementsSection;
