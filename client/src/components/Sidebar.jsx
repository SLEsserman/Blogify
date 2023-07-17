import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <ul>
        <li className="bg-blue-300 p-2 m-2 rounded-md text-sm font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-blue-300 p-2 m-2 rounded-md text-sm font-bold">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="bg-blue-300 p-2 m-2 rounded-md text-sm font-bold">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="bg-blue-300 p-2 m-2 rounded-md text-sm font-bold">
          <Link to="/recommended">Recommended</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
