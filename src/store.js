import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';
import basketReducer from './reducers/basketReducer';

const store = createStore(
  combineReducers({ reducer, basketReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
