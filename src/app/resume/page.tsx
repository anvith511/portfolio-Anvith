import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import { personalData } from '@/data/personal';
import { experiencesData, educationData } from '@/data/experience';
import { projectsData } from '@/data/projects';
import { skillCategoriesData } from '@/data/skills';
import { achievementsData } from '@/data/achievements';
import { certificationsData } from '@/data/certifications';
import { ArrowLeft, Download, ExternalLink, GitBranch, Briefcase, Mail } from 'lucide-react';

export const metadata = { 
  title: 'Resume | Anvith Kumar — Computer Engineering',
  description: 'Verified resume and credentials for Anvith Kumar — Computer Engineering graduate specializing in Software Engineering, Data, AI, and Cybersecurity.'
};

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 min-h-[90vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (Back to Portfolio)</span>
          </Link>
          <div className="font-mono text-xs text-[var(--muted-foreground)]">
            STATUS: ACTIVE // OPEN_TO_ROLES
          </div>
        </div>

        <TerminalPrompt command="cat resume.md --render" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 mt-6 gap-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[var(--foreground)]">
              Curriculum Vitae
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[var(--muted-foreground)] mt-2">
              Official Engineering Resume // Candidate Record
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a 
              href="/api/resume" 
              download={personalData.resume.fileName} 
              className="font-mono text-xs border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 hover:opacity-90 transition-opacity uppercase tracking-wider inline-flex items-center gap-2.5 font-bold cursor-pointer"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Document Paper */}
        <div className="border border-[var(--border-light)] bg-[var(--background)] p-8 sm:p-14 shadow-[8px_8px_0px_var(--border-light)]">
          {/* Document Header */}
          <header className="border-b border-[var(--border-light)] pb-8 mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight uppercase mb-1">
                {personalData.fullName}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[var(--foreground)] font-medium">
                {personalData.title}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1 font-mono">
                {personalData.location} • CGPA: {personalData.cgpa} / 10.0 (NHCE)
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-[var(--muted-foreground)]">
              <a href={personalData.socials.email} className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5">
                <Mail size={12} />
                <span>{personalData.email}</span>
              </a>
              <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5">
                <GitBranch size={12} />
                <span>github.com/anvith511</span>
              </a>
              <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5">
                <Briefcase size={12} />
                <span>linkedin.com/in/anvith-kumar</span>
              </a>
              <a href={personalData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5">
                <ExternalLink size={12} />
                <span>leetcode.com/anvithkumar511</span>
              </a>
            </div>
          </header>

          <div className="space-y-12">
            {/* Education */}
            <section>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 border-b border-[var(--border-light)] pb-1.5 flex items-center justify-between">
                <span>01 // EDUCATION</span>
                <span className="text-[var(--muted-foreground)] font-normal text-[10px]">CGPA: 9.11</span>
              </h3>
              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <span className="font-bold text-base text-[var(--foreground)]">{edu.institution}</span>
                    <span className="font-mono text-xs text-[var(--muted-foreground)]">{edu.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline text-xs font-mono text-[var(--muted-foreground)]">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="text-[var(--foreground)] font-bold">CGPA: {edu.gpa}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[var(--foreground)] space-y-1 font-sans pt-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 border-b border-[var(--border-light)] pb-1.5">
                02 // PROFESSIONAL EXPERIENCE
              </h3>
              <div className="space-y-8">
                {experiencesData.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-[var(--foreground)]">{exp.position}</span>
                        <span className="font-mono text-xs text-[var(--muted-foreground)]">@ {exp.company}</span>
                      </div>
                      <span className="font-mono text-xs text-[var(--muted-foreground)]">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-[var(--foreground)] space-y-1.5 font-sans leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                      {exp.measurable_achievements.map((ach, i) => (
                        <li key={`ach-${i}`} className="font-medium">{ach}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Engineering Projects */}
            <section>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 border-b border-[var(--border-light)] pb-1.5">
                03 // SELECTED ENGINEERING PROJECTS
              </h3>
              <div className="space-y-6">
                {projectsData.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[var(--foreground)]">{proj.title}</span>
                        <span className="font-mono text-[11px] text-[var(--muted-foreground)]">({proj.category})</span>
                      </div>
                      <a href={proj.github_url} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline">
                        github.com/anvith511
                      </a>
                    </div>
                    <p className="text-xs text-[var(--foreground)] leading-relaxed">
                      {proj.short_description}
                    </p>
                    <p className="text-[11px] font-mono text-[var(--muted-foreground)]">
                      <strong className="text-[var(--foreground)]">Stack:</strong> {proj.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 border-b border-[var(--border-light)] pb-1.5">
                04 // TECHNICAL SKILLS & STACK
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {skillCategoriesData.map((cat) => (
                  <div key={cat.id} className="p-3 border border-[var(--border-light)] bg-[var(--muted)]">
                    <span className="font-bold block text-[10px] uppercase text-[var(--muted-foreground)] mb-1">
                      {cat.name}
                    </span>
                    <span className="text-[var(--foreground)] leading-relaxed text-[11px]">
                      {cat.skills.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications & Achievements */}
            <section>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 border-b border-[var(--border-light)] pb-1.5">
                05 // CERTIFICATIONS & VERIFIED ACHIEVEMENTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block font-bold">
                    Certifications
                  </span>
                  <ul className="space-y-1.5 font-sans">
                    {certificationsData.map((c) => (
                      <li key={c.id} className="flex justify-between items-baseline border-b border-[var(--border-light)] pb-1">
                        <span className="font-medium text-[var(--foreground)]">{c.name}</span>
                        <span className="font-mono text-[10px] text-[var(--muted-foreground)]">{c.issuer}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block font-bold">
                    Key Achievements
                  </span>
                  <ul className="space-y-1.5 font-sans">
                    {achievementsData.slice(0, 4).map((a) => (
                      <li key={a.id} className="flex justify-between items-baseline border-b border-[var(--border-light)] pb-1">
                        <span className="font-medium text-[var(--foreground)]">{a.title}</span>
                        <span className="font-mono text-[10px] text-[var(--muted-foreground)]">{a.badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-14 pt-6 border-t border-[var(--border-light)] flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-[var(--muted-foreground)] gap-2">
            <span>DOCUMENT VERIFIED // CANDIDATE: ANVITH KUMAR</span>
            <span>UPDATED: OCTOBER 2026</span>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}
