const express = require("express")
const router = express.Router()
const { postBlog, fetchAllBlogPosts } = require("../controllers/blog");
const ensureLoggedIn = require("../config/ensureLoggedIn")

// Route to post blog
router.post("/new", ensureLoggedIn, postBlog);

// Route to fetch all blog posts
router.get('/all', fetchAllBlogPosts);

module.exports = router
