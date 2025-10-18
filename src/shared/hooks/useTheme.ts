// Mock useTheme hook until react-redux is installed
// TODO: Replace with actual Redux hooks after running: npm install react-redux
import { useState } from 'react';

export const useTheme = () => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  const toggle = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (mode: 'light' | 'dark') => {
    setThemeState(mode);
  };

  return {
    theme,
    toggle,
    setTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};