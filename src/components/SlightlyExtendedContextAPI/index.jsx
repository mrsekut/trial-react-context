import React from 'react';

// 名前を付けてcontextを作る
const CounterContext = React.createContext();

// 親
export default class ExtendedParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 // stateを定義
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <CounterContext.Provider
        value={{ count: this.state.count, increment: this.increment }} // 関数も渡す
      >
        <Child />
      </CounterContext.Provider>
    );
  }
}

// 子 何もしてない
const Child = () => <Grandson />;

// 孫 これはclass
class Grandson extends React.Component {
  static contextType = CounterContext; // contextTypeを使う

  componentDidMount() {
    // lifecycleの中でもcontextにアクセスできる
    console.log(this.context.count);
  }

  render() {
    const { count, increment } = { ...this.context }; // contextを受け取る
    return (
      <>
        <p>count: {count}</p>
        <button onClick={increment}>increment</button>
      </>
    );
  }
}
