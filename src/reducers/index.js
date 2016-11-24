// import { combineReducers } from 'redux';

import { ACTIONS } from  '../constants';

export default (state, action) => {
  switch (action.type) {

    case ACTIONS.SET_DIRECTORY: {
      return Object.assign({}, state, {

        // add previous currentPath to previousPaths
        // avoid doing so if there was previously no path
        previousPaths: [
          ...state.previousPaths,
          state.currentPath
        ],

        // clear nextPaths
        nextPaths: [],
        currentPath: action.path,
        isLoading: false,
        currentContent: action.content

      });
    }

    case ACTIONS.LOAD_DIRECTORY:
      return Object.assign({}, state, {

        // add previous currentPath to previousPaths
        // avoid doing so if there was previously no path
        previousPaths: [
          ...state.previousPaths,
          state.currentPath
        ],

        // clear nextPaths
        nextPaths: [],
        currentPath: action.path,
        isLoading: true,
        currentContent: {}
      });

    case ACTIONS.LOAD_PREVIOUS_DIRECTORY: {
      const hasPreviousDirectory = state.previousPaths.length;
      const newPreviousPaths = state.previousPaths.slice();
      const newNextPaths = state.nextPaths.slice();

      const path = newPreviousPaths.pop();

      if (hasPreviousDirectory) {
        newNextPaths.unshift(state.currentPath);
      }

      return Object.assign({}, state, {
        previousPaths: newPreviousPaths,
        nextPaths: newNextPaths,
        currentPath: hasPreviousDirectory ? path : state.currentPath,
        isLoading: true,
        currentContent: {}
      });
    }

    case ACTIONS.LOAD_NEXT_DIRECTORY: {
      const hasNextDirectory = state.nextPaths.length;
      const newPreviousPaths = state.previousPaths.slice();
      const newNextPaths = state.nextPaths.slice();

      if (hasNextDirectory) {
        newPreviousPaths.push(state.currentPath);
      }

      const path = newNextPaths.shift();

      return Object.assign({}, state, {
        previousPaths: newPreviousPaths,
        nextPaths: newNextPaths,
        currentPath: hasNextDirectory ? path : state.currentPath,
        isLoading: true,
        currentContent: {}
      });
    }

    case ACTIONS.DISPLAY_DIRECTORY_CONTENT: {
      return Object.assign({}, state, {
        isLoading: false,
        currentContent: action.content
      });
    }

    case ACTIONS.INITIALIZE:
      return Object.assign({}, state, {
        previousPaths: [],
        nextPaths: [],
        currentPath: [],
        isLoading: true,
        currentContent: {},
        initialized: false
      });

    case ACTIONS.SET_INITIALIZED: {
      return Object.assign({}, state, {
        previousPaths: [],
        nextPaths: [],
        currentPath: action.path,
        isLoading: false,
        currentContent: action.content,
        initialized: true
      });
    }

    case ACTIONS.CHANGE_SORTING_ORDER: {
      return Object.assign({}, state, {
        sortingOrder: action.sortingOrder,
        sortingDesc: action.desc
      });
    }

    default:
      return state;
  }
};
