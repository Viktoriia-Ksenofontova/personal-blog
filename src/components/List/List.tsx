import React from 'react';
import { useFela } from 'react-fela';
import makeListStyle from './List.style';

type ListProps = {
  styles?: BaseObject;
};
const List: React.FC<ListProps> = ({ children, styles }) => {
  const { css } = useFela();

  return <ul className={styles && css(makeListStyle(styles))}>{children}</ul>;
};

export default List;
