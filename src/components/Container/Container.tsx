import React from 'react';
// import PropTypes from 'prop-types';
import { View } from '../index';

type TContainer = {
  styles?: { [key: string]: string };
};

const Container: React.FC<TContainer> = ({ styles, children }) => (
  <View variant="container" viewStyle={styles}>
    {children}
  </View>
);

Container.defaultProps = {
  styles: {},
};

export default Container;

// Container.propTypes = {
//   styles: PropTypes.objectOf(PropTypes.string),
//   children: PropTypes.node.isRequired,
// };
