import React from "react";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from  'react-loader-spinner'

function Loader(){
   return (
     <Triangle
        arialLabel='loading'
        color="#9ACD32"
        height={80}
        width={80}
        timeout={3000}
    />
  );
  }

export default Loader;