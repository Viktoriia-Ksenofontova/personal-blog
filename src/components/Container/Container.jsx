import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import makeStyle from './Container.style';

export default function Container({styles, children }){
  const { css } = useFela();
  
  return (   
    <div className={css(makeStyle(styles))}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  styles: {}
};
Container.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};