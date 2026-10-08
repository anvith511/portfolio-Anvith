'use client';

import { useState, useEffect, useCallback, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function safeGetTheme(): Theme {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    }
  } catch {
    // localStorage may be inaccessible in sandboxed iframes
  }
  return 'light';
}

function safeSetTheme(theme: Theme) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
    }
  } catch {
    // localStorage may be inaccessible in sandboxed iframes
  }
}

function applyThemeToDOM(theme: Theme) {
  if (typeof document === 'undefined') return;
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.setAttribute('data-theme', theme);
  if (document.body) {
    document.body.classList.toggle('dark', isDark);
  }
}

export function useThemeState() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const initial = safeGetTheme();
    setTheme(initial);
    applyThemeToDOM(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      safeSetTheme(next);
      applyThemeToDOM(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
