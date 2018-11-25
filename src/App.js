import * as React from 'react';
import { Provider } from 'react-redux';
// import Parent from './components/TrialContextAPI/index';
// import TrialReactReduxContext from './components/TrialReactReduxContext';
import store from './store';
import Container from './containers/index';

import ConventionParent from './components/ConventionalPattern/index';
import SimpleContextAPIParent from './components/SimpleContextAPI/index';

const App = () => (
  <Provider store={store}>
    <h2>従来のReactのバケツリレー</h2>
    <ConventionParent />
    <h2>Context APIを使ってみる</h2>
    <SimpleContextAPIParent />
    <p>Trial React ContetAPI</p>
  </Provider>
);

export default App;
