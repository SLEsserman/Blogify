import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Post from "../components/Post"
import "./Home.css"
import { Context } from "../context"
import axios from "axios"

const LoggedIn = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:3000/blog/all")
      setPosts(response.data.posts)
      console.log(response.data.posts)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <h1>Home Page</h1>
      {posts.map((post) => (
        <Post
          postData={post}
        />
      ))}
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
