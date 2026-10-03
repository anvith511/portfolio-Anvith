import { getAboutContent, getEducation } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';

export const metadata = {
  title: 'About | Anvith Kumar',
  description: 'About Anvith Kumar, a software engineer specializing in frontend and AI.'
};

export default async function AboutPage() {
  const about = await getAboutContent();
  const education = await getEducation();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="cat about.md" />
        <h1 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter mt-8 text-white">About Anvith</h1>

        <section className="mb-24">
          <div className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl whitespace-pre-wrap">
            {(about as any)?.content || (about as any)?.bio || "I'm a software engineer building digital experiences."}
          </div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-800 pb-4">Core Competencies & Focus Areas</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            {((about as any)?.focusAreas || ["Frontend Engineering", "AI Integration", "Performance", "Security"]).map((area: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-gray-600 font-mono">/</span> {area}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-24">
          <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-4">Education</h2>
          <div className="space-y-8">
            {education?.map((edu: any, i: number) => (
              <div key={i} className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-gray-400 mb-4">{edu.degree}</p>
                <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                  <span>{edu.startDate} - {edu.endDate}</span>
                  <span>|</span>
                  <span>{edu.location}</span>
                  {edu.score && (
                    <>
                      <span>|</span>
                      <span className="text-white">CGPA: {edu.score}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
           <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-800 pb-4">Engineering Philosophy</h2>
           <div className="text-gray-400 text-lg leading-relaxed max-w-3xl whitespace-pre-wrap">
             {(about as any)?.philosophy || "Build fast, accessible, and secure applications with a focus on user experience."}
           </div>
        </section>

        <div className="flex flex-wrap gap-6 font-mono text-sm">
          <Link href="/resume" className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
            [View Resume]
          </Link>
          <Link href="/projects" className="border border-gray-800 px-6 py-3 text-gray-400 hover:border-gray-400 hover:text-white transition-colors uppercase tracking-wider">
            [View Projects]
          </Link>
          <Link href="/contact" className="border border-gray-800 px-6 py-3 text-gray-400 hover:border-gray-400 hover:text-white transition-colors uppercase tracking-wider">
            [Contact Me]
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
