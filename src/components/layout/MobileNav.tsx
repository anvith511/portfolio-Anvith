'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { NAV_ITEMS } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Don't show on admin pages
  if (pathname.startsWith('/admin') || pathname === '/login') return null;

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--background)] border-b border-[var(--border-light)]">
        <Link href="/" className="font-mono text-sm tracking-[0.2em] uppercase font-bold">
          ANVITH<span className="text-[var(--muted-foreground)]">.K</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-20"
          >
            <nav className="flex flex-col px-8 py-8" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-4 py-4 font-mono text-lg border-b border-[var(--border-light)] transition-colors',
                        isActive ? 'text-[var(--foreground)] font-medium' : 'text-[var(--muted-foreground)]'
                      )}
                    >
                      <span className="text-sm text-[var(--muted-foreground)]">{item.number}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}

              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--border-light)]">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 font-mono text-sm text-[var(--muted-foreground)]"
                >
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  {theme === 'light' ? 'dark' : 'light'}
                </button>
                <button
                  onClick={toggleRecruiterMode}
                  className={cn(
                    'flex items-center gap-2 font-mono text-sm',
                    isRecruiterMode ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'
                  )}
                >
                  <Zap size={16} />
                  recruiter
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
