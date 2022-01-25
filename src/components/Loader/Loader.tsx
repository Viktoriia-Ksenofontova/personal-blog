import React from 'react';
import { useFela } from 'react-fela';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';
import makeStyles from './Loader.style';

type LoaderProps = {
  height?: string | number;
  width?: string | number;
  color?: string;
  ariaLabel?: string;
  visible?: boolean;
};

const Loader: React.FC<LoaderProps> = () => {
  const { css } = useFela();
  return (
    <div className={css(makeStyles)}>
      <Triangle arialLabel="loading" color="#9ACD32" height={80} width={80} />
    </div>
  );
};

export default Loader;
