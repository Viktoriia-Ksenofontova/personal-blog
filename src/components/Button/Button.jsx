import React, { useContext } from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeStyle from './Button.style';
import ThemeContext from "../../context/ThemeContext";

export default function Button({ text, type, onClick}){
  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
  
  return (   
    <button onClick={onClick} className={css(makeStyle({ theme }))}
      // eslint-disable-next-line react/button-has-type
    type={type}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: "",
  onClick:()=>{}
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
  
};
