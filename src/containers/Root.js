import React from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import App from './App';

/**
 * @class Root
 */
export default class Root extends React.Component {
  /**
   * Returns the component.
   * @returns {Object}
   */
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
