import React from 'react';

// theme-context.js
// これが伝搬させたいデータ
// store的ななにか
const store = {
  num: 0,
  increment: () => {}
};

// contextを作る
const ThemeContext = React.createContext(
  store.num // default value
);

// themed-button.js
// 孫
const ThemedButton = () => (
  <ThemeContext.Consumer>
    {({ num, increment }) => (
      <>
        <p>{num}</p>
        <button onClick={increment}>increment</button>
      </>
    )}
  </ThemeContext.Consumer>
);

// 子
// ここでは従来のようにpropsでデータを渡していない
const Toolbar = () => <ThemedButton />;

// app.js
// 親
export default class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: store.num,
      increment: this.increment
    };
  }

  increment = () => {
    this.setState({
      num: this.state.num + 1
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// ==========================================
// ==========================================yypp
// ==========================================yypp
// ==========================================yypp

// export default class ContextComponent extends React.Component {
//   render() {
//     return <Toolbar theme="dark" />;
//   }
// }

// function Toolbar(props) {
//   // The Toolbar component must take an extra "theme" prop
//   // and pass it to the ThemedButton. This can become painful
//   // if every single button in the app needs to know the theme
//   // because it would have to be passed through all components.
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   render() {
//     return <button theme={this.props.theme} />;
//   }
// }

// ==========================================
// https://qiita.com/loverails/items/50126e874b24ff984471
// ==========================================
// import React from 'react';

// // const store = {
// //   state: {
// //     foo: 1
// //   },
// //   update: cb => {
// //     this.state = cb;
// //   }
// // };

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
