'use client';

import { useState, useCallback, createContext, useContext } from 'react';

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

export const RecruiterModeContext = createContext<RecruiterModeContextType>({
  isRecruiterMode: false,
  toggleRecruiterMode: () => {},
});

export function useRecruiterMode() {
  return useContext(RecruiterModeContext);
}

export function useRecruiterModeState() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  
  const toggleRecruiterMode = useCallback(() => {
    setIsRecruiterMode(prev => !prev);
  }, []);

  return { isRecruiterMode, toggleRecruiterMode };
}
