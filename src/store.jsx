import { createStore, combineReducers } from 'redux';
import reducer from './modules/index';

export const store = createStore(
  combineReducers({
    reducer
  })
);

export default store;
