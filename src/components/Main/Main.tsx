import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeStyle from './Main.style';
import useStore from '../../store/hooks';

const Main: React.FC = ({ children }) => {
  const { css } = useFela();

  const { stateContext } = useStore();
  const { theme } = stateContext;

  return <main className={css(makeStyle(theme))}>{children}</main>;
};

export default Main;
// Main.propTypes = {
//   children: PropTypes.node.isRequired,
// };
