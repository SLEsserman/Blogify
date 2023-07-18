import React, { useContext, useEffect } from "react"
import Header from "../components/Header"
import { Context } from "../context"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function CreatePost() {
  const { state } = useContext(Context)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/category/all")
        setCategories(response.data.categories)
      } catch (err) {
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/blog/new", {
        title,
        content,
        category,
      })
      alert("Blog post made successfully")
      window.location.href = "/"
      //console.log(response);
    } catch (err) {
      alert("Unable to make a post", err)
    }
  }

  const handleCategorySelection = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <Header />
      <div className="bg-blue-400 p-4 h-screen">
        <h1 className="text-center font-bold text-2xl pt-4">Post</h1>
        <Link to="/">
          <button className="bg-white text-blue-700 rounded-md p-2 mt-4">
            Go back Home
          </button>
        </Link>
        <div className="mx-80 bg-white p-4">
          <form onSubmit={handleCreatePost}>
            <div className="grid grid-cols-1 mt-4">
              <div>
                <p className="mb-2 font-bold text-md">Post Title</p>
                <input
                  className="w-full h-12 border border-gray-200 rounded-md px-2"
                  type="text"
                  placeholder="Post Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <div>
                <p className="mb-2 font-bold text-md">Post Category</p>
                <select
                  className="w-full h-12 border border-gray-200 rounded-md px-2"
                  onChange={(e) => handleCategorySelection(e)}
                >
                  <option value=''>
                        Select a category
                      </option>
                  {categories?.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <div>
                <p className="mb-2 font-bold text-md">Post Body</p>
                <textarea
                  className="w-full border border-gray-200 rounded-md px-2"
                  rows={10}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <button className="w-full bg-blue-400 text-white p-2 rounded-md mt-4">
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
