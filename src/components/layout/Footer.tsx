import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { personalData } from '@/data/personal';
import { Terminal, GitBranch, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="lg:ml-64 border-t border-[var(--border-light)] bg-[var(--background)] py-8 px-6 sm:px-12 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[var(--border-light)]">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--foreground)]">
            <Terminal size={14} />
            <span className="font-bold">anvith@portfolio:~$</span>
            <span className="text-[var(--muted-foreground)]">exit 0 // status: OK</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1.5">
              <GitBranch size={12} className="text-[var(--foreground)]" />
              <span>branch: main</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <a 
              href={personalData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a 
              href={personalData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={personalData.socials.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--foreground)] transition-colors"
            >
              LeetCode
            </a>
            <Link href="/resume" className="hover:text-[var(--foreground)] transition-colors">
              Resume
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[var(--muted-foreground)] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-[var(--border-light)] bg-[var(--muted)]">
              CGPA 9.11 // B.E. Comp Eng
            </span>
            <a 
              href="#top" 
              className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>top</span>
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
