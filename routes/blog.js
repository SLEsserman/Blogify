const express = require("express")
const router = express.Router()
const { postBlog, fetchAllBlogPosts, fetchUserBlogs, updateLikes, deleteBlogPost, fetchBlogsByCategory } = require("../controllers/blog");
const ensureLoggedIn = require("../config/ensureLoggedIn")

// Route to post blog
router.post("/new", ensureLoggedIn, postBlog);

// Route to fetch all blog posts
router.get('/all', fetchAllBlogPosts);

// Route to fetch blogs of a user
router.get('/:id', ensureLoggedIn, fetchUserBlogs);
router.patch("/:id",ensureLoggedIn, updateLikes);
router.delete('/:id', ensureLoggedIn, deleteBlogPost);

// Route to fetch blogs by category
router.get('/filter/:id', fetchBlogsByCategory);

module.exports = router
