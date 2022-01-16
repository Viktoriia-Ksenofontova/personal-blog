import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

import makeStyle from './Main.style';
import useStore from '../../store/hooks';
// import StateContext from "../../context/StateContext";

export default function Main({ children }) {
  const { css } = useFela();

  const { stateContext } = useStore();
  const { theme } = stateContext;
  
  return (
    <main className={css(makeStyle(theme))}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}