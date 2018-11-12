import * as React from 'react';
import { Provider } from 'react-redux';
import ContextComponent from './components/TrialContextAPI/index';
import configureStore from './store';
import Container from './containers/index';

const App = () => (
  <Provider store={configureStore()}>
    <p>Trial React ContetAPI</p>
    <ContextComponent />
    <Container />
  </Provider>
);

export default App;
