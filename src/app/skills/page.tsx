import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { skillCategoriesData, skillEvidenceMap } from '@/data/skills';
import { ArrowLeft, Code2 } from 'lucide-react';

export const metadata = { 
  title: 'Skills | Anvith Kumar — Technical Stack',
  description: 'Technical stack and engineering competencies across 8 categories: Programming, Frontend, Backend, Databases, AI/ML, Cybersecurity, Tools, Core CS.'
};

export default function SkillsPage() {
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
          <span className="font-mono text-xs text-[var(--muted-foreground)]">SKILLS_INSPECT // 8_CATEGORIES</span>
        </div>

        <TerminalPrompt command="./skills --category all --verbose" />
        <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          Technical Stack
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-16 max-w-2xl leading-relaxed font-mono">
          Comprehensive inventory of languages, frameworks, system concepts, and security tools applied in production builds and algorithmic challenges.
        </p>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategoriesData.map((category, i) => (
            <div key={category.id} className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-light)]">
                  <h2 className="text-sm font-mono font-bold text-[var(--foreground)] uppercase tracking-wider">
                    0{i + 1} // {category.name}
                  </h2>
                  <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mb-6 font-sans">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 font-mono text-xs border border-[var(--border-light)] bg-[var(--muted)] text-[var(--foreground)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample evidence if available */}
              {category.skills[0] && skillEvidenceMap[category.skills[0]] && (
                <div className="pt-4 border-t border-[var(--border-light)] text-[11px] font-mono text-[var(--muted-foreground)]">
                  <span className="text-[var(--foreground)] font-bold">Key Focus:</span> {skillEvidenceMap[category.skills[0]].concepts.slice(0, 3).join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Problem Solving & DSA Metrics */}
        <div className="border border-[var(--border-light)] p-8 sm:p-12 bg-[var(--muted)] shadow-[6px_6px_0px_var(--border-light)]">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--border-light)]">
            <Code2 size={22} className="text-[var(--foreground)]" />
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] uppercase tracking-tight">
                Algorithmic Discipline & DSA Record
              </h2>
              <span className="font-mono text-xs text-[var(--muted-foreground)]">LeetCode Verified Performance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="border-l-2 border-[var(--foreground)] pl-4 py-1">
              <div className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-1">370+</div>
              <div className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">LeetCode Problems Solved</div>
            </div>
            <div className="border-l-2 border-[var(--foreground)] pl-4 py-1">
              <div className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-1">100-Day</div>
              <div className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">Consistency Streak Badge</div>
            </div>
            <div className="border-l-2 border-[var(--foreground)] pl-4 py-1">
              <div className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-1">Advanced</div>
              <div className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">Trees, DP, Graphs & Search</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border-light)] flex justify-between items-center font-mono text-xs text-[var(--muted-foreground)]">
            <span>Profile: @anvithkumar511</span>
            <a 
              href="https://leetcode.com/u/anvithkumar511/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--foreground)] hover:underline font-bold"
            >
              View LeetCode Profile &rarr;
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
