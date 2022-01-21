import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeFormStyle from './Form.style';

export default function Form({ handleSubmit, children }){
  const { css } = useFela();
 
  return (   
    <form onSubmit={handleSubmit} className={css(makeFormStyle)}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit:PropTypes.func.isRequired
};