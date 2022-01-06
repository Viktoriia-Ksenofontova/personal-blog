import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeStyle from './Button.style';

export default function Button({ type,  children }){
  const { css } = useFela();
  
  return (   
    <button className={css(makeStyle({ theme: "light" }))}
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