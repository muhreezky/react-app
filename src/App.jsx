import './App.css';
import { Link, Outlet } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box p="4" display="flex" justifyContent="center" mb="5" columnGap={3}>
        <Link to="/" p="3">
          <Button colorScheme="blue" m={{md:'10px', lg:'15px'}}>Home</Button>
        </Link>
        <Link to="services" p="3">
          <Button colorScheme="blue" m={{md:'10px', lg:'15px'}}>Services</Button>
        </Link>
        <Link to="socials" p="3">
          <Button colorScheme="blue" m={{md:'10px', lg:'15px'}}>Socials</Button>
        </Link>
      </Box>
      <Outlet />
    </>
  )
}

export default App
