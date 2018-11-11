import React, { createContext } from 'react';

const { Provider, Consumer } = createContext('light');

const Context = () => (
  <Consumer>{value => <div>values: {value}</div>}</Consumer>
);

// このコンポーネントを仲介しているが、わざわざpropsを流さなくても渡る
const WhileComponent = () => <Context />;

export const ContextComponent = () => (
  <Provider value={'dark'}>
    <WhileComponent />
  </Provider>
);

export default ContextComponent;
