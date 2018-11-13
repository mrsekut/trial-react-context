// import React, { useState, useContext } from 'react';

// // theme-context.js
// // これが伝搬させたいデータ
// // store的ななにか
// const store = {
//   num: 0,
//   increment: () => {}
// };

// // contextを作る
// const ThemeContext = React.createContext(
//   store.num // default value
// );

// // themed-button.js
// // 孫
// const ThemedButton = () => {
//   return (
//     <ThemeContext.Consumer>
//       {({ num, increment }) => (
//         <>
//           <p>{num}</p>
//           <button onClick={increment}>increment</button>
//         </>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

// // 子
// // ここでは従来のようにpropsでデータを渡していない
// const Toolbar = () => <ThemedButton />;

// // app.js
// // 親
// const ContextComponent = () => {
//   useContext(ThemeContext);
//   const [num, setNum] = useState(0);

//   return (
//     <ThemeContext.Provider
//       value={{
//         num,
//         increment: () => {
//           setNum(num + 1);
//         }
//       }}
//     >
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// };
// export default ContextComponent;

// ==========================================
// https://qiita.com/loverails/items/50126e874b24ff984471
// ==========================================
// import React from 'react';

// const store = {
//   state: {
//     foo: 1
//   },
//   update: cb => {
//     this.state = cb;
//   }
// };

// const store = {
//   foo: 1
// };

// const { Provider, Consumer } = React.createContext(store.foo);

// const Context = () => (
//   <Consumer>
//     {({ state, update }) => (
//       <div>
//         <button onClick={() => update({ foo: state.foo + 1 })}>click</button>
//         <p>Foo is {state.foo}</p>
//       </div>
//     )}
//   </Consumer>
// );

// export default class ContextComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foo: 1
//     };
//   }

//   update(nb) {
//     this.setState({
//       foo: nb
//     });
//   }

//   render() {
//     return (
//       <Provider value={this.state.foo}>
//         <Context />
//       </Provider>
//     );
//   }
// }

import React from 'react';

// store的ななにか
const store = new class {
  state = {
    num: 0
  };
  actions = fn => {
    console.log(this.state);
    this.state = fn(this.state);
  };
  // actions: fn => {
  //   this.state = fn(this.state);
  // }
  // actions: {
  //   increment: () => {
  //     this.state.num += 1;
  //   }
  // }
}();

// contextを作る
const CounterContext = React.createContext({ num: 0 });

// 親
export default class Parent extends React.Component {
  render() {
    return (
      <CounterContext.Provider value={store}>
        <p>parenat: {store.state.num}</p>
        <p>num</p>
        <Child />
      </CounterContext.Provider>
    );
  }
}

// 子
const Child = () => <Grandson />;

// 孫
// // これはclass
class Grandson extends React.Component {
  static contextType = CounterContext;
  render() {
    const { state, actions } = { ...this.context };
    console.log(state);
    console.log(actions);
    return (
      <>
        <p>{state.num}</p>
        <button
          onClick={() =>
            actions(s => {
              // console.log(s);
              return {
                ...s,
                num: s.num + 1
              };
            })
          }
        >
          increment
        </button>
      </>
    );
  }
}

// Consumer使う版
// const Grandson = () => (
//   <CounterContext.Consumer>
//     {({ state, actions }) => (
//       <div>
//         <p>{state.num}</p>
//         <button
//           onClick={() =>
//             actions(s => {
//               console.log(s);
//               return {
//                 ...s,
//                 num: s.num += 1
//               };
//             })
//           }
//         >
//           increment
//         </button>
//       </div>
//     )}
//   </CounterContext.Consumer>
// );
