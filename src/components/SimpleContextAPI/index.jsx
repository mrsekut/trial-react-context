import React, { createContext } from 'react';

const { Provider, Consumer } = createContext();

const SimpleContextAPIParent = () => (
  <Provider value={{ count: 1, word: 'hello' }}>
    <Child />
  </Provider>
);
export default SimpleContextAPIParent;

// 子 propsを伝搬させてない
const Child = () => <Grandson />;

// 孫 同じく伝搬させてない
const Grandson = () => <GreatGrandchild />;

const GreatGrandchild = () => (
  <Consumer>
    {({ count, word }) => (
      <>
        <div>values: {count}</div>
        <div>word: {word}</div>
      </>
    )}
  </Consumer>
);
