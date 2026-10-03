import { getProjects } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';

export const metadata = { title: 'Projects | Anvith Kumar' };

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="ls -la projects/" />
        <h1 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter mt-8 text-white">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block h-full">
              <div className="border border-gray-800 p-8 h-full flex flex-col hover:border-gray-400 transition-colors relative overflow-hidden bg-black">
                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                  {project.year || "2024"}
                </div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:underline underline-offset-4">{project.title}</h3>
                <p className="text-gray-400 flex-grow mb-8 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech?.slice(0, 4).map((tech: string) => (
                    <span key={tech} className="text-xs font-mono text-gray-500 before:content-['#'] before:text-gray-700">
                      {tech.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
