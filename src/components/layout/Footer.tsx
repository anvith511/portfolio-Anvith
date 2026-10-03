import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)] py-12">
      <div className="content-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
