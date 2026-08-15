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

const custom = {
  text: {
    primary: "#000000",
    secondary: "#ffffff",
    navy: " #133458",
  },
  background: {
    default: "#f6f6f9",
    dark: "#000000",
    light: "#ffffff",
    navy: "#133458",
  },
  table: {
    background: "#eef1f6",
    separator: "#dee2e6",
  },
  button: {
    disabledText: "#f6f7f9",
  },
  brand: {
    navy: "#133458",
  },
  status: {
    positive: "#f6f7f9",
    negative: "#f6f7f9",
  },
};

const theme = createTheme({
  palette: { custom },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
