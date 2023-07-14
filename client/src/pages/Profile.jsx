import React, { useContext } from "react"
import Header from "../components/Header"
import { Context } from "../context"
import { Link } from "react-router-dom"
import "./Profile.css"

function Profile() {
  const { state } = useContext(Context)
  console.log("profile state data", state)
  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1>Profile Page</h1>
        <div>{state?.user?.name}</div>
        <div>{state?.user?.email}</div>
        <Link to="/post/create">
          <button>Create New Post</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
