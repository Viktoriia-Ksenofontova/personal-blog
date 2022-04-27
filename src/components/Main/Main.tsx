import React from 'react';
import { useFela } from 'react-fela';
// import { useThemeContext } from '../../context/hooks';
import { useAppSelector } from '../../redux/hooks';
import { getTheme } from '../../redux/theme/themeSelectors';

import makeStyle from './Main.style';

const Main: React.FC = ({ children }) => {
  const { css } = useFela();
  const theme = useAppSelector(getTheme);
  // const { theme } = useThemeContext();

  return <main className={css(makeStyle(theme))}>{children}</main>;
};

export default Main;
