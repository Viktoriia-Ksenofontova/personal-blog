import React from "react";
import { useFela } from 'react-fela';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from  'react-loader-spinner';
import makeStyles from './Loader.style';

function Loader(){
    const { css } = useFela();
    return (
        <div className={css(makeStyles)}>
            <Triangle
                arialLabel='loading'
                color="#9ACD32"
                height={80}
                width={80}
                timeout={3000}
            />
        </div>
  );
  }

export default Loader;