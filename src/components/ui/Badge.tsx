import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-mono uppercase tracking-wider',
        {
          'bg-[var(--foreground)] text-[var(--background)]': variant === 'default',
          'border border-[var(--border-light)] text-[var(--muted-foreground)]': variant === 'outline',
          'bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border-light)]': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;

