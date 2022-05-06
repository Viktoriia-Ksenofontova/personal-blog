/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFela } from 'react-fela';
import { TViewProps } from './View.interface';
import makeViewStyle from './View.style';

const View: React.FC<TViewProps> = ({
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
  viewStyle,
  children,
  ...otherProps
}) => {
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
};

export default View;

// View.defaultProps = {
//   as: 'div',
//   viewStyle: {},
//   variant: 'container',
//   flexWrap: 'nowrap',
//   flex: '',
//   gap:'',
//   margin:'',
//   justifyContent:'',
//   alignItems:'',
//   overflow: '',
// };
