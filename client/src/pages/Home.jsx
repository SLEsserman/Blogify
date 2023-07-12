import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./Home.css"

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          <Link to="/auth/google">
            <button onClick={() => {}}>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
