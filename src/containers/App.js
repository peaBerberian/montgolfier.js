import React from 'react';
import { connect } from 'react-redux';
import {
  initialize,
  previousDirectory,
  nextDirectory,
  goToDirectory
} from '../actions.js';
import { sortedContentSelector } from '../selectors';
import { ORDERS } from './../constants';

const Dirs = (props) => {
  const {
    dispatch,
    isLoading,
    currentPath,
    currentContent
  } = props;

  const setOnDirectoryClick = (dir) => () => {
    dispatch(goToDirectory([ ...currentPath, dir.name ]));
  };

  const onPrev = () => {
    dispatch(previousDirectory());
  };

  const onNext = () => {
    dispatch(nextDirectory());
  };

  let reactKey = 0;
  const elems = currentContent.map((ctnt) => {
    if (ctnt.type === 'directory') {
      return (<div
        onClick={setOnDirectoryClick(ctnt)}
        key={reactKey++}
        className='ctnt-elem'
      >
        {ctnt.name}
      </div>);
    }
    return (<div key={reactKey++} className='file-elem'>
      {ctnt.name}
    </div>);
  });

  return (
    <div>
      <div className='current-path'>
        {'/' + currentPath.join('/')}
      </div>
      <div onClick={onPrev}>
        {'prev'}
      </div>
      <div onClick={onNext}>
        {'next'}
      </div>
      <div>
        { isLoading ? 'loading' : elems }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    currentPath: state.currentPath,
    currentContent: sortedContentSelector(state)
  };
};

const DirectoryList = connect(mapStateToProps)(Dirs);

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
      <DirectoryList />
    );
  }
};

export default connect()(App);
