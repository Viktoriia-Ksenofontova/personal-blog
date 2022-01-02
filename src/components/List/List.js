import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

export default function List({children }){
  const { css } = useFela();
 
  return (   
    <ul className={css({
      padding: "20px",
      margin: "0px",
      listStyle: "none",
      textAlign:"left"
    })}>
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};