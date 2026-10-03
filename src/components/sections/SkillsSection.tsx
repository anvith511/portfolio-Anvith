'use client';

import React, { useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';

const skillsData = [
  {
    category: 'PROGRAMMING',
    skills: ['Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    category: 'DEVELOPMENT',
    skills: ['React', 'React Native', 'Node.js', 'FastAPI', 'Flask', 'HTML', 'CSS']
  },
  {
    category: 'DATABASE',
    skills: ['MongoDB', 'SQL', 'SQLite']
  },
  {
    category: 'CONCEPTS',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design']
  },
  {
    category: 'SECURITY',
    skills: ['Cryptography', 'RBAC', 'Digital Forensics', 'Vulnerability Assessment', 'Cybersecurity']
  },
  {
    category: 'TOOLS',
    skills: ['GitHub', 'Postman', 'Tableau', 'Snowflake', 'Android Studio', 'VS Code']
  }
];

export const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-[#050505]">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="./skills" className="mb-16" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {skillsData.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-sm text-gray-500 mb-6 border-b border-gray-900 pb-2">
                  // {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <button
                      key={skill}
                      onClick={() => setActiveSkill(skill === activeSkill ? null : skill)}
                      className={`px-4 py-2 font-mono text-sm border transition-colors ${
                        activeSkill === skill 
                          ? 'border-white text-white bg-white/5' 
                          : 'border-gray-800 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-800 p-8 h-[400px] bg-black flex flex-col">
              <div className="font-mono text-xs text-gray-600 mb-4 border-b border-gray-900 pb-2">
                SKILL_INSPECTOR v1.0
              </div>
              
              {activeSkill ? (
                <div className="flex-1 flex flex-col space-y-4 animate-in fade-in duration-300">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{activeSkill}</h4>
                  <div className="font-mono text-sm text-gray-400 space-y-2">
                    <p>&gt; Status: Proficient</p>
                    <p>&gt; Used in: HelpMate, Time Capsule</p>
                    <p className="mt-4 text-gray-500">
                      // Select another skill to inspect or click again to clear.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center font-mono text-sm text-gray-600 text-center">
                  Select a skill to view details.<br/>
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
