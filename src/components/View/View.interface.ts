import React from 'react';

export interface TViewProps {
  as?: string | React.ElementType;
  variant: 'content' | 'footer' | 'header' | 'container';
  flex?: string;
  gap?: string;
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  margin?: string;
  padding?: string;
  overflow?: 'auto' | 'scroll' | 'hidden';
  viewStyle?: BaseObject<string, string>;
  otherProps?: BaseObject<string, string>;
}
