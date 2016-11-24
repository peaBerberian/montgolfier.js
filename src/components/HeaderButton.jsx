import React from 'react';

export default (props) => {
  const {
    src,
    alt,
    className,
    onClick
  } = props;

  return (
    <img
      className={'header-button ' + className}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};
