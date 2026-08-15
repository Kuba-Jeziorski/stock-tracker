import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Layout } from "../ui/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

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
        element: <h1>Homepage</h1>,
      },
      {
        path: "compare",
        Component: () => <h1>Compare</h1>,
      },
      {
        path: ":stockTricker",
        Component: () => <h1>Single stock</h1>,
      },
      {
        path: "*",
        Component: () => <h1>Page not found</h1>,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    custom: {
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
