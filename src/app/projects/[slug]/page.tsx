import { getProjectBySlug, getProjects } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import ArchitectureViewer from '@/components/projects/ArchitectureViewer';
import BehindTheBuild from '@/components/projects/BehindTheBuild';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command={`cat /projects/${project.slug}/README.md`} />

        <Link href="/projects" className="inline-block mt-8 mb-16 text-sm font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
          &lt;- Back to Projects
        </Link>

        {/* 01 / OVERVIEW */}
        <header className="mb-24">
          <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">01 / Overview</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white uppercase">{project.title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">{project.tagline || project.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-800">
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2 uppercase">Category</div>
              <div className="text-sm text-gray-300">{project.category}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2 uppercase">Year</div>
              <div className="text-sm text-gray-300">{project.year || "2024"}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2 uppercase">Live Site</div>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline underline-offset-4 hover:text-gray-300">Visit &rarr;</a>
              ) : <span className="text-sm text-gray-600">N/A</span>}
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2 uppercase">Repository</div>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline underline-offset-4 hover:text-gray-300">GitHub &rarr;</a>
              ) : <span className="text-sm text-gray-600">Private</span>}
            </div>
          </div>
        </header>

        {/* 02 / THE PROBLEM */}
        {project.problem && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">02 / The Problem</div>
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {project.problem}
            </div>
          </section>
        )}

        {/* 03 / THE SOLUTION */}
        {project.solution && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">03 / The Solution</div>
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {project.solution}
            </div>
          </section>
        )}

        {/* 04 / ARCHITECTURE */}
        {project.architecture && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">04 / Architecture</div>
            <ArchitectureViewer data={project.architecture} />
          </section>
        )}

        {/* 05 / KEY FEATURES */}
        {project.features && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">05 / Key Features</div>
            <ul className="space-y-4">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-gray-600 font-mono mt-1">/</span>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 06 / TECHNOLOGY STACK */}
        {project.tech && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">06 / Technology Stack</div>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((tech: string) => (
                <span key={tech} className="border border-gray-800 px-4 py-2 text-sm text-gray-300 bg-black font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 07 / ENGINEERING CHALLENGES */}
        {project.challenges && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">07 / Engineering Challenges</div>
            <BehindTheBuild data={project.challenges} />
          </section>
        )}

        {/* 08 / WHAT I LEARNED */}
        {project.learnings && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">08 / What I Learned</div>
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {project.learnings}
            </div>
          </section>
        )}

        {/* 09 / RESULTS & IMPACT */}
        {project.results && (
          <section className="mb-24">
            <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">09 / Results & Impact</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result: any, i: number) => (
                <div key={i} className="border border-gray-800 p-6 text-center bg-black">
                  <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">{result.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10 / NEXT STEPS & LINKS */}
        <section className="mb-24 pt-12 border-t border-gray-900">
          <div className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">10 / Links</div>
          <div className="flex flex-wrap gap-6 font-mono text-sm">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-center flex-grow md:flex-grow-0">
                [View Live Project]
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-800 px-6 py-3 text-gray-400 hover:border-gray-400 hover:text-white transition-colors uppercase tracking-wider text-center flex-grow md:flex-grow-0">
                [Source Code]
              </a>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
