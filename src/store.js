/**
 * # store.js
 *
 * This file creates the store with its initial state.
 *
 * It exports both the regular redux store and a configureStore function,
 * allowing to create new stores.
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMW from 'redux-thunk';
import reducer from './reducers';
import { initialState } from './constants';

const configureStore = (state) =>
  createStore(reducer, state, applyMiddleware(thunkMW));

export { configureStore };
export default configureStore(initialState);
