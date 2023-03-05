import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Profile from "./components/Profile";
import Services from "./components/Services";
import Socials from "./components/Socials";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Profile />} />
            <Route path="services" element={<Services />} />
            <Route path="socials" element={<Socials />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
