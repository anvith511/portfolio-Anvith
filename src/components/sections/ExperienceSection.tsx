'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Badge } from '../ui/Badge';
import { fallbackExperience, fallbackEducation } from '@/lib/data/fallback';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection = ({ 
  experiences = fallbackExperience,
  education = fallbackEducation
}: { 
  experiences?: any[];
  education?: any[];
}) => {
  return (
    <section id="experience" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="cat experience.log --verified" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Experience & Education
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Industry internships focused on practical AI application engineering, network defense, and high-standard academic achievements.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Experience Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              <Briefcase size={14} className="text-[var(--foreground)]" />
              <span>Work & Research Experience</span>
            </div>

            <StaggerChildren className="space-y-6">
              {experiences.map((exp, index) => {
                const tags: string[] = exp.technologies || exp.tags || [];
                const role = exp.position || exp.role;
                const company = exp.company;
                const date = exp.period || `${exp.start_date || 'Feb 2026'} - ${exp.end_date || 'Present'}`;

                return (
                  <StaggerItem key={exp.id || index}>
                    <div className="border border-[var(--border-light)] bg-[var(--background)] p-6 md:p-8 transition-all duration-300 hover:border-[var(--foreground)] shadow-[4px_4px_0px_var(--border-light)] hover:shadow-[6px_6px_0px_var(--foreground)]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[var(--border-light)] gap-2">
                        <div>
                          <span className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">
                            0{index + 1} // INTERNSHIP
                          </span>
                          <h3 className="text-2xl font-bold text-[var(--foreground)]">
                            {role}
                          </h3>
                          <div className="text-base font-mono text-[var(--foreground)] font-medium mt-1">
                            {company}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-3 py-1.5 border border-[var(--border-light)] self-start sm:self-auto">
                          <Calendar size={12} className="text-[var(--foreground)]" />
                          <span>{date}</span>
                        </div>
                      </div>

                      <p className="text-base text-[var(--foreground)] leading-relaxed font-light mb-6">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-light)]">
                        {tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="font-mono text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>

          {/* Education Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-6">
              <GraduationCap size={14} className="text-[var(--foreground)]" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={edu.id || idx}
                  className="border border-[var(--border-light)] bg-[var(--muted)] p-8 shadow-[4px_4px_0px_var(--border-light)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--muted-foreground)] pb-3 mb-4 border-b border-[var(--border-light)]">
                    <span>{edu.start_date ? '2022 – 2026' : '2022 – 2026'}</span>
                    <span className="font-bold text-[var(--foreground)] bg-[var(--background)] px-2 py-0.5 border border-[var(--border-light)]">
                      CGPA {edu.gpa || '9.11'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    {edu.institution || 'New Horizon College of Engineering'}
                  </h3>

                  <div className="font-mono text-xs text-[var(--foreground)] font-medium mb-4">
                    {edu.degree || 'Bachelor of Engineering (B.E.)'}
                    <span className="text-[var(--muted-foreground)] block">Computer Engineering</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted-foreground)] mb-4">
                    <MapPin size={12} className="text-[var(--foreground)]" />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>

                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--border-light)] pt-4 font-sans">
                    {edu.description || 'Core curriculum focused on Data Structures, Algorithms, System Architecture, Database Management Systems, and Security Engineering.'}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[var(--border-light)] flex items-center gap-2 text-[10px] font-mono text-[var(--muted-foreground)] uppercase">
                    <CheckCircle2 size={12} className="text-[var(--foreground)]" />
                    <span>Academic Standing: Top Percentile</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
