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
      <div className="bg-blue-400 p-4">
        <h1 className="text-center font-bold text-2xl pt-4">Profile Page</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-xl"><b>Name:</b> {state?.user?.name}</div>
          <div className="text-xl"><b>Email:</b> {state?.user?.email}</div>
        </div>
        <Link to="/">
          <button>Go back Home</button>
        </Link>
        <div className="mx-80 bg-white p-4">
          <form onSubmit={handleCreatePost}>
            <div className="grid grid-cols-1 mt-4">
              <div>
                <p className="mb-2 font-bold text-md">Post Title</p>
                <input className="w-full h-12 border border-gray-200 rounded-md px-2" type="text" placeholder="Post Title" onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <div>
                <p className="mb-2 font-bold text-md">Post Body</p>
                <textarea className="w-full border border-gray-200 rounded-md px-2" rows={10} onChange={(e) => setContent(e.target.value)}></textarea>
              </div>
            </div>
            <div>
              <button className="w-full bg-blue-400 text-white p-2 rounded-md">Create Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
