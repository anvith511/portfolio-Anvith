'use client';

import React from 'react';
import dynamic from 'next/dynamic';

class SafeCanvasBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn('3D canvas disabled or unsupported:', error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Scene = dynamic(() => import('./Scene').then(mod => ({ default: mod.Scene })), {
  ssr: false,
  loading: () => null,
});

export function SceneLoader() {
  return (
    <SafeCanvasBoundary>
      <Scene />
    </SafeCanvasBoundary>
  );
}
