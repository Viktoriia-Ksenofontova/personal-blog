import React from "react";
import PropTypes from 'prop-types';
import {View} from '../index';

export default function Container({styles, children }){
    
  return (   
    <View viewStyle={styles}>
      {children}
    </View>
  )
}

Container.defaultProps = {
  styles: {}
};
Container.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};