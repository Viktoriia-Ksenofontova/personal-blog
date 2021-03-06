/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useFela } from 'react-fela';

import makeViewStyle from './View.style';

export default function View({
  as = 'div',
  variant,
  flex,
  gap,
  justifyContent,
  alignItems,
  flexWrap,
  margin,
  padding,
  overflow,
  children,
  viewStyle,
  ...otherProps
}) {
  const Component = as;
  const { css } = useFela();
  const styleProps = {
    flex,
    gap,
    justifyContent,
    alignItems,
    flexWrap,
    overflow,
    margin,
    padding,
    ...viewStyle,
  };

  return (
    <Component
      className={css(makeViewStyle(styleProps, variant))}
      {...otherProps}
    >
      {children}
    </Component>
  );
}

View.defaultProps = {
  as: 'div',
  viewStyle: {},
  variant: 'container',
  flexWrap: 'nowrap',
  flex: '',
  gap: '',
  margin: '',
  padding: '',
  justifyContent: '',
  alignItems: '',
  overflow: '',
};

View.propTypes = {
  as: PropTypes.node,
  viewStyle: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  flex: PropTypes.string,
  gap: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  overflow: PropTypes.string,
};
