import { useEffect } from "react";

const setTabTitle = (pageTitle: string) => {
  document.title = `Stock Tracker | ${pageTitle}`;
};

export const useTabTitle = (pageTitle: string) => {
  useEffect(() => {
    setTabTitle(pageTitle);
  }, [pageTitle]);
};
