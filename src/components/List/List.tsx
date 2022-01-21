import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeListStyle from './List.style'

export default function List({styles, children }){
  const { css } = useFela();
 
  return (   
    <ul className={css(makeListStyle(styles))}>
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