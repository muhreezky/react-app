import './App.css'
import Profile from "./components/Profile";
import { Link, Outlet } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box p="4">
        <Link to="/">
          <Button colorScheme="blue" m={{md:'10px', lg:'15px'}}>Home</Button>
        </Link>
        <Link to="services">
          <Button colorScheme="blue" m={{md:'10px', lg:'15px'}}>Services</Button>
        </Link>
      </Box>
      <Outlet />
    </>
  )
}

export default App
