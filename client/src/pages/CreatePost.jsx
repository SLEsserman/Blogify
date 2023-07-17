import React, { useContext } from "react"
import Header from "../components/Header"
import { Context } from "../context"
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';

function CreatePost() {
  const { state } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/blog/new', {
        title,
        content,
      })
      alert('Blog post made successfully');
      //console.log(response);
    } catch (err) {
      alert('Unable to make a post', err)
    }
  }

  return (
    <div>
      <Header />
      <div className="bg-blue-400">
        <h1 className="text-center font-bold text-2xl pt-4">Profile Page</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-xl"><b>Name:</b> {state?.user?.name}</div>
          <div className="text-xl"><b>Email:</b> {state?.user?.email}</div>
        </div>
        <Link to="/">
          <button>Go back Home</button>
        </Link>
        <div>
          <form onSubmit={handleCreatePost}>
            <div>
              <label>Title</label>
              <input type="text" placeholder="Post Title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label>Post Body</label> <br />
              <textarea rows={25} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div>
              <button>Create Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
