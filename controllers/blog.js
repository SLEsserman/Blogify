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
    const posts = await blogModel
      .find({})
      .populate(["userId", { path: "comments", populate: ["user"] }])
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
      .populate("comments")
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
  updateLikes,
}
