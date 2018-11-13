// App.js
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { store };
//   }

//   render() {
//     return (
//       <Provider store={this.state.store}>
//         <TrialReactReduxContext />
//       </Provider>
//     );
//   }
// }

import * as React from 'react';
import { ReactReduxContext } from 'react-redux/lib/components/Context';

export default class TrialReactReduxContext extends React.Component {
  render() {
    return (
      <ReactReduxContext.Consumer>
        {reducer => {
          console.log(reducer);
          return (
            <>
              <p>sssss</p>
              {/* <p>num: {num}</p>
              <button onClick={() => incrementAmount()}>
                react redux context
              </button> */}
            </>
          );
        }}
      </ReactReduxContext.Consumer>
    );
  }
}
