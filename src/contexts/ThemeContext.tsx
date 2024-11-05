import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Apply transition class before theme change
    const root = window.document.documentElement;
    const body = window.document.body;

    // First, add transition classes
    root.classList.add('duration-300', 'transition-colors');
    body.classList.add('duration-300', 'transition-colors');

    // Then update the theme
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Clean up transition classes after transition
    const cleanup = setTimeout(() => {
      root.classList.remove('duration-300', 'transition-colors');
      body.classList.remove('duration-300', 'transition-colors');
    }, 300); // Same duration as the transition

    return () => clearTimeout(cleanup);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};