import {
  createBookmarkedOnly,
  createBookmarkStore,
} from "../features/bookmarks/store";
import { createSelectedStore } from "../features/selected-stock/store";

const createFacade = () => {
  const bookmarks = createBookmarkStore();
  const selectedStock = createSelectedStore();
  const bookmarkedOnly = createBookmarkedOnly();

  return {
    getBookmarks: bookmarks.bookmarks$,
    addBookmark: bookmarks.addBookmark,
    removeBookmark: bookmarks.removeBookmark,
    getSelectedStock: selectedStock.selectedStock$,
    selectStock: selectedStock.selectStock,
    getBookmarkedOnly: bookmarkedOnly.showBookmarkedOnly$,
    toggleShowBookmarkedOnly: bookmarkedOnly.toggleShowBookmarkedOnly,
    setBookmarkedOnly: bookmarkedOnly.setShowBookmarkedOnly,
    // useFilter: () => {},
    // useSearch: () => {},
    // useSort: () => {},
  };
};

export const facade = createFacade();
