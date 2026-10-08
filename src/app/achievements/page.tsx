import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { achievementsData } from '@/data/achievements';
import { certificationsData } from '@/data/certifications';
import { ArrowLeft, Trophy, ShieldCheck } from 'lucide-react';

export const metadata = { 
  title: 'Achievements | Anvith Kumar — Milestones & Certifications',
  description: 'Verified academic, competitive, and athletic achievements for Anvith Kumar, including LeetCode streaks, VTU Nationals, and Google/IBM certifications.'
};

export default function AchievementsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 min-h-[85vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (Back to Home)</span>
          </Link>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">ACHIEVEMENTS // LOG</span>
        </div>

        <TerminalPrompt command="./achievements --all --verified" />
        <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          Achievements & Honors
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-16 max-w-2xl leading-relaxed font-mono">
          Demonstrated competitive spirit, athletic resilience, and consistent algorithmic problem solving.
        </p>

        {/* Key Achievements */}
        <section className="mb-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-8 border-b border-[var(--border-light)] pb-3 font-bold flex items-center gap-2">
            <Trophy size={14} className="text-[var(--foreground)]" />
            <span>// Key Competitive & Academic Milestones</span>
          </h2>

          <div className="space-y-6">
            {achievementsData.map((item, i) => (
              <div 
                key={item.id} 
                className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)] hover:border-[var(--foreground)] transition-colors flex flex-col md:flex-row gap-6 md:items-center justify-between"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[var(--muted-foreground)]">0{i + 1}</span>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-sans">{item.description}</p>
                </div>
                <div className="shrink-0 flex flex-col items-start md:items-end font-mono text-xs gap-1.5">
                  <span className="text-[var(--foreground)] border border-[var(--border-light)] px-3 py-1 bg-[var(--muted)] uppercase font-bold tracking-wider">
                    {item.badge}
                  </span>
                  {item.metrics && (
                    <span className="text-[var(--muted-foreground)] text-[11px]">{item.metrics}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-8 border-b border-[var(--border-light)] pb-3 font-bold flex items-center gap-2">
            <ShieldCheck size={14} className="text-[var(--foreground)]" />
            <span>// Verified Credentials & Certifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id} 
                className="border border-[var(--border-light)] p-6 bg-[var(--muted)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 pb-2 border-b border-[var(--border-light)]">
                    <span className="font-mono text-xs font-bold text-[var(--foreground)] uppercase">{cert.issuer}</span>
                    <span className="font-mono text-xs text-[var(--muted-foreground)]">{cert.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-[var(--foreground)] mb-2">{cert.name}</h3>
                  <p className="text-xs text-[var(--muted-foreground)] mb-4 leading-relaxed font-sans">{cert.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-light)]">
                  {cert.skills_covered.slice(0, 3).map((skill) => (
                    <span key={skill} className="font-mono text-[10px] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--background)] text-[var(--foreground)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
