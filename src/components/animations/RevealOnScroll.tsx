'use client';

import React from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  width?: 'fit' | 'full';
}

export function RevealOnScroll({ children, className, width = 'full' }: RevealOnScrollProps) {
  return (
    <div className={className} style={{ width: width === 'full' ? '100%' : 'fit-content' }}>
      {children}
    </div>
  );
}

export default RevealOnScroll;
