import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// components
import ConventionParent from './components/ConventionalPattern/index';
import SimpleContextAPIParent from './components/SimpleContextAPI/index';
import ExtendedParent from './components/SlightlyExtendedContextAPI/index';
import HooksParent from './components/TrialContextAPI/index';
import TrialReactReduxContext from './components/TrialReactReduxContext/index';

// ducks container
import Container from './containers/index';

const App = () => (
  <Provider store={store}>
    <h2>従来のReactのバケツリレー</h2>
    <ConventionParent />
    <h2>Context APIを使ってみる</h2>
    <SimpleContextAPIParent />
    <h2>少し拡張した例</h2>
    <ExtendedParent />
    <h2>useContextを使う</h2>
    <HooksParent />
    <h2>Ducksのサンプル</h2>
    <Container />
    <h2>reac-reduxを使う</h2>
    <p>
      同じstateを見ているので上の「+」ボタンを押せばインクリメントされますね
    </p>
    <TrialReactReduxContext />
  </Provider>
);

export default App;
