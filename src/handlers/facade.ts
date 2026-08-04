import {
  createBookmarkedOnly,
  createBookmarkStore,
} from "../features/bookmarks/store";
import { createSearchStore } from "../features/search/store";
import { createSelectedStore } from "../features/selected-stock/store";

const createFacade = () => {
  const bookmarks = createBookmarkStore();
  const selectedStock = createSelectedStore();
  const bookmarkedOnly = createBookmarkedOnly();
  const searchedString = createSearchStore();

  return {
    getBookmarks: bookmarks.bookmarks$,
    addBookmark: bookmarks.addBookmark,
    removeBookmark: bookmarks.removeBookmark,
    getSelectedStock: selectedStock.selectedStock$,
    selectStock: selectedStock.selectStock,
    getBookmarkedOnly: bookmarkedOnly.showBookmarkedOnly$,
    toggleShowBookmarkedOnly: bookmarkedOnly.toggleShowBookmarkedOnly,
    setBookmarkedOnly: bookmarkedOnly.setShowBookmarkedOnly,
    getSearchedStringRaw: searchedString.input$,
    getSearchedString: searchedString.searchInput$,
    setSearchedString: searchedString.searchInput,
    // useFilter: () => {},
    // useSearch: () => {},
    // useSort: () => {},
  };
};

export const facade = createFacade();
