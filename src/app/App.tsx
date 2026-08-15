import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Layout } from "../ui/layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { COMPARE_URL } from "../constants/constants";
import { lazy, Suspense } from "react";
import { Spinner } from "../ui/spinner";

const HomePage = lazy(() =>
  import("../pages/home-page").then((module) => ({
    default: module.HomePage,
  })),
);

const ComparePage = lazy(() =>
  import("../pages/compare-page").then((module) => ({
    default: module.ComparePage,
  })),
);

const SingleStockPage = lazy(() =>
  import("../pages/single-stock-page").then((module) => ({
    default: module.SingleStockPage,
  })),
);

const ErrorPage = lazy(() =>
  import("../pages/error-page").then((module) => ({
    default: module.ErrorPage,
  })),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        Component: () => (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: `${COMPARE_URL}`,
        Component: () => (
          <Suspense fallback={<Spinner />}>
            <ComparePage />
          </Suspense>
        ),
      },
      {
        path: ":stockTricker",
        Component: () => (
          <Suspense fallback={<Spinner />}>
            <SingleStockPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        Component: () => (
          <Suspense fallback={<Spinner />}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    custom: {
      dark: "#000000",
      gray: "#cccccc",
      light: "#ffffff",
      navy: "#133458",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
