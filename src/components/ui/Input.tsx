'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-[var(--border-light)] font-mono text-sm',
            'text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]',
            'focus:outline-none focus:border-[var(--foreground)] transition-colors',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 font-mono">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
export default Input;

