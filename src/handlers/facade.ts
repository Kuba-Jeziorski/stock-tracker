import { createBookmarkStore } from "../features/bookmarks/store";

const createFacade = () => {
  const bookmarks = createBookmarkStore();

  return {
    getBookmarks: bookmarks.bookmarks$,
    addBookmark: bookmarks.addBookmark,
    removeBookmark: bookmarks.removeBookmark,
    // useSelectedRecord: () => {},
    // useFilter: () => {},
    // useSearch: () => {},
    // useSort: () => {},
  };
};

export const facade = createFacade();
