'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  width?: 'fit' | 'full';
}

export function RevealOnScroll({ children, className, width = 'full' }: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className} style={{ width: width === 'full' ? '100%' : 'fit-content' }}>{children}</div>;
  }

  return (
    <div ref={ref} style={{ position: 'relative', width: width === 'full' ? '100%' : 'fit-content', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
