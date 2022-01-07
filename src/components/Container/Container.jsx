import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

export default function Container({children }){
  const { css } = useFela();
 
  return (   
    <div className={css({
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '20px',
      maxWidth: '1440px'
    })}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};