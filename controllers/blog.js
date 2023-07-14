const blogModel = require('../models/blog');

// Controller to make a blog post
const postBlog = (req, res) => {
  try {
    const { content } = req.body;
    console.log(req.user, content);
  } catch (err) {
    res.status(500).json('Unable to make blog post')
  }
}

module.exports = {
  postBlog,
}