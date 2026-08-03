import { BehaviorSubject } from "rxjs";
import type { StockSymbol } from "../../shared/types/stock";

const STORAGE_KEY = "bookmarks";

const updateStorage = (key: string, value: Set<StockSymbol>) => {
  localStorage.setItem(key, JSON.stringify([...value]));
};

const loadBookmarks = (): Set<StockSymbol> => {
  const value = localStorage.getItem(STORAGE_KEY);

  if (!value) {
    return new Set();
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? new Set(parsed) : new Set();
  } catch {
    return new Set();
  }
};

export const createBookmarkStore = () => {
  // holds the current bookmark state and emits changes
  const bookmarks$ = new BehaviorSubject(loadBookmarks());

  const addBookmark = (symbol: StockSymbol) => {
    // create a new Set based on current state
    const next = new Set(bookmarks$.value);

    // add a new bookmark
    next.add(symbol);

    // emit a new state to subscribers
    bookmarks$.next(next);

    // persist a new state
    updateStorage(STORAGE_KEY, next);
  };

  const removeBookmark = (symbol: StockSymbol) => {
    const next = new Set(bookmarks$.value);

    // remove passed symbol from observable
    next.delete(symbol);

    // notify
    bookmarks$.next(next);
    // update localStorage
    updateStorage(STORAGE_KEY, next);
  };

  return {
    bookmarks$,
    addBookmark,
    removeBookmark,
  };
};

export const createBookmarkedOnly = () => {
  const showBookmarkedOnly$ = new BehaviorSubject(false);

  // menu icon
  const toggleShowBookmarkedOnly = () => {
    showBookmarkedOnly$.next(!showBookmarkedOnly$.value);
  };

  // filters?
  const setShowBookmarkedOnly = (value: boolean) => {
    showBookmarkedOnly$.next(value);
  };

  return {
    showBookmarkedOnly$,
    toggleShowBookmarkedOnly,
    setShowBookmarkedOnly,
  };
};
