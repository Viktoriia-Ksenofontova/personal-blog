import React from 'react';
import { useFela } from 'react-fela';
import { Text, View } from '../index';
import palette from '../../assets/colors';

const Footer = () => {
  const { css } = useFela();

  return (
    <footer className={css({ backgroundColor: 'grey' })}>
      <View variant="footer" justifyContent="center">
        <Text as="p" variant="small" styles={{ color: `${palette.light.text}` }}>
          {' '}
          &copy; Copyright 2022
        </Text>
      </View>
    </footer>
  );
};

export default Footer;
