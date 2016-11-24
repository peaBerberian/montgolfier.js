import { ACTIONS } from '../constants';
import dirContent from '../mocks/dir.js';

const requestDirectoryAndDisplay = (directory, dispatch) => {
  // request...

  setTimeout(() => {
    const content = dirContent;
    dispatch({
      type: ACTIONS.DISPLAY_DIRECTORY_CONTENT,
      content
    });
  }, 250);
};

const goToDirectory = (path) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.LOAD_DIRECTORY,
      path
    });
    requestDirectoryAndDisplay(path, dispatch);
  };
};

const previousDirectory = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTIONS.LOAD_PREVIOUS_DIRECTORY
    });
    requestDirectoryAndDisplay(getState().currentPath, dispatch);
  };
};

const nextDirectory = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTIONS.LOAD_NEXT_DIRECTORY
    });
    requestDirectoryAndDisplay(getState().currentPath, dispatch);
  };
};

const initialize = () => {
  return (dispatch) => {
    // default path
    const path = [];

    dispatch({
      type: ACTIONS.INITIALIZE
    });

    // request

    const content = dirContent;
    setTimeout(() => {
      dispatch({
        type: ACTIONS.SET_INITIALIZED,
        path,
        content
      }, 200);
    });
  };
};

const changeSortingOrder = (order, desc) => {
  return {
    type: ACTIONS.CHANGE_SORTING_ORDER,
    sortingOrder: order,
    desc,
  };
};

export {
  initialize,
  goToDirectory,
  previousDirectory,
  nextDirectory,
  changeSortingOrder
};
