import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Post from "../components/Post"
import "./Home.css"
import { Context } from "../context"

const LoggedIn = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Post
        content="Test title"
        comments="Tst content for component"
        likes={9}
      />
      <Post
        content="Test title"
        comments="Tst content for component"
        likes={12}
      />
    </>
  )
}

const Home = () => {
  const { state } = useContext(Context)
  console.log("Store data", state)
  const loginWithGoogle = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  }
  return (
    <div className="page-container">
      <Header />
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          {state?.user ? (
            <LoggedIn user={state.user} />
          ) : (
            <button onClick={loginWithGoogle}>Sign In With google</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
