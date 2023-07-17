import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <ul>
        <li className="bg-blue-300 p-2 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/recommended">Recommended</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
