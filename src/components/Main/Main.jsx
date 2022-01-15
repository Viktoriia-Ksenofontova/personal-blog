import React, { useContext } from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
// import ThemeContext from "../../context/ThemeContext";
import makeStyle from './Main.style';
import StateContext from "../../context/StateContext";

export default function Main({ children }) {
  const { css } = useFela();
  // const { theme } = useContext(ThemeContext);
  const {stateContext} = useContext(StateContext);
 const {theme}=stateContext;

  return (
    <main className={css(makeStyle(theme))}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}