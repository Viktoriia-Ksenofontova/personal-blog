import React from 'react';
import StateContext from '../context/StateContext';
import ThemeContext from '../context/ThemeContext';

export const useStateContext = () => {
  const store = React.useContext(StateContext);

  if (!store) {
    throw new Error('Store not found');
  }

  return store;
};

export const useThemeContext = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error('Theme not found');
  }

  return { theme, setTheme };
};
