'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardContent } from '../ui/Card';

const achievements = [
  { title: '370+ LeetCode problems', icon: '</>' },
  { title: '100-day streak badge', icon: '🔥' },
  { title: 'State-level athletics / handball', icon: '🏃' },
  { title: 'VTU Handball Nationals', icon: '🏆' },
];

export const AchievementsSection = () => {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="./achievements" className="mb-16" />
        </RevealOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <StaggerItem key={index}>
              <Card className="h-full border-gray-800 bg-black hover:border-gray-500 transition-colors p-6">
                <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                  <span className="text-4xl grayscale opacity-80">{achievement.icon}</span>
                  <h4 className="font-mono text-sm text-gray-300">{achievement.title}</h4>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default AchievementsSection;
