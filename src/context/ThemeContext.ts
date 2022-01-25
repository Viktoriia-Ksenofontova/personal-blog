import React from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const ThemeContext = React.createContext<ThemeContextType>({ theme: 'light', setTheme: () => {} });

export default ThemeContext;
