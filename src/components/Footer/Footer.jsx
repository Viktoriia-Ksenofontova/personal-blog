import React from 'react';
import { useFela } from 'react-fela';
import { Text, View } from '../index';
import palette from '../../assets/colors';

export default function Footer() {
  const { css } = useFela();

  return (
    <footer className={css({backgroundColor: 'grey'})} >
      <View variant='footer'>
        <Text as="p" variant='small' styles={{color:`${palette.light.text}`}}> &copy; Copyright 2022</Text>
      </View>
    </footer>
  )
}