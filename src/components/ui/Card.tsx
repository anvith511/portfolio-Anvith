import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'terminal' | 'ghost';
  hover?: boolean;
}

export function Card({ className, variant = 'default', hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'transition-all duration-300',
        {
          'border border-[var(--border-light)] p-6 md:p-8': variant === 'default',
          'border border-[var(--foreground)] p-6 md:p-8 font-mono': variant === 'terminal',
          'p-6 md:p-8': variant === 'ghost',
        },
        hover && 'hover:border-[var(--foreground)] hover:shadow-[4px_4px_0px_var(--foreground)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col space-y-1.5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export default Card;

