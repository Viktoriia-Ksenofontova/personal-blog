import React from 'react';
import { View } from '../index';

type TContainer = {
  styles?: BaseObject<string, string>;
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
