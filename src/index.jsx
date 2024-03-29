import React from "react";
import ReactDOM  from "react-dom/client";

import './main.css'

import { router } from "../src/router/index";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)