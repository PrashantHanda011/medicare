import React from "react";
import "./index.css";
import App from "./App";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Context from "./Components/Context/Context";
import {AuthProvider} from './firebase Hooks/authContext'

reactDom.render(
  <>
    <BrowserRouter>
    <AuthProvider>
      <Context>
        <App />
      </Context>
    </AuthProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
