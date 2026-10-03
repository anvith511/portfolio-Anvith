'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'terminal' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-mono text-sm tracking-wider uppercase transition-all duration-200 border',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] hover:bg-transparent hover:text-[var(--foreground)]': variant === 'primary',
            'bg-transparent text-[var(--foreground)] border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]': variant === 'secondary' || variant === 'outline',
            'bg-transparent text-[var(--foreground)] border-transparent hover:border-[var(--foreground)]': variant === 'ghost',
            'bg-transparent text-[var(--foreground)] border-[var(--border-light)] font-mono hover:border-[var(--foreground)]': variant === 'terminal',
          },
          {
            'px-4 py-2 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Processing...
          </span>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
export default Button;
export type { ButtonProps };
