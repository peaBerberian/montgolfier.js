import { ORDERS } from '../constants';
import { createSelector } from 'reselect';

const filesSelector = (state) => state.currentContent.files;
const directoriesSelector = (state) => state.currentContent.directories;
const sortingOrderSelector = (state) => state.sortingOrder;
const sortingDescSelector = (state) => state.sortingDesc;

const sortElems = (elems, order, desc) => {
  const getSortingFunction = () => {
    switch (order) {

      case ORDERS.ALPHABETICALLY:
        return (a, b) => {
          if (a.name < b.name) {
            return desc ? 1 : -1;
          }
          if (a.name > b.name) {
            return desc ? -1 : 1;
          }
          return 0;
        };

      case ORDERS.CREATION_DATE:
        return (a, b) => {
          return desc ?
            b.creationDate - a.creationDate :
            a.creationDate - b.creationDate;
        };

      case ORDERS.MODIFICATION_DATE:
        return (a, b) => {
          return desc ?
            b.modificationDate - a.modificationDate :
            a.modificationDate - b.modificationDate;
        };
    }
  };

  const sortingFunction = getSortingFunction();

  return sortingFunction ?
    elems.sort(sortingFunction) : elems;
};

const mergeContent = (directories = [], files = []) => {
  const ret = [];

  ret.push(...directories.map((dirInfos) => {
    return Object.assign({}, dirInfos, { type: 'directory' });
  }));

  ret.push(...files.map((fileInfos) => {
    return Object.assign({}, fileInfos, { type: 'file' });
  }));

  return ret;
};

const sortedContentSelector = createSelector(
  filesSelector,
  directoriesSelector,
  sortingOrderSelector,
  sortingDescSelector,
  (files, directories, order, desc) =>
    sortElems(mergeContent(directories, files), order, desc)
);

export { sortedContentSelector };
