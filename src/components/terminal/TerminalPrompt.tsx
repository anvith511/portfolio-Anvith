import { cn } from '@/lib/utils/cn';

interface TerminalPromptProps {
  command: string;
  prefix?: string;
  className?: string;
}

export function TerminalPrompt({ command, prefix = 'anvith@portfolio:~$', className }: TerminalPromptProps) {
  return (
    <div className={cn('font-mono text-sm text-[var(--muted-foreground)] mb-6', className)}>
      <span className="select-none">{prefix} </span>
      <span className="text-[var(--foreground)]">{command}</span>
      <span className="cursor-blink ml-1 text-[var(--foreground)]">_</span>
    </div>
  );
}

export default TerminalPrompt;

