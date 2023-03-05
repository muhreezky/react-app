import './App.css';
import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { 
  Button, 
  Box, 
  Drawer, 
  DrawerBody, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { FaBars } from "react-icons/all";

function App() {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mb="10" textAlign="right">
        <Button p="4" colorScheme="facebook" onClick={onOpen}>
          <FaBars />&nbsp;Menu
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Website Menu
          </DrawerHeader>
          <DrawerBody>      
            <Link to="/" p="3">
              <Button colorScheme="blue" w="full" mb="3">Home</Button>
            </Link>
            <Link to="services" p="3">
              <Button colorScheme="blue" w="full" mb="3">Services</Button>
            </Link>
            <Link to="socials" p="3">
              <Button colorScheme="blue" w="full" mb="3">Socials</Button>
            </Link>
          </DrawerBody>
          <DrawerFooter>
            &copy; &nbsp; Muhammad Rizkiansyah {(new Date()).getFullYear()}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Outlet />
    </>
  )
}

export default App
