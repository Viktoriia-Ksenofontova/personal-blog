import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeListStyle from './List.style';

type ListProps = {
  styles?: { [key: string]: string } | {};
};
const List: React.FC<ListProps> = ({ children, styles = {} }) => {
  const { css } = useFela();

  return <ul className={css(makeListStyle(styles))}>{children}</ul>;
};

List.defaultProps = {
  styles: {},
};

// List.propTypes = {
//   styles:PropTypes.objectOf(PropTypes.string),
//   children: PropTypes.node.isRequired,
// };

export default List;
