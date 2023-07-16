import React, { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Post from "../components/Post"
import "./Profile.css"

import { Context } from "../context"

function UserBlogList() {
  const navigate = useNavigate()
  const { state } = useContext(Context)
  const [posts, setPosts] = useState([])
  const [userProfile, setUserProfile] = useState(null)
  useEffect(() => {
    const fetchUserBlogs = async () => {
      const params = new URLSearchParams(window.location.search)
      const id = params.get("id")
      const response = await axios.get(`http://localhost:3000/user/${id}`)
      setPosts(response.data.blogs)
      setUserProfile(response.data.user)
    }
    fetchUserBlogs()
  }, [])

  if (userProfile?._id === state?.user?._id) {
    return navigate("/profile")
  }

  const handleFollow = async () => {
    try {
      const params = new URLSearchParams(window.location.search)
      const id = params.get("id")
      let res = await axios.patch("http://locahost:3000/user/follow/" + id)
      return navigate("/profile")
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div>
      <Header />
      <div className="profile-container">
        <h3>User blog List</h3>
        <a href="/">Go back home</a>
        <button onClick={handleFollow}>Follow {userProfile?.name}</button>
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
