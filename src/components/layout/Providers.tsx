'use client';

import { ThemeContext, useThemeState } from '@/hooks/useTheme';
import { RecruiterModeContext, useRecruiterModeState } from '@/hooks/useRecruiterMode';

export function Providers({ children }: { children: React.ReactNode }) {
  const themeState = useThemeState();
  const recruiterModeState = useRecruiterModeState();

  return (
    <ThemeContext.Provider value={themeState}>
      <RecruiterModeContext.Provider value={recruiterModeState}>
        {children}
      </RecruiterModeContext.Provider>
    </ThemeContext.Provider>
  );
}
