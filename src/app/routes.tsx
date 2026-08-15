import { lazy, Suspense, type ComponentType } from "react";
import { Outlet } from "react-router";
import { Layout } from "../ui/layout";
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

const withSuspense = (Page: ComponentType) => {
  return () => {
    return (
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    );
  };
};

export const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export const HomeRoute = withSuspense(HomePage);
export const CompareRoute = withSuspense(ComparePage);
export const SingleStockRoute = withSuspense(SingleStockPage);
export const ErrorRoute = withSuspense(ErrorPage);
