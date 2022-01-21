import React from "react";

const StateContext = React.createContext({
 stateContext: {
    theme: "light", 
    store:{}
},
  setStateContext: () => {}
})

export default StateContext