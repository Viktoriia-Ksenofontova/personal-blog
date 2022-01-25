import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import useStore from '../../store/hooks';
import textStyles from './Text.style';

type TextType = {
  as: string | React.ElementType;
  styles?: { [key: string]: string } | {};
  variant?: 'heading1' | 'heading2' | 'heading3' | 'primary' | 'small';
};

const Text: React.FC<TextType> = ({ as, children, styles = {}, variant = 'primary' }) => {
  const { css } = useFela();
  const { stateContext } = useStore();
  const { theme } = stateContext;

  const Component = as;

  return <Component className={css(textStyles({ theme, styles, variant }))}>{children}</Component>;
};
export default Text;

Text.defaultProps = {
  styles: {},
  variant: 'primary',
};

// Text.propTypes = {
//   as: PropTypes.node.isRequired,
//   styles: PropTypes.objectOf(PropTypes.string),
//   variant:PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
