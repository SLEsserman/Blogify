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
      <div className='bg-gray-300 p-4'>
        <h1 className="text-center font-bold text-2xl">Profile Page</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-xl"><b>Name:</b> {state?.user?.name}</div>
          <div className="text-xl"><b>Email:</b> {state?.user?.email}</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-xl"><b>Followers:</b> {state?.user?.followers.length}</div>
          <div className="text-xl"><b>Following:</b> {state?.user?.following.length}</div>
        </div>
        <Link to="/post/create">
          <button>Create New Post</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
