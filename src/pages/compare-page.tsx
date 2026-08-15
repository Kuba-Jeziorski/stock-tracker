import { useEffect } from "react";
import { setTabTitle } from "../utils/set-tab-title";

export const ComparePage = () => {
  useEffect(() => {
    setTabTitle("Compare");
  }, []);

  return <h1>compare page</h1>;
};
