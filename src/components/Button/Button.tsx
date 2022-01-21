import React from "react";
import { useFela } from 'react-fela';
// import PropTypes from 'prop-types';
import makeStyle from './Button.style';

import useStore from '../../store/hooks';

type TProps={
  text?:string;
  type:"button"|"submit"|"reset";
  onClick?:(e:React.MouseEvent)=>void;
}

export default function Button({ type, text="", onClick}:TProps){
  const { css } = useFela();
  const { stateContext } = useStore();
  const { theme } = stateContext;
 
 return (   
    <button onClick={onClick} className={css(makeStyle({ theme }))}
      // eslint-disable-next-line react/button-has-type
    type={type}>
      {text}
    </button>
  )
}

// Button.defaultProps = {
//   text: "",
//   onClick:()=>{}
// };

// Button.propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onClick: PropTypes.func
  
// };
