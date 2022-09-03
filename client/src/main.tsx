import React from "react";
// import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
// import './index.css'
import { theme } from "./theme";
import { ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "./routes";
import { LocationGenerics } from "./types";
import "boxicons/css/boxicons.min.css";

const location = new ReactLocation<LocationGenerics>();
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router routes={routes} location={location}></Router>
    </ChakraProvider>
  </React.StrictMode>
);
