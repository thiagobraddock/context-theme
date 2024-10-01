import React, { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }:{ children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={ { toggleTheme, theme } }>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Theme Context não pode ser usado fora de um provider');
  }
  return context;
}

export default ThemeProvider;
