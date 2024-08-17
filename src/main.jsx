import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from "./pages/Auth/index.jsx";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ContactUs from "./pages/contact/index.jsx";

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <ProtectedRoute>
        <App /> {/* Protected App and its children */}
      </ProtectedRoute>
    ),
    children: [
      {
        index: true, // This makes the Home component the default for "/"
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      }, 
      {
        path:'contact',
        element:<ContactUs/>
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      },
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