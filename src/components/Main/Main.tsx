import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeStyle from './Main.style';
import { useThemeContext } from '../../store/hooks';

const Main: React.FC = ({ children }) => {
  const { css } = useFela();

  const { theme } = useThemeContext();

  return <main className={css(makeStyle(theme))}>{children}</main>;
};

export default Main;
// Main.propTypes = {
//   children: PropTypes.node.isRequired,
// };
