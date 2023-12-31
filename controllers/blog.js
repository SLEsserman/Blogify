const blogModel = require("../models/blog")

async function updateLikes(req, res) {
  try {
    const user = req.user
    let blog = await blogModel.findById(req.params.id)
    if (!blog.likes.includes(user._id)) {
      console.log("hit this scope")
      blog.likes = [...blog.likes, user._id]
    } else {
      console.log("hit that scop")
      let likesCopy = blog.likes
      let filtered = likesCopy.filter((like) => like.toString() != user._id)
      console.log("filtered", filtered)
      blog.likes = filtered
    }
    await blog.save()
    return res.status(200).send("Like status updated")
  } catch (err) {
    console.log(err.message)
    res.status(500).send("")
  }
}

// Controller to make a blog post
const postBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body
    console.log(req.user, content)
    const blog = new blogModel({
      userId: req.user._id,
      title,
      content,
      category,
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
    const posts = await blogModel
      .find({})
      .populate(["userId", { path: "comments", populate: ["user"] }, {path: 'category'}])
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
    const blogs = await blogModel
      .find({
        userId: id,
      })
      .populate(["userId", { path: "comments", populate: ["user"] }])
    res.status(200).json({
      message: "User blogs fetched successfully",
      blogs,
    })
  } catch (err) {
    res.status(500).json("Unable to fetch user blogs")
  }
}

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params
    let userId = req.user._id
    let blogPost = await blogModel.findById(id)
    if (userId.toString() === blogPost.userId.toString()) {
      await blogModel.findByIdAndDelete(id)
      return res.status(200).json({
        message: "Blog post deleted successfully",
      })
    }
    return res.status(403).json({
      message: "unable to delete, inadequate permission",
    })
  } catch (err) {
    res.status(500).json("Unable to delete blog")
  }
}

const fetchBlogsByCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const posts = await blogModel.find({category: id}).populate(["userId", { path: "comments", populate: ["user"] }, {path: 'category'}])
    res.status(200).json({
      message: 'Blogs fetched successfully',
      posts,
    })
  } catch (err) {
    res.status(500).json("Unable to fetch blogs")
  }
}

module.exports = {
  postBlog,
  fetchAllBlogPosts,
  fetchUserBlogs,
  updateLikes,
  deleteBlogPost,
  fetchBlogsByCategory,
}
