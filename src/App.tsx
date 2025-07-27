import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/home-page/home-page";
import AboutPage from "./components/about-page/about-page";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/home", element: <h1>HOOOOOOOOOOOME</h1> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
