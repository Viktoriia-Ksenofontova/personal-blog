import React from 'react';
import StateContext from "../context/StateContext";

const useStore = () => {
 const store = React.useContext(StateContext);

if (!store) {
    throw new Error('Store not found');
  }

   return store;
};

export default useStore;