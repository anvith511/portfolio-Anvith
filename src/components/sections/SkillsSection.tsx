'use client';

import React, { useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { Terminal, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { skillCategoriesData, skillEvidenceMap } from '@/data/skills';

export const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string>('Java');

  const activeEvidence = skillEvidenceMap[activeSkill] || {
    name: activeSkill,
    category: 'Engineering Competency',
    usedIn: ['Production Projects & Algorithmic Problem Solving'],
    context: `Applied in engineering systems, verified coursework at New Horizon College of Engineering, and rigorous implementations.`,
    concepts: ['Practical Engineering', 'Clean Code', 'Performance Optimization'],
  };

  return (
    <section id="skills" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <TerminalPrompt command="./skills --inspect" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Technical Stack & Evidence
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Categorized core competencies with verified engineering evidence from production builds and algorithmic problem solving.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Skill Groups (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {skillCategoriesData.map((group) => (
              <div key={group.name} className="border-b border-[var(--border-light)] pb-8 last:border-b-0">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest">
                  <span className="text-[var(--foreground)] font-bold">//</span>
                  <span>{group.name}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const isSelected = activeSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => setActiveSkill(skill)}
                        className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] shadow-[2px_2px_0px_var(--foreground)]'
                            : 'bg-[var(--background)] text-[var(--foreground)] border-[var(--border-light)] hover:border-[var(--foreground)] hover:bg-[var(--muted)]'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Skill Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="border border-[var(--border-light)] p-8 bg-[var(--muted)] shadow-[6px_6px_0px_var(--border-light)] transition-all duration-300 hover:border-[var(--foreground)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-light)]">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)]">
                  <Terminal size={14} className="text-[var(--foreground)]" />
                  <span>SKILL_INSPECTOR v2.0</span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--foreground)] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--background)]">
                  <Sparkles size={10} />
                  <span>EVIDENCE</span>
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-foreground)] block mb-1">
                    {activeEvidence.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[var(--foreground)]">
                    {activeSkill}
                  </h3>
                </div>

                <div className="border-t border-[var(--border-light)] pt-4">
                  <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-2 font-bold flex items-center gap-1.5">
                    <Layers size={12} className="text-[var(--foreground)]" />
                    <span>Applied In:</span>
                  </span>
                  <ul className="space-y-1.5">
                    {activeEvidence.usedIn.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-xs text-[var(--foreground)]">
                        <ArrowRight size={12} className="text-[var(--muted-foreground)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[var(--border-light)] pt-4">
                  <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-2 font-bold">
                    // Engineering Context:
                  </span>
                  <p className="text-xs text-[var(--foreground)] leading-relaxed font-sans">
                    {activeEvidence.context}
                  </p>
                </div>

                <div className="border-t border-[var(--border-light)] pt-4">
                  <span className="font-mono text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-2 font-bold">
                    Key Concepts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeEvidence.concepts.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-1 bg-[var(--background)] border border-[var(--border-light)] text-[var(--foreground)]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-light)] font-mono text-[10px] text-[var(--muted-foreground)] flex items-center justify-between">
                <span>CLICK ANY TAG TO INSPECT</span>
                <CheckCircle2 size={12} className="text-[var(--foreground)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
