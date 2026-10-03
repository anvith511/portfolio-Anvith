import { getAchievements } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Achievements | Anvith Kumar' };

export default async function AchievementsPage() {
  const achievements = await getAchievements();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="./achievements" />
        <h1 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter mt-8 text-white">Achievements</h1>

        <div className="space-y-6">
          {achievements.map((achievement: any, i: number) => (
            <div key={i} className="border border-gray-800 p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-gray-500 transition-colors bg-black">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{achievement.description}</p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end font-mono text-sm">
                <span className="text-gray-300 border border-gray-700 px-3 py-1 mb-2 bg-gray-900 uppercase tracking-wider">{achievement.category}</span>
                <span className="text-gray-600">{achievement.date || achievement.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
