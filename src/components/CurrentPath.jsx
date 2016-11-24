import React from 'react';

export default (props) =>
  <div className='current-path'>
    {'/' + props.currentPath.join('/')}
  </div>;

