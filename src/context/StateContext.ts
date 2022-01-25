import React from 'react';

import Service from '../store/service';

const StateContext = React.createContext<Service>(new Service());

export default StateContext;
