import React from 'react';
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeFormStyle from './Form.style';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<Props> = ({ handleSubmit, children }) => {
  const { css } = useFela();

  return (
    <form onSubmit={handleSubmit} className={css(makeFormStyle)}>
      {children}
    </form>
  );
};

// Form.propTypes = {
//   children: PropTypes.node.isRequired,
//   handleSubmit:PropTypes.func.isRequired
// };

export default Form;
