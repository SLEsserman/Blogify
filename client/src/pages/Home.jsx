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
            <button
              className="bg-blue-300 p-2 rounded-md text-white"
              onClick={loginWithGoogle}
            >
              Sign In With Google
            </button>
          )}
          <div className="mt-4 bg-gray-300 p-4">
            <h1 className="mb-4 mt-4 text-center text-xl font-bold">Blogify Home Page</h1>
            {posts.map((post, index) => (
              <div className="bg-white p-4 mb-4 rounded-md" key={index}>
                <Post
                  postData={post}
                  setRefetch={setRefetch}
                  loggedInUser={state.user}
                />
                {state?.user && (
                  <div className="mt-4">
                    <input
                      className="w-full h-12 border border-gray-200 rounded-md px-2"
                      type="text"
                      placeholder="Comment"
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button className="bg-blue-300 p-2 rounded-md text-white mt-4" onClick={() => handleComment(post._id)}>
                      Make Comment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
