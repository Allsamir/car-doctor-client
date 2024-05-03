import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./ContextProvider/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <div className="container mx-auto px-4">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </AuthContextProvider>,
);
