import { useEffect } from "react";
import { setTabTitle } from "../utils/set-tab-title";

export const ErrorPage = () => {
  useEffect(() => {
    setTabTitle("Error 404");
  }, []);

  return <h1>error page</h1>;
};
