import { useRoutes, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Box } from "@chakra-ui/react";

const Auth = () => {
  const routes = useRoutes([
   
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ]);
  return (
    <Box
      bgImage="url('/bgimg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      bgPosition="top"
    >
      {routes}
    </Box>
  );
};
export default Auth;