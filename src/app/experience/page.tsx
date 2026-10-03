import { getExperience, getEducation } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Experience | Anvith Kumar' };

export default async function ExperiencePage() {
  const experience = await getExperience();
  const education = await getEducation();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="cat experience.log" />
        <h1 className="text-5xl md:text-7xl font-bold mb-24 uppercase tracking-tighter mt-8 text-white">Experience</h1>

        <div className="space-y-32">
          <section>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-gray-800 flex-grow"></div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500">Work History</h2>
              <div className="h-px bg-gray-800 flex-grow"></div>
            </div>

            <div className="space-y-16">
              {experience.map((exp: any, i: number) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-3 font-mono text-sm text-gray-500 mb-4 md:mb-0 md:text-right pt-1">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <div className="md:col-span-9 border-l border-gray-800 pl-8 md:pl-12 pb-12 relative">
                      <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-black border border-gray-500"></div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-lg text-gray-400 mb-6">{exp.company}</div>
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                      {exp.achievements && (
                        <ul className="space-y-4 mb-8">
                          {exp.achievements.map((ach: string, j: number) => (
                            <li key={j} className="flex gap-4 text-gray-400 text-base items-start">
                              <span className="text-gray-600 font-mono mt-0.5">/</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {exp.tech && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t: string) => (
                            <span key={t} className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1 bg-black/50">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-gray-800 flex-grow"></div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500">Education</h2>
              <div className="h-px bg-gray-800 flex-grow"></div>
            </div>

            <div className="space-y-8">
              {education?.map((edu: any, i: number) => (
                <div key={i} className="border border-gray-800 p-8 bg-black">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                      <div className="text-gray-400">{edu.degree}</div>
                    </div>
                    <div className="font-mono text-sm text-gray-500 text-left md:text-right">
                      <div>{edu.startDate} - {edu.endDate}</div>
                      <div className="mt-1">{edu.location}</div>
                    </div>
                  </div>
                  {edu.score && (
                    <div className="inline-block mt-4 px-3 py-1 border border-gray-800 font-mono text-sm text-white bg-gray-900">
                      CGPA: {edu.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
