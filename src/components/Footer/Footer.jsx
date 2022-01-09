import React from 'react';
import { useFela } from 'react-fela';
import { Text, Container } from '../index'

export default function Footer() {
  const { css } = useFela();

  return (
    <footer className={css({backgroundColor: 'grey'})} >
      <Container styles={{ display:'flex', justifyContent: 'center'}}>
        <Text as="p" styles={{color:'#111'}}> &copy; Copyright 2022</Text>
      </Container>
    </footer>
  )
}