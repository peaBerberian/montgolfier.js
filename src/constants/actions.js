export default {

  /**
   * Change directory path and content.
   */
  SET_DIRECTORY: 'SET_DIRECTORY',

  /**
   * Display the current directory's content.
   */
  DISPLAY_DIRECTORY_CONTENT: 'DISPLAY_DIRECTORY_CONTENT',

  /**
   * Mark the application as loading the first page.
   */
  INITIALIZE: 'INITIALIZE',

  /**
   * Mark the current page as initialized and display its first content.
   */
  SET_INITIALIZED: 'SET_FIRST_PAGE',

  /**
   * Start loading a new directory (given by action.path) and wait for the
   * request response.
   */
  LOAD_DIRECTORY: 'LOAD_DIRECTORY',

  /**
   * Start loading the previous directory and wait for the request response.
   */
  LOAD_PREVIOUS_DIRECTORY: 'LOAD_PREVIOUS_DIRECTORY',

  /**
   * Start loading the next directory and wait for the request response.
   */
  LOAD_NEXT_DIRECTORY: 'LOAD_NEXT_DIRECTORY',

  /**
   */
  CHANGE_SORTING_ORDER: 'CHANGE_SORTING_ORDER'
};
