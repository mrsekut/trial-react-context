import React, { createContext, useContext } from 'react';

// const { Provider, Consumer } = createContext('light');
const N = createContext('light');

const Context = () => {
  const value = useContext(N);
  return <div>values: {value}</div>;
  // return <NContext.Consumer>{v => <div>values: {v}</div>}</NContext.Consumer>;
};

const WhileComponent = () => <Context />;

export const ContextComponent = () => (
  <N.Provider value={'dark'}>
    <WhileComponent />
  </N.Provider>
);

export default ContextComponent;
