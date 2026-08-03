import { createBookmarkStore } from "../features/bookmarks/store";
import { createSelectedStore } from "../features/selected-stock/store";

const createFacade = () => {
  const bookmarks = createBookmarkStore();
  const selectedStock = createSelectedStore();

  return {
    getBookmarks: bookmarks.bookmarks$,
    addBookmark: bookmarks.addBookmark,
    removeBookmark: bookmarks.removeBookmark,
    getSelectedStock: selectedStock.selectedStock$,
    selectStock: selectedStock.selectStock,
    // useFilter: () => {},
    // useSearch: () => {},
    // useSort: () => {},
  };
};

export const facade = createFacade();
