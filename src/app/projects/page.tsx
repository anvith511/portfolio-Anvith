import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, GitBranch } from 'lucide-react';

export const metadata = { 
  title: 'Projects | Anvith Kumar — Engineering Builds',
  description: 'Production-ready engineering projects by Anvith Kumar across Mobile, Security, AI Tooling, and Full-Stack Systems.'
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-20 px-6 min-h-[85vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (Back to Home)</span>
          </Link>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">LS projects/</span>
        </div>

        <TerminalPrompt command="ls -la projects/ --all" />
        <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          Engineering Projects
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-16 max-w-2xl leading-relaxed font-mono">
          Engineered solutions featuring geospatial query optimization, zero-knowledge encryption, and real-time AI developer tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={project.slug} 
              className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)] hover:shadow-[8px_8px_0px_var(--foreground)] hover:border-[var(--foreground)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-light)]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
                    0{idx + 1} // {project.category}
                  </span>
                  <span className="font-mono text-xs text-[var(--foreground)] font-bold">PROD</span>
                </div>

                <Link href={`/projects/${project.slug}`} className="group">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-3 group-hover:underline underline-offset-4 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
                  </h2>
                </Link>

                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 font-sans">
                  {project.short_description}
                </p>

                {/* Problem & Solution Mini Snippet */}
                <div className="space-y-3 mb-6 p-4 bg-[var(--muted)] border border-[var(--border-light)] text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[var(--muted-foreground)] font-bold block">Problem Solved:</span>
                    <span className="text-[var(--foreground)] font-sans">{project.problem}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[11px] font-mono px-2 py-0.5 border border-[var(--border-light)] bg-[var(--muted)] text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)] font-mono text-xs">
                <Link 
                  href={`/projects/${project.slug}`}
                  className="font-bold text-[var(--foreground)] hover:underline"
                >
                  Architecture & Case Study &rarr;
                </Link>

                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <GitBranch size={13} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
