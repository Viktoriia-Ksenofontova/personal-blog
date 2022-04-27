import React from 'react';
import ThemeContext from './ThemeContext';

export const useThemeContext = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error('Theme not found');
  }

  return { theme, setTheme };
};
