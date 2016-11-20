import ACTIONS from './actions.js';

export const ORDERS = {
  MODIFICATION_DATE: 0,
  CREATION_DATE: 1,
  ALPHABETICALLY: 2
};

export const initialState = {
  previousPaths: [],
  nextPaths: [],
  currentPath: [],
  currentContent: {},
  isLoading: false,
  isInitialized: false,
  sortingOrder: ORDERS.ALPHABETICALLY,
  sortingDesc: false
};

export { ACTIONS };
