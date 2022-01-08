import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';

export default function List({styles, children }){
  const { css } = useFela();
 
  return (   
    <ul className={css({
      padding: '0',
      margin: '0',
      listStyle: "none",
      textAlign: "left",
      ...styles
    })}>
      {children}
    </ul>
  )
}

List.defaultProps = {
  styles: {},
};

List.propTypes = {
  styles:PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};