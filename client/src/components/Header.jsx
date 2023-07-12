import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="header-container">
      <div>
        <Link className="link-item" to="/">
          Blogify
        </Link>
      </div>
      <div className="options-container">
        <div>Search</div>
        <Link to="/profile" className="link-item">
          Profile
        </Link>
      </div>
    </div>
  )
}

export default Header
