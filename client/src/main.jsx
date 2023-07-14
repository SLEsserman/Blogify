import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import router from "./router"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import AuthContext from "./context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
)
