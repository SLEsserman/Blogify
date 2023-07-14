import React from "react"
import Header from "../components/Header"
import Post from "../components/Post"
import "./Profile.css"
import { useEffect, useState } from "react"
import axios from "axios"

function UserBlogList() {
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
        {posts.map((post) => (
          <Post postData={post} />
        ))}
      </div>
    </div>
  )
}

export default UserBlogList
