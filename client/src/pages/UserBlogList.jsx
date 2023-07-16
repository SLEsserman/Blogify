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

  const handleFollow = async (id, type) => {
    try {
      fetch("http://localhost:3000/user/follow", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          followerId: id,
        }),
      })
        .then((res) => {
          return res.json()
        })
        .then((resObj) => {
          alert(type === "follow" ? "User followed" : "User unfollowed")
          window.location.reload()
        })
    } catch (err) {
      console.log("err", err)
    }
  }
  return (
    <div>
      <Header />
      <div className="profile-container">
        <h3>User blog List</h3>
        <a href="/">Go back home</a>
        <hr />
        {state?.user?.following?.includes(userProfile?._id) ? (
          <button onClick={() => handleFollow(userProfile?._id, "unfollow")}>
            Unfollow {userProfile?.name}
          </button>
        ) : (
          <button onClick={() => handleFollow(userProfile?._id, "follow")}>
            Follow {userProfile?.name}
          </button>
        )}

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
