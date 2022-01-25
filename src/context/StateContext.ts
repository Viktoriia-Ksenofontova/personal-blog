import React from 'react';
// import Service from '../store/service';

const StateContext = React.createContext({
  stateContext: {
    theme: 'light',
    store: {},
  },
  setStateContext: () => {},
});

// type StateType = {
//   stateContext: {
//     theme: 'light' | 'dark';
//     store: Service;
//   };
//   setStateContext: React.Dispatch<React.SetStateAction<StateType>>;
// };

// const StateContext = React.createContext<StateType>({
//   stateContext: {
//     theme: 'light',
//     store: new Service(),
//   },
//   setStateContext: () => {},
// });

export default StateContext;
