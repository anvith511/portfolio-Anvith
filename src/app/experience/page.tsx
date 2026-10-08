import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { experiencesData, educationData } from '@/data/experience';
import { ArrowLeft, Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata = { 
  title: 'Experience | Anvith Kumar — Work & Education',
  description: 'Internships and academic credentials for Anvith Kumar, featuring work at MindMatrix.io, NIIT Foundation / Cisco CSR, and New Horizon College of Engineering.'
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 min-h-[85vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (Back to Home)</span>
          </Link>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">CAT experience.log</span>
        </div>

        <TerminalPrompt command="cat experience.log --all --verified" />
        <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          Work & Education
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-16 max-w-2xl leading-relaxed font-mono">
          Industry internships in applied AI engineering and network defense, backed by top-percentile academic standing in Computer Engineering.
        </p>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-8 border-b border-[var(--border-light)] pb-3 font-bold flex items-center gap-2">
            <Briefcase size={14} className="text-[var(--foreground)]" />
            <span>// Professional Experience</span>
          </h2>

          <div className="space-y-12">
            {experiencesData.map((exp, i) => (
              <div 
                key={exp.id} 
                className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)]"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4 pb-4 border-b border-[var(--border-light)]">
                  <div>
                    <span className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">
                      0{i + 1} // {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">{exp.position}</h3>
                    <div className="text-sm font-mono text-[var(--foreground)] font-medium mt-0.5">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-2.5 py-1 border border-[var(--border-light)] self-start sm:self-auto">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[var(--muted-foreground)] font-bold block mb-2">Key Responsibilities:</span>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-[var(--foreground)]">
                      {exp.responsibilities.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-[var(--muted-foreground)] font-bold block mb-2">Measurable Impact:</span>
                    <ul className="space-y-1.5 text-xs text-[var(--foreground)]">
                      {exp.measurable_achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[var(--foreground)] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-light)]">
                  {exp.technologies.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-[var(--border-light)] bg-[var(--muted)] text-[var(--foreground)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-8 border-b border-[var(--border-light)] pb-3 font-bold flex items-center gap-2">
            <GraduationCap size={14} className="text-[var(--foreground)]" />
            <span>// Education</span>
          </h2>

          {educationData.map((edu) => (
            <div key={edu.id} className="border border-[var(--border-light)] p-8 bg-[var(--muted)]">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4 pb-4 border-b border-[var(--border-light)]">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">{edu.institution}</h3>
                  <div className="text-sm font-mono text-[var(--foreground)] mt-1">
                    {edu.degree} in {edu.field}
                  </div>
                </div>
                <div className="font-mono text-xs text-[var(--muted-foreground)]">
                  {edu.period}
                </div>
              </div>

              <div className="mb-6">
                <span className="font-mono text-xs bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-light)] px-3 py-1 font-bold inline-block mb-3">
                  CGPA: {edu.gpa} (Top Percentile)
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--foreground)]">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--muted-foreground)]">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase text-[var(--muted-foreground)] font-bold block mb-2">Relevant Core Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span key={c} className="font-mono text-[10px] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--background)] text-[var(--foreground)]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </PageTransition>
  );
}
