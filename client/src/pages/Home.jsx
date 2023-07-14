import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Post from "../components/Post"
import "./Home.css"
import { Context } from "../context"
import axios from "axios"

const LoggedIn = () => {
  return <></>
}

const Home = () => {
  const { state } = useContext(Context)
  console.log("Store data", state)
  const loginWithGoogle = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  }

  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState("")
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:3000/blog/all")
      setPosts(response.data.posts)
      console.log(response.data.posts)
    }
    fetchPosts()
  }, [refetch])

  const handleComment = async (blogId) => {
    try {
      await axios.post("http://localhost:3000/comment", {
        blogId,
        comment,
      })
      setRefetch(!refetch)
      setComment("")
    } catch (err) {
      alert("Unable to make comment", err)
    }
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
            <button onClick={loginWithGoogle}>Sign In With Google</button>
          )}
          <h1>Home Page</h1>
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <Post
                postData={post}
                setRefetch={setRefetch}
                loggedInUser={state.user}
              />
              {state?.user && (
                <div>
                  <input
                    type="text"
                    placeholder="Comment"
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button onClick={() => handleComment(post._id)}>
                    Comment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
