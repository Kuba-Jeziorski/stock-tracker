import { useTabTitle } from "../../libs/utils/use-tab-title";

export const ErrorPage = () => {
  useTabTitle("Error 404");

  return <h1>error page</h1>;
};
