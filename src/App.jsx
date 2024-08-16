import "./App.css";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar />
    <Box as="main" flex={1} p={4}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
  );
}

export default App;