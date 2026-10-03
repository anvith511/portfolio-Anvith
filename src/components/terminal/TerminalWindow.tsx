import { cn } from '@/lib/utils/cn';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ title = 'terminal', children, className }: TerminalWindowProps) {
  return (
    <div className={cn('border border-[var(--foreground)]', className)}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--foreground)] bg-[var(--muted)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full border border-[var(--foreground)]" />
          <div className="w-3 h-3 rounded-full border border-[var(--foreground)]" />
          <div className="w-3 h-3 rounded-full border border-[var(--foreground)]" />
        </div>
        <span className="font-mono text-xs text-[var(--muted-foreground)] ml-2">{title}</span>
      </div>
      {/* Content */}
      <div className="p-6 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}

export default TerminalWindow;

