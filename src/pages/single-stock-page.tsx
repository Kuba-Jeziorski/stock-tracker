import { useEffect } from "react";
import { setTabTitle } from "../utils/set-tab-title";

export const SingleStockPage = () => {
  useEffect(() => {
    setTabTitle("Single stock");
  }, []);
  return <h1>single stock page</h1>;
};
