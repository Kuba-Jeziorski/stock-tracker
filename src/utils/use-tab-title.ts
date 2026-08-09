import { useEffect } from "react";

export const useTabTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `Stock Tracker | ${pageTitle}`;
  }, [pageTitle]);
};
