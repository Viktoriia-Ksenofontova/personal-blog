import React, { useContext } from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeStyle from './Button.style';
import ThemeContext from "../../context/ThemeContext";

export default function Button({ type,  children }){
  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
  
  return (   
    <button className={css(makeStyle({ theme }))}
      // eslint-disable-next-line react/button-has-type
    type={type}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
