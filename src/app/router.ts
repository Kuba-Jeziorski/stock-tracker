import { createBrowserRouter } from "react-router";
import { COMPARE_URL } from "../constants/constants";
import {
  CompareRoute,
  ErrorRoute,
  HomeRoute,
  RootLayout,
  SingleStockRoute,
} from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeRoute,
      },
      {
        path: COMPARE_URL,
        Component: CompareRoute,
      },
      {
        path: ":stockTicker",
        Component: SingleStockRoute,
      },
      {
        path: "*",
        Component: ErrorRoute,
      },
    ],
  },
]);
