'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { NAV_ITEMS } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';
import { Sun, Moon, FileText, Zap } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  // Don't show sidebar on admin pages
  if (pathname.startsWith('/admin') || pathname === '/login') return null;

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col justify-between border-r border-[var(--border-light)] bg-[var(--background)] z-40 px-8 py-12">
      {/* Logo */}
      <div>
        <Link href="/" className="block mb-16">
          <h1 className="font-mono text-sm tracking-[0.3em] uppercase font-bold">ANVITH<span className="text-[var(--muted-foreground)]">.KUMAR</span></h1>
        </Link>

        {/* Navigation */}
        <nav className="space-y-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 py-2.5 font-mono text-sm transition-all duration-200 group',
                  isActive
                    ? 'text-[var(--foreground)] font-medium'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                )}
              >
                <span className="text-xs text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">{item.number}</span>
                <span>{item.label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 bg-[var(--foreground)]" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom controls */}
      <div className="space-y-2">
        <div className="border-t border-[var(--border-light)] pt-6 mb-4" />
        
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 py-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors w-full"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          <span>{theme === 'light' ? 'dark' : 'light'} mode</span>
        </button>

        <Link
          href="/resume"
          className="flex items-center gap-3 py-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <FileText size={14} />
          <span>resume</span>
        </Link>

        <button
          onClick={toggleRecruiterMode}
          className={cn(
            'flex items-center gap-3 py-2 font-mono text-xs transition-colors w-full',
            isRecruiterMode ? 'text-[var(--foreground)] font-bold' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          )}
          aria-label="Toggle recruiter mode"
        >
          <Zap size={14} />
          <span>recruiter mode</span>
        </button>
      </div>
    </aside>
  );
}
