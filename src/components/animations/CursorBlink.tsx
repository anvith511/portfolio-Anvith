'use client';

import { cn } from '@/lib/utils/cn';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CursorBlinkProps {
  className?: string;
  character?: string;
}

export function CursorBlink({ className, character = '_' }: CursorBlinkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={cn(
      'font-mono inline-block',
      !prefersReducedMotion && 'cursor-blink',
      className
    )}>
      {character}
    </span>
  );
}
