import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeStyle from './Button.style';

import useStore from '../../store/hooks';

type TProps = {
  type: 'button' | 'submit' | 'reset';
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ type, text, onClick }: TProps) => {
  const { css } = useFela();
  const { themeStore } = useStore();
  // const { stateContext } = useStore();
  // const { theme } = stateContext;
  const { theme } = themeStore;
  return (
    <button
      onClick={onClick}
      className={css(makeStyle(theme))}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: '',
  onClick: () => {},
};

export default Button;

// Button.propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onClick: PropTypes.func

// };
