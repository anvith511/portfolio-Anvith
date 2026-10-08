'use client';

import React from 'react';

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({ children, className, ...props }: FadeInProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default FadeIn;
