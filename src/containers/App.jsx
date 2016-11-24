import React from 'react';
import { connect } from 'react-redux';
import { initialize } from '../actions';

import Header from './Header.jsx';
import Content from './Content.jsx';

const App = class extends React.Component {
  /**
   * Initialize the application.
   */
  componentWillMount () {
    this.props.dispatch(initialize());
  }

  /**
   * Returns the component.
   * @returns {Object}
   */
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
};

export default connect()(App);
