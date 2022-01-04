import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

export default function Form({ handleSubmit, children }){
  const { css } = useFela();
 
  return (   
     <form onSubmit={handleSubmit}
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'center',
          alignItems:'center'
      })}>
      {children}
      </form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit:PropTypes.func.isRequired
};