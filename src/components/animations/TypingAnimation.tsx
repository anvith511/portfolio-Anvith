'use client';

import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({ text, speed = 50, delay = 0, className, onComplete }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      onComplete?.();
      return;
    }

    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay, prefersReducedMotion, text, onComplete]);

  useEffect(() => {
    if (!started || prefersReducedMotion) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, prefersReducedMotion, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && started && (
        <span className="cursor-blink">|</span>
      )}
    </span>
  );
}
