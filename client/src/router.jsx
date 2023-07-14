import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import CreatePost from "./pages/CreatePost"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/post/create",
    element: <CreatePost />,
  },
])

export default router
