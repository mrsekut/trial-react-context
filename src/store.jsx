import { createStore, combineReducers } from 'redux';
import reducer from './modules/index';

export const configureStore = () => {
  return createStore(
    combineReducers({
      reducer
    })
  );
};
export default configureStore;
