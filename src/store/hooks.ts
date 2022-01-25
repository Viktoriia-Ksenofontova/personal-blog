import React from 'react';
// import StateContext from "../context/StateContext";
import { GlobalContext } from '../context/GlobalContext';

const useStore = () => {
  //  const store = React.useContext(StateContext);
  const store = React.useContext(GlobalContext);

  if (!store) {
    throw new Error('Store not found');
  }

  return store;
};

export default useStore;
