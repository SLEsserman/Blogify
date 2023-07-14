import React, { useContext } from "react"
import Header from "../components/Header"
import { Context } from "../context"
import { Link } from "react-router-dom"

function CreatePost() {
  const { state } = useContext(Context)

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1>Profile Page</h1>
        <div>{state?.user?.name}</div>
        <div>{state?.user?.email}</div>
        <Link to="/">
          <button>Go back Home</button>
        </Link>
        <div>
          <form>
            <div>
              <label>Title</label>
              <input type="text" placeholder="Post Title" />
            </div>
            <div>
              <label>Post Body</label> <br />
              <textarea rows={25}></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
