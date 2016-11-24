import React from 'react';
import { connect } from 'react-redux';

import { goToDirectory } from '../actions';
import { sortedContentSelector } from '../selectors';

import DirectoryComponent from '../components/Directory.jsx';
import FileComponent from '../components/File.jsx';

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

  const elems = currentContent.map((ctnt, index) => {
    if (ctnt.type === 'directory') {
      return (
        <DirectoryComponent
          key={index}
          onClick={setOnDirectoryClick(ctnt)}
          name={ctnt.name}
        />
      );
    }
    return (
      <FileComponent
        key={index}
        name={ctnt.name}
        className='file-elem'
      />
    );
  });

  return (
    <div>
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

export default connect(mapStateToProps)(Dirs);
