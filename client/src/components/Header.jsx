import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import { Context } from "../context"
import axios from "axios"

function Header() {
  const { state } = useContext(Context)

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/logout")
      window.location.href = "/"
    } catch (err) {
      alert("error")
    }
  }
  return (
    <div className="header-container">
      <div>
        <Link className="link-item font-bold text-xl" to="/">
          Blogify
        </Link>
      </div>
      <div className="options-container">
        <Link to="/profile" className="link-item font-bold text-xl">
          Profile
        </Link>
      </div>
      {state?.user && (
        <div className="logout-flex">
          <div>
            Logged In as: <strong>{state.user.name}</strong>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Header
