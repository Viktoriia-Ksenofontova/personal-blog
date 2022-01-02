import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import "../../assets/colors.scss";

export default function Button({ type,  children }){
  const { css } = useFela();
 
  return (   
    <button className={css({
      padding: "10px",
      width: "200px",
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight:"bold",
      borderColor: "transparent",
      backgroundColor: "grey",
      color: 'white',
      ':hover': { color: 'black', backgroundColor: '#f1356d'}
    })}
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