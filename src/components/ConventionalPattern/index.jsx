import * as React from 'react';

export default class ConventionParent extends React.Component {
  render() {
    const count = 1;
    const word = 'hello';

    return <Child count={count} word={word} />;
  }
}

// 子 ここでは使わない
const Child = ({ count, word }) => <Grandson count={count} word={word} />;

// 孫 ここでも使わない
const Grandson = ({ count, word }) => (
  <GreatGrandchild count={count} word={word} />
);

// 曾孫 やっとここで使いたい
const GreatGrandchild = ({ count, word }) => (
  <>
    <div>count: {count}</div>
    <div>word: {word}</div>
  </>
);
