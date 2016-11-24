import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root.jsx';

ReactDOM.render(
  React.createElement(Root),
  document.getElementById('main')
);
