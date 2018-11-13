import * as React from 'react';
import { Provider } from 'react-redux';
import Parent from './components/TrialContextAPI/index';
// import TrialReactReduxContext from './components/TrialReactReduxContext';
import store from './store';
import Container from './containers/index';

const App = () => (
  <Provider store={store}>
    <p>Trial React ContetAPI</p>
    <Parent />

    <p>ducks</p>
    <Container />
  </Provider>
);

export default App;
