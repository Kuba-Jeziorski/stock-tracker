import { useTabTitle } from "../utils/use-tab-title";

export const ErrorPage = () => {
  useTabTitle("Error 404");

  return <h1>error page</h1>;
};
