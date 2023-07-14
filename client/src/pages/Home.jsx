import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./Home.css"

const LoggedIn = () => {
  return <h1>Home Page</h1>
}

const Home = ({ user }) => {
  const loginWithGoogle = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  }
  return (
    <div className="page-container">
      <Header />
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          {user ? (
            <LoggedIn user={user} />
          ) : (
            <button onClick={loginWithGoogle}>Sign In With google</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
