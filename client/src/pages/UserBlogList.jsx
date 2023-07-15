import React from "react"
import Header from "../components/Header"
import Post from "../components/Post"
import "./Profile.css"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Context } from "../context"

function UserBlogList() {
  const { state } = useContext(Context)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchUserBlogs = async () => {
      const params = new URLSearchParams(window.location.search)
      const id = params.get("id")
      const response = await axios.get(`http://localhost:3000/blog/${id}`)
      setPosts(response.data.blogs)
    }
    fetchUserBlogs()
  }, [])
  return (
    <div>
      <Header />
      <div className="profile-container">
        <h3>User blog List</h3>
        <a href="/">Go back home</a>
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <Post postData={post} loggedInUser={state.user} />
            {state?.user && (
              <div>
                <input
                  type="text"
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => handleComment(post._id)}>Comment</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserBlogList
