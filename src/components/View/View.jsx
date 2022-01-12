/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from 'prop-types';
import { useFela } from 'react-fela';

import {makeViewStyle} from './View.style';

export default function View(
{as='div', 
variant,
flexWrap,
overflow,
children, 
viewStyle,
...otherProps}){
    const Component = as;
    const { css } = useFela();
    const styleProps={
        flexWrap,
        overflow,
        ...viewStyle
    }

    return (
        <Component
        className={css(makeViewStyle(styleProps, variant))}
        {...otherProps}
        >
            {children}
        </Component>
    )
}

View.defaultProps = {
    as:'div',
    viewStyle: {},
    variant: "container",
    flexWrap:'nowrap',
    overflow:'visible',
  };
  
View.propTypes = {
    as: PropTypes.node,
    viewStyle: PropTypes.objectOf(PropTypes.string),
    variant:PropTypes.string,
    children: PropTypes.node.isRequired,
    flexWrap:PropTypes.string,
    overflow:PropTypes.string
  };