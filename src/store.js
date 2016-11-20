import { createStore, applyMiddleware } from 'redux';
import thunkMW from 'redux-thunk';
import reducer from './reducers.js';
import { initialState } from './constants';

const configureStore = (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunkMW));

export { configureStore };
export default configureStore(initialState);
