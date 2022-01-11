import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

export default function List({children }){
  const { css } = useFela();
 
  return (   
    <ul className={css({
      margin: 0,
      padding: 0,
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