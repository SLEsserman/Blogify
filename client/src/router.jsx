import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import CreatePost from "./pages/CreatePost"
import UserBlogList from "./pages/UserBlogList"

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
  {
    path: "/post/user",
    element: <UserBlogList />,
  },
])

export default router
