import React from 'react';
import { ReactReduxContext } from 'react-redux';

const TrialReactReduxContext = () => (
  <ReactReduxContext.Consumer>
    {({ storeState }) => <>num: {storeState.reducer.num}</>}
  </ReactReduxContext.Consumer>
);

export default TrialReactReduxContext;

// // use useContext
// import React, { useContext } from 'react';
// import { ReactReduxContext } from 'react-redux';

// const TrialReactReduxContext = () => {
//   const context = useContext(ReactReduxContext);
//   return <div>num: {context.storeState.reducer.num}</div>;
// };

// export default TrialReactReduxContext;
