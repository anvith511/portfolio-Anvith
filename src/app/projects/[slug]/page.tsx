import { getProjectBySlug, getProjects } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import ArchitectureViewer from '@/components/projects/ArchitectureViewer';
import BehindTheBuild from '@/components/projects/BehindTheBuild';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, GitBranch, ExternalLink, Cpu, Layers } from 'lucide-react';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p: any) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rawProject = await getProjectBySlug(slug);
  if (!rawProject) notFound();

  const project: any = {
    ...rawProject,
    description: rawProject.full_description || rawProject.short_description || (rawProject as any).description,
    tech: (rawProject as any).technologies || (rawProject as any).tech || [],
    liveUrl: (rawProject as any).live_url || (rawProject as any).liveUrl,
    githubUrl: (rawProject as any).github_url || (rawProject as any).githubUrl,
    features: (rawProject as any).key_features || (rawProject as any).features || [],
    learnings: (rawProject as any).lessons_learned || (rawProject as any).learnings,
    results: (rawProject as any).impact || (rawProject as any).results,
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 min-h-[85vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (All Projects)</span>
          </Link>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">PROJECT // {project.slug}</span>
        </div>

        <TerminalPrompt command={`cat /projects/${project.slug}/README.md`} />

        {/* 01 / OVERVIEW */}
        <header className="mb-20 mt-6">
          <div className="text-xs font-mono text-[var(--muted-foreground)] mb-3 uppercase tracking-widest">
            01 // SYSTEM OVERVIEW
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-[var(--foreground)] uppercase">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--foreground)] font-light mb-10 max-w-3xl leading-relaxed">
            {project.short_description || project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[var(--border-light)] font-mono text-xs">
            <div>
              <div className="text-[var(--muted-foreground)] mb-1 uppercase text-[10px]">Category</div>
              <div className="font-bold text-[var(--foreground)]">{project.category}</div>
            </div>
            <div>
              <div className="text-[var(--muted-foreground)] mb-1 uppercase text-[10px]">Architecture</div>
              <div className="font-bold text-[var(--foreground)]">Microservice / Modular</div>
            </div>
            <div>
              <div className="text-[var(--muted-foreground)] mb-1 uppercase text-[10px]">Live Deployment</div>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline flex items-center gap-1 font-bold">
                  <span>Visit Demo</span>
                  <ExternalLink size={11} />
                </a>
              ) : <span className="text-[var(--muted-foreground)]">Local / Docker</span>}
            </div>
            <div>
              <div className="text-[var(--muted-foreground)] mb-1 uppercase text-[10px]">Repository</div>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline flex items-center gap-1 font-bold">
                  <span>GitHub</span>
                  <GitBranch size={11} />
                </a>
              ) : <span className="text-[var(--muted-foreground)]">Private</span>}
            </div>
          </div>
        </header>

        {/* Full description */}
        {project.full_description && (
          <section className="mb-20">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-4 uppercase tracking-widest font-bold">
              02 // SYSTEM SUMMARY
            </div>
            <p className="text-base sm:text-lg text-[var(--foreground)] leading-relaxed font-light">
              {project.full_description}
            </p>
          </section>
        )}

        {/* 03 / THE PROBLEM & SOLUTION */}
        {(project.problem || project.solution) && (
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.problem && (
              <div className="p-8 border border-[var(--border-light)] bg-[var(--muted)]">
                <div className="text-xs font-mono text-[var(--muted-foreground)] mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Layers size={14} className="text-[var(--foreground)]" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-8 border border-[var(--border-light)] bg-[var(--muted)]">
                <div className="text-xs font-mono text-[var(--muted-foreground)] mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Cpu size={14} className="text-[var(--foreground)]" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            )}
          </section>
        )}

        {/* 04 / ARCHITECTURE */}
        {project.architecture && (
          <section className="mb-20">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-6 uppercase tracking-widest font-bold">
              03 // ARCHITECTURE & DATA FLOW
            </div>
            <div className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)]">
              <ArchitectureViewer data={project.architecture} />
            </div>
          </section>
        )}

        {/* 05 / KEY FEATURES */}
        {project.features && project.features.length > 0 && (
          <section className="mb-20">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-6 uppercase tracking-widest font-bold">
              04 // KEY SYSTEM FEATURES
            </div>
            <ul className="space-y-4">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex gap-4 items-start border-b border-[var(--border-light)] pb-3">
                  <span className="text-[var(--muted-foreground)] font-mono text-xs">0{i + 1}</span>
                  <span className="text-[var(--foreground)] text-sm sm:text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 06 / TECHNOLOGY STACK */}
        {project.tech && project.tech.length > 0 && (
          <section className="mb-20">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-6 uppercase tracking-widest font-bold">
              05 // TECHNOLOGY STACK
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech: string) => (
                <span key={tech} className="border border-[var(--border-light)] px-4 py-2 text-xs text-[var(--foreground)] bg-[var(--muted)] font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 07 / ENGINEERING CHALLENGES */}
        {project.challenges && (
          <section className="mb-20">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-6 uppercase tracking-widest font-bold">
              06 // ENGINEERING CHALLENGES & OVERCOMING THEM
            </div>
            <div className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)]">
              <BehindTheBuild data={project.challenges} />
            </div>
          </section>
        )}

        {/* 08 / WHAT I LEARNED / IMPACT */}
        {(project.learnings || project.results) && (
          <section className="mb-20 border border-[var(--border-light)] p-8 bg-[var(--muted)]">
            <div className="text-xs font-mono text-[var(--muted-foreground)] mb-4 uppercase tracking-widest font-bold">
              07 // IMPACT & RETROSPECTIVE
            </div>
            {project.results && typeof project.results === 'string' && (
              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                <strong className="font-mono text-xs block text-[var(--muted-foreground)] mb-1 uppercase">Impact:</strong>
                {project.results}
              </p>
            )}
            {project.learnings && (
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                <strong className="font-mono text-xs block text-[var(--muted-foreground)] mb-1 uppercase">Lessons Learned:</strong>
                {project.learnings}
              </p>
            )}
          </section>
        )}

        {/* 09 / LINKS */}
        <section className="pt-8 border-t border-[var(--border-light)] flex flex-wrap gap-4 font-mono text-xs">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-[var(--border-light)] bg-[var(--foreground)] text-[var(--background)] px-6 py-3 font-bold hover:opacity-90 transition-opacity uppercase tracking-wider inline-flex items-center gap-2"
            >
              <GitBranch size={14} />
              <span>Inspect Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-[var(--border-light)] bg-[var(--muted)] text-[var(--foreground)] px-6 py-3 font-bold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors uppercase tracking-wider inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              <span>Launch Live Site</span>
            </a>
          )}
          <Link 
            href="/projects" 
            className="border border-[var(--border-light)] px-6 py-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors uppercase tracking-wider inline-flex items-center"
          >
            All Projects &rarr;
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}
