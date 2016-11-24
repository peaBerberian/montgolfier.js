import React from 'react';
import { connect } from 'react-redux';

import {
  previousDirectory,
  nextDirectory
} from '../actions';

import CurrentPathComponent from '../components/CurrentPath.jsx';
import HeaderButtonComponent from '../components/HeaderButton.jsx';

const Header = (props) => {
  const {
    dispatch,
    currentPath
  } = props;

  const onPrev = () => {
    dispatch(previousDirectory());
  };

  const onNext = () => {
    dispatch(nextDirectory());
  };

  return (
    <div
      className='header'
    >
      <HeaderButtonComponent
        className='prev'
        src='./assets/previous.png'
        alt='previous'
        onClick={onPrev}
      />
      <HeaderButtonComponent
        className='next'
        src='./assets/next.png'
        alt='next'
        onClick={onNext}
      />
      <CurrentPathComponent
        currentPath={currentPath}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPath: state.currentPath
  };
};

export default connect(mapStateToProps)(Header);
