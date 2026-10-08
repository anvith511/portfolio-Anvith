import { getAboutContent, getEducation } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { personalData } from '@/data/personal';
import { ArrowLeft, Terminal } from 'lucide-react';

export const metadata = {
  title: 'About | Anvith Kumar — Computer Engineering',
  description: 'About Anvith Kumar, Computer Engineering graduate with focus on Software Engineering, Data, AI, and Cybersecurity.'
};

export default async function AboutPage() {
  const about = await getAboutContent();
  const education = await getEducation();

  const focusAreas = [
    { title: "Full-Stack & Systems Architecture", desc: "FastAPI, React Native, Next.js, Node.js, distributed microservices." },
    { title: "Applied AI & Inference Pipelines", desc: "Structured prompt workflows, Google Gemini integration, latency optimization." },
    { title: "Database Optimization & Spatial Queries", desc: "MongoDB 2dsphere indexing, PostgreSQL relational models, query caching." },
    { title: "Cybersecurity & Cryptography", desc: "Client-side AES-256 encryption, RBAC, network defense simulation." }
  ];

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
          <span className="font-mono text-xs text-[var(--muted-foreground)]">CAT about.md</span>
        </div>

        <TerminalPrompt command="cat about.md --detailed" />
        <h1 className="text-4xl sm:text-6xl font-black mb-8 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          About Anvith
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-16 max-w-2xl font-mono">
          Computer Engineering graduate with a strong problem-solving mindset and practical systems engineering experience.
        </p>

        <section className="mb-20">
          <div className="text-lg sm:text-xl text-[var(--foreground)] font-light leading-relaxed mb-12 max-w-3xl whitespace-pre-wrap">
            {about?.content || personalData.fullBio}
          </div>

          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-6 border-b border-[var(--border-light)] pb-3 font-bold">
            // Core Competencies & Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <div key={i} className="border border-[var(--border-light)] p-5 bg-[var(--muted)]">
                <span className="font-mono text-xs font-bold text-[var(--foreground)] block mb-1">
                  0{i + 1} // {area.title}
                </span>
                <p className="text-xs text-[var(--muted-foreground)] font-sans">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-6 border-b border-[var(--border-light)] pb-3 font-bold">
            // Education & Academic Standing
          </h2>
          <div className="space-y-6">
            {education?.map((edu: any, i: number) => (
              <div key={i} className="border border-[var(--border-light)] p-8 bg-[var(--background)] shadow-[4px_4px_0px_var(--border-light)]">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">{edu.institution}</h3>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">{edu.start_date ? '2022 - 2026' : '2022 - 2026'}</span>
                </div>
                <p className="text-[var(--muted-foreground)] font-mono text-sm mb-4">{edu.degree} in {edu.field}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <span className="text-[var(--foreground)] border border-[var(--border-light)] px-2.5 py-1 bg-[var(--muted)] font-bold">
                    CGPA: {edu.gpa || '9.11'} / 10.0 (Top Percentile)
                  </span>
                  <span className="text-[var(--muted-foreground)]">Bengaluru, India</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-[var(--border-light)] p-8 bg-[var(--muted)]">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-4 font-bold flex items-center gap-2">
            <Terminal size={14} className="text-[var(--foreground)]" />
            <span>// Engineering Mindset</span>
          </h2>
          <p className="text-sm text-[var(--foreground)] leading-relaxed font-light">
            I prioritize writing readable, strongly-typed code with clear architectural boundaries. From low-level algorithmic optimizations in LeetCode to high-level async systems in FastAPI, my engineering goal is simplicity, measurable reliability, and direct user utility.
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
