const blogModel = require('../models/blog');
const commentModel = require('../models/comment');

const makeCommentToBlogPost = async (req, res) => {
  try {
    const { blogId, comment } = req.body;
    const commentPayload = new commentModel({
      blogId,
      comment,
      user: req.user._id,
    })
    await commentPayload.save();
    res.status(200).json('Comment made successfully on post');
  } catch (err) {
    res.status(500).json('Unable to make comment on blog post')
  }
}

module.exports = {
  makeCommentToBlogPost,
}