import React from 'react';

export default (props) => {
  const {
    name
  } = props;

  return (
    <div
      className='ctnt-elem'
    >
      {name}
    </div>
  );
};

