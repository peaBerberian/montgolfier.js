import React from 'react';

export default (props) => {
  const {
    onClick,
    name
  } = props;

  return (
    <div
      onClick={onClick}
      className='ctnt-elem'
    >
      {name}
    </div>
  );
};
