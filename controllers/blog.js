const blogModel = require("../models/blog")

// Controller to make a blog post
const postBlog = async (req, res) => {
  try {
    const { title, content } = req.body
    console.log(req.user, content)
    const blog = new blogModel({
      userId: req.user._id,
      title,
      content,
    })
    await blog.save()
    res.status(200).json({
      message: "Blog post created successfully",
    })
  } catch (err) {
    res.status(500).json("Unable to make blog post")
  }
}

// Fetch all blog post
const fetchAllBlogPosts = async (req, res) => {
  try {
    const posts = await blogModel.find({}).populate("userId")
    res.status(200).json({
      message: "Blog posts fetched successfully",
      posts,
    })
  } catch (err) {
    res.status(500).json("Unable to fetch all blog posts")
  }
}

// Fetch blogs belonging to a user
const fetchUserBlogs = async (req, res) => {
  try {
    const { id } = req.params
    const blogs = await blogModel.find({
      userId: id,
    })
    res.status(200).json({
      message: "Uer blogs fetched successfully",
      blogs,
    })
  } catch (err) {
    res.status(500).json("Unable to fetch user blogs")
  }
}

module.exports = {
  postBlog,
  fetchAllBlogPosts,
  fetchUserBlogs,
}
