import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </header>
  )
}

export default Header