import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from "./pages/Auth/index.jsx";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },  // Home page route
    ],
  },
  {
    path: "/auth/*",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
          <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);