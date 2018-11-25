import React, { createContext, useState, useContext } from 'react';

// contextを作る
const CounterContext = createContext();

// 親
const HooksParent = () => {
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
export default HooksParent;

// 子
const Child = () => <Grandson />;

// 孫
const Grandson = () => {
  const counter = useContext(CounterContext); // hooksを使う
  return (
    // いつも通りの書き方できる
    <>
      <p>{counter.num}</p>
      <button onClick={counter.increment}>increment</button>
    </>
  );
};
