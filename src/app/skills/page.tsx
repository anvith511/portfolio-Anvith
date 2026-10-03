import { getSkillCategories } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Skills | Anvith Kumar' };

export default async function SkillsPage() {
  const categories = await getSkillCategories();

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="./skills --verbose" />
        <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter mt-8 text-white">Skills Dashboard</h1>
        <p className="text-gray-400 text-lg mb-24 max-w-2xl leading-relaxed">
          A comprehensive overview of my technical toolkit, problem-solving capabilities, and engineering focus areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category: any, i: number) => (
            <div key={i} className="border border-gray-800 p-8 bg-black">
              <h2 className="text-xl font-bold text-white mb-8 pb-4 border-b border-gray-800 uppercase tracking-wider">{category.title}</h2>
              <div className="space-y-8">
                {category.skills.map((skill: any, j: number) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{skill.level || 'Experienced'}</span>
                    </div>
                    {skill.context && (
                      <div className="text-sm text-gray-500 mb-3">{skill.context}</div>
                    )}
                    <div className="w-full h-1 bg-gray-900 overflow-hidden rounded-none">
                      <div
                        className="h-full bg-gray-400"
                        style={{ width: skill.percentage ? `${skill.percentage}%` : '70%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border border-gray-800 p-12 text-center bg-black">
          <h2 className="text-2xl font-bold text-white mb-12 uppercase tracking-widest border-b border-gray-800 pb-4 max-w-sm mx-auto">Problem Solving Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-white mb-4">370+</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">LeetCode Solved</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-4">100+</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Day Streak</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-4">Top 15%</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Global Rank</div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
