import React, { createContext, useState, useContext } from 'react';

// contextを作る
const CounterContext = createContext();

// 親
const Parent = () => {
  const [num, setNum] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        num,
        increment: () => setNum(num + 1)
      }}
    >
      <Child />
    </CounterContext.Provider>
  );
};
export default Parent;

// 子
const Child = () => <Grandson />;

// 孫
const Grandson = () => {
  const counter = useContext(CounterContext);
  return (
    <>
      <p>{counter.num}</p>
      <button onClick={counter.increment}>increment</button>
    </>
  );
};
